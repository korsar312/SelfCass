import type { FC } from "react";
import Component, { type IComponent as IParent } from "../../index";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { TImageComponent } from "../../../../0.Cores/Image";

export interface IComponent extends Pick<IParent, "isDisable" | "click" | "color"> {
	leftIcon?: TImageComponent;
	text: MessageInterface.EWord;
	rightIcon?: TImageComponent;
}

const Index: FC<IComponent> = (props) => {
	const { text, leftIcon, rightIcon } = props;

	const propsComponent: IParent = {
		...props,
		color: "PRIME_6",
		isFullWidth: true,
		type: "submit",
		textVars: { groupStyle: { flex: 1 }, value: [{ text, font: "LabelLarge" }] },
		icons: {
			left: leftIcon ? { value: [{ img: leftIcon }] } : undefined,
			right: rightIcon ? { value: [{ img: rightIcon }] } : undefined,
		},
		extStyles: { padding: "14px 36px", borderRadius: 12 },
	};

	return <Component {...propsComponent} />;
};

export default Index;
