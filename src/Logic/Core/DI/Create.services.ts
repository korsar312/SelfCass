import DI from "./DI";
import Infrastructure from "./Create.infrastructure";
import { ServiceMessage } from "../Services/ServiceMessage";
import MessageImp from "../Services/ServiceMessage/Imp/Message.imp.ts";
import type { ProjectInterface } from "./Project.interface.ts";
import { ServiceStyle } from "../Services/ServiceStyle";
import StyleImp from "../Services/ServiceStyle/Imp/Style.imp.ts";
import Dictionary from "../../Config/List/Dictionary.ts";
import { Colors } from "../../Config/List/Colors.ts";
import { Fonts, Weights } from "../../Config/List/Fonts.ts";
import RouterImp from "../Services/ServiceRouter/Imp/Router.imp.ts";
import { ServiceRouter } from "../Services/ServiceRouter";
import { Path, Routes } from "../../Config/List/Routes.ts";

const messageImp = new MessageImp({ infrastructure: Infrastructure }, Dictionary);
const message = new ServiceMessage(messageImp);

const styleImp = new StyleImp({ infrastructure: Infrastructure }, Colors, Fonts, Weights);
const style = new ServiceStyle(styleImp);

const routerImp = new RouterImp({ infrastructure: Infrastructure }, Routes, Path);
const router = new ServiceRouter(routerImp);

const service = new DI<ProjectInterface.TModuleService>();

service.use("Message", message);
service.use("Style", style);
service.use("Router", router);

export default service.get;
