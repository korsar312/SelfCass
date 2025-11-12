import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceItemCard";
import { Act } from "../../../../Logic/Core";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const imagePath = Act.Setting.getLogo();

	const propsComponent: IProp = {
		name: "fhg",
		price: 55,
		image: imagePath,
	};

	return <Substance {...propsComponent} />;
};

export default Index;
