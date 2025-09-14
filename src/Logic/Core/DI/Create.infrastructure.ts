import DI from "./DI";
import LinksImp from "../Infrastructure/InfrastructureLinks/Imp/Links.imp";
import { InfrastructureLinks } from "../Infrastructure/InfrastructureLinks";
import type { ProjectInterface } from "./Project.interface.ts";
import { Links } from "../../Config/List/Links.ts";

const linksImps = new LinksImp(Links);
const links = new InfrastructureLinks(linksImps);

const Infrastructure = new DI<ProjectInterface.TModuleInf>();

Infrastructure.use("Links", links);

export default Infrastructure.get;
