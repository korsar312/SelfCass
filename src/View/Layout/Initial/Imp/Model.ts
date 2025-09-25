import type { IComponent } from "../index";
import { useLayoutEffect } from "react";
import { Act } from "../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	const currentRole = Act.Router.getRole();

	useLayoutEffect(() => {
		initRole();
	}, [currentRole]);

	function initRole() {
		Act.Setting.requestBusiness();
	}

	return {};
}

export default Model;
