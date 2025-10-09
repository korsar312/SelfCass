import type { FC } from "react";
import Style from "./Style.ts";
import Component, { type IComponent as IParent } from "../../index";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { TImageComponent } from "../../../../0.Cores/Image";

export interface IComponent extends Pick<IParent, "isDisable" | "click" | "color"> {
	leftIcon?: TImageComponent;
	text: MessageInterface.EWord;
	rightIcon?: TImageComponent;
}

const Index: FC<IComponent> = (props) => {
	const { text, leftIcon, rightIcon, color } = props;

	const propsComponent: IParent = {
		...props,
		color: color || "PRIME_6",
		isFullWidth: true,
		type: "submit",
		textVars: { groupStyle: Style.text, value: [{ text, font: "LabelLarge" }] },
		icons: {
			left: leftIcon ? { value: [{ img: leftIcon, size: 20 }] } : undefined,
			right: rightIcon ? { value: [{ img: rightIcon, size: 20 }] } : undefined,
		},
		extStyles: Style.wrapper,
	};

	return <Component {...propsComponent} />;
};

export default Index;
