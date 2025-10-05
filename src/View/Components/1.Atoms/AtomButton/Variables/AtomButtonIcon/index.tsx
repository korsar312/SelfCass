import type { FC } from "react";
import Component, { type IComponent as IParent } from "../../index";
import type { TImageComponent } from "../../../../0.Cores/Image";

export interface IComponent extends Pick<IParent, "isDisable" | "click" | "color"> {
	icon: TImageComponent;
}

const Index: FC<IComponent> = (props) => {
	const { icon } = props;

	const propsComponent: IParent = {
		...props,
		color: "PRIME_6",
		type: "submit",
		icons: { left: { value: [{ img: icon, size: 20 }] } },
		extStyles: { padding: 10, borderRadius: 12 },
	};

	return <Component {...propsComponent} />;
};

export default Index;
