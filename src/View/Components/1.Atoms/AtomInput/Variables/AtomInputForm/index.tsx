import type { FC } from "react";
import Component, { type IComponent as IParent, type TAtomInputText } from "../../index";
import { Act } from "../../../../../../Logic/Core";

export interface IComponent extends IParent {}

const Index: FC<IComponent> = (props) => {
	const { extStyle } = props;

	const color = Act.Style.getColor("BLACK");

	const propsComponent: IParent = {
		...props,
		initText: textProp(props.initText),
		extStyle: [extStyle, { outline: `2px solid ${color}`, padding: "2px 6px", borderRadius: 12, boxSizing: "border-box" }],
	};

	function textProp(el: TAtomInputText): TAtomInputText {
		return el && { ...el, font: el.font || "BodyMain" };
	}

	return <Component {...propsComponent} />;
};

export default Index;
