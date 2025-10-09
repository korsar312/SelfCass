import type { FC } from "react";
import Style from "./Style.ts";
import Component, { type IComponent as IParent } from "../../index";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { IComponent as IText } from "../../../../0.Cores/Text";

export interface IComponent extends Pick<IParent, "click"> {
	text: MessageInterface.EWord;
	isFill?: boolean;
}

const Index: FC<IComponent> = (props) => {
	const { text, isFill } = props;

	const textParam: IText = {
		text,
		font: isFill ? "LabelMedium" : "LabelSmall",
		color: isFill ? "TYPO_5" : "TYPO_3",
	};

	const propsComponent: IParent = {
		...props,
		color: isFill ? "PRIME_1" : "WHITE",
		type: "submit",
		textVars: { groupStyle: Style.text, value: [textParam] },
		extStyles: Style.wrapper,
	};

	return <Component {...propsComponent} />;
};

export default Index;
