import type { IComponent } from "../index";
import { useEffect } from "react";
import { Act } from "../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	const currentRole = Act.Router.getRole();

	useEffect(() => {
		init();
	}, [currentRole]);

	async function init() {
		Act.Setting.requestBusiness();
	}

	return {};
}

export default Model;
