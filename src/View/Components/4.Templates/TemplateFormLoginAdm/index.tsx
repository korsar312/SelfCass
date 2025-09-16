import type { FC } from "react";
import Substance, {
	type IComponent as ISubstances,
	type TMoleculeFormSchemaLoginForm,
} from "../../../Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaLogin";
import { Act } from "../../../../Logic/Core";

export interface IComponent {
	onAction: (isOk: boolean) => void;
}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	function login({ login, password }: TMoleculeFormSchemaLoginForm) {
		Act.Setting.Login(login, password);
	}

	const propsComponent: ISubstances = {
		title: "CASS",
		labelLog: "LOGIN",
		labelPas: "PASSWORD",
		btnText: "ENTER",
		submit: login,
	};

	return <Substance {...propsComponent} />;
};

export default Index;
