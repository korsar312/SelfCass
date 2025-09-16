import type { FC } from "react";
import Component, { type IComponent as IParent } from "../../index";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";

export interface IComponent extends Pick<IParent, "isDisable" | "click"> {
	text: MessageInterface.EWord;
}

const Index: FC<IComponent> = (props) => {
	const { text } = props;

	const propsComponent: IParent = {
		...props,
		color: "MEDIUM",
		isFullWidth: true,
		type: "submit",
		textVars: { groupStyle: { flex: 1 }, value: [{ text, font: "LabelMain" }] },
		extStyles: {
			padding: 12,
			borderRadius: 12,
			border: "none",
		},
	};

	return <Component {...propsComponent} />;
};

export default Index;
