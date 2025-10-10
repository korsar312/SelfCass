import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { TDeepCSSObject, TTagPartial } from "../../../ViewUtils.tsx";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { IComponent as IImage } from "../../0.Cores/Image";

export interface IComponent extends TTagPartial<HTMLInputElement, "name" | "onClick" | "type"> {
	initText: TAtomInputText | MessageInterface.EWordAll;
	onChange?: (val: string) => void;
	icons?: Partial<Record<EAtomInputIcon, TAtomInputIcon>>;
}

export type TAtomInputText = {
	text: MessageInterface.EWordAll;
	font: StyleInterface.EFont;
	color?: StyleInterface.TColorChoice;
};

type EAtomInputIcon = "left" | "right";
export type TAtomInputIcon = TAtomInputGeneralGroup<IImage>;

export type TAtomInputGeneralGroup<T> = {
	groupStyle?: TDeepCSSObject;
	value: T[];
};

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
