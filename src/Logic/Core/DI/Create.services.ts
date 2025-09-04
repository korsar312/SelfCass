import DI from "./DI";
import Infrastructure from "./Create.infrastructure";
import { ServiceMessage } from "../Services/ServiceMessage";
import MessageImp from "../Services/ServiceMessage/Imp/Message.imp.ts";
import type { ProjectInterface } from "./Project.interface.ts";

const messageImp = new MessageImp({ infrastructure: Infrastructure.get });
const message = new ServiceMessage(messageImp);

const service = new DI<ProjectInterface.TModuleService>();

service.use("Message", message);

export default service.get;
