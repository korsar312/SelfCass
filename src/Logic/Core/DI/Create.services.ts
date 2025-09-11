import DI from "./DI";
import Infrastructure from "./Create.infrastructure";
import { ServiceMessage } from "../Services/ServiceMessage";
import MessageImp from "../Services/ServiceMessage/Imp/Message.imp.ts";
import type { ProjectInterface } from "./Project.interface.ts";
import Dictionary from "../../Config/Dictionary.ts";
import { ServiceStyle } from "../Services/ServiceStyle";
import StyleImp from "../Services/ServiceStyle/Imp/Style.imp.ts";
import { Fonts, Weights } from "../../Config/Fonts.ts";
import { Colors } from "../../Config/Colors.ts";

const messageImp = new MessageImp({ infrastructure: Infrastructure }, Dictionary);
const message = new ServiceMessage(messageImp);

const styleImp = new StyleImp({ infrastructure: Infrastructure }, Colors, Fonts, Weights);
const style = new ServiceStyle(styleImp);

const service = new DI<ProjectInterface.TModuleService>();

service.use("Message", message);
service.use("Style", style);

export default service.get;
