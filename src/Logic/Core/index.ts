import LinksImp from "./Infrastructure/InfrastructureLinks/Imp/Links.imp.ts";
import { InfrastructureLinks } from "./Infrastructure/InfrastructureLinks";
import DI from "./DI/DI.ts";
import type { ProjectInterface } from "./DI/Project.interface.ts";
import MessageImp from "./Services/ServiceMessage/Imp/Message.imp.ts";
import { ServiceMessage } from "./Services/ServiceMessage";


/**
 * Интеграция АПИ
 */
const linksImps = new LinksImp();
const links = new InfrastructureLinks(linksImps);

const Infrastructure = new DI<ProjectInterface.TModuleInf>();

Infrastructure.use("Links", links);
const API = Infrastructure.get;


/**
 * Интеграция модулей
 */
const messageImp = new MessageImp({ infrastructure: API });
const message = new ServiceMessage(messageImp);

const service = new DI<ProjectInterface.TModuleService>();

service.use("Message", message);
const modeles = service.get;

export const Act = modeles;

//("Message").invoke.getWord("DAY_US_USDT", "RU");