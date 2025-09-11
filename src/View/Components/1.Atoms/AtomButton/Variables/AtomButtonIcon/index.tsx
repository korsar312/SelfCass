import type { FC } from "react";
import Component, { type IComponent as IParent } from "../../index";
import type { TImageComponent } from "../../../../0.Cores/Image";

export interface IComponent extends Pick<IParent, "isDisable" | "click" | "isFullWidth" | "type"> {
	icon: TImageComponent;
}

const Index: FC<IComponent> = (props) => {
	const { icon } = props;

	const propsComponent: IParent = {
		...props,
		icons: { left: { value: [{ size: 40, img: icon, color: "PRIME" }] } },
		extStyles: { padding: 6, gap: 22, borderRadius: 8, border: "none", display: "flex", justifyContent: "center" },
	};

	return <Component {...propsComponent} />;
};

export default Index;
