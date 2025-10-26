import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/2.Molecules/MoleculeControllRow";
import { Act } from "../../../../Logic/Core";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const namePage = Act.Router.getCurPathName();

	const propsComponent: IProp = {
		btn: { leftIcon: "Block", text: "CART", color: "GREY_1" },
		title: { text: namePage, font: "LabelLarge" },
	};

	return <Substance {...propsComponent} />;
};

export default Index;
