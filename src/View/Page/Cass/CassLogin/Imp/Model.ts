import type { IComponent } from "../index";
import { Act } from "../../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	function enterCass(isEnter: Boolean) {
		if (!isEnter) return;

		Act.Router.setRouteRole("CASS");
		Act.Router.goTo("CASS_CHOICE_MENU");
	}

	return { enterCass };
}

export default Model;
