import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { TTagPartial } from "../../../ViewUtils.tsx";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export interface IComponent extends TTagPartial<HTMLInputElement, "name" | "onClick" | "type"> {
	initText: TAtomInputText | MessageInterface.EWordAll;
	onChange?: (val: string) => void;
}

export type TAtomInputText = {
	text: MessageInterface.EWordAll;
	font: StyleInterface.EFont;
	color?: StyleInterface.TColorChoice;
};

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
