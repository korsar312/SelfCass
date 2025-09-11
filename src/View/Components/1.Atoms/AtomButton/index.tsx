import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IText } from "../../0.Cores/Text";
import type { IComponent as IImage } from "../../0.Cores/Image";
import type { TDeepCSSObject, TTagPartial } from "../../../ViewUtils.tsx";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export interface IComponent extends TTagPartial<HTMLButtonElement, "type"> {
	textVars?: TAtomButtonText;
	color?: StyleInterface.TColorChoice;
	isDisable?: boolean;
	extStyles?: TDeepCSSObject;
	icons?: Partial<Record<EAtomButtonIcon, TAtomButtonIcon>>;
	isFullWidth?: boolean;
	click?: () => void;
}

export type EAtomButtonIcon = "left" | "right";

export type TAtomButtonGeneralGroup<T> = {
	groupStyle?: TDeepCSSObject;
	value: T[];
};

export type TAtomButtonText = TAtomButtonGeneralGroup<IText>;
export type TAtomButtonIcon = TAtomButtonGeneralGroup<IImage>;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
