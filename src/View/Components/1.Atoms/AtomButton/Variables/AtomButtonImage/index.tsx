import type { FC } from "react";
import Style from "./Style.ts";
import Component, { type IComponent as IParent } from "../../index";
import type { TImageComponent } from "../../../../0.Cores/Image";

export interface IComponent extends Pick<IParent, "isDisable" | "click" | "color"> {
	icon: TImageComponent;
	text: TImageComponent;
}

const Index: FC<IComponent> = (props) => {
	const { icon, text } = props;

	const propsComponent: IParent = {
		...props,
		type: "submit",
		icons: { left: { value: [{ img: icon, size: "100%" }], groupStyle: Style.image } },
		textVars: {
			value: [{ text, font: "fullSize", caseWord: "CAPITAL", color: "TYPO_1" }],
			groupStyle: Style.text,
		},
		isFullHeight: true,
		isFullWidth: true,
		extStyles: Style.wrapper,
	};

	return <Component {...propsComponent} />;
};

export default Index;
