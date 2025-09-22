import { type FC, useEffect } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/1.Atoms/AtomQrCode";
import { Act } from "../../../../Logic/Core";

export interface IComponent {
	onAction: (isOk: boolean) => void;
}

const token = "wtyuio";

const Index: FC<IComponent> = (props) => {
	const { onAction } = props;

	useEffect(() => {
		login();
	});

	async function login() {
		const log = Act.Setting.LoginQr(token);

		onAction(Boolean(log));
	}

	const propsComponent: IProp = {
		code: token,
	};

	return <Substance {...propsComponent} />;
};

export default Index;
