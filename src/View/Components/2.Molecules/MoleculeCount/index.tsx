import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IText } from "../../0.Cores/Text";
import type { IComponent as IBtnImg } from "../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import type { IComponent as IBtn } from "../../1.Atoms/AtomButton/Variables/AtomButtonSecond";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";

export interface IComponent {
	textVars: IText;
	leftBtn: IBtnImg;
	rightBtn: IBtnImg;
	fullBtn: IBtn;
	extStyles?: TDeepCSSObject;
	isFullBtn?: boolean;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
