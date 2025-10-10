import type { FC } from "react";
import Component, { type IComponent as IParent } from "../../index";

export interface IComponent extends IParent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IParent = {
		...props,
	};

	return <Component {...propsComponent} />;
};

export default Index;
