import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { TTagPartial } from "../../../ViewUtils.tsx";

export interface IComponent extends TTagPartial<HTMLInputElement, "onClick" | "disabled"> {
	isFlag?: boolean;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
