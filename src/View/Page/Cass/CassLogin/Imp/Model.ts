import type { IComponent } from "../index";

function Model(props: IComponent) {
	const {} = props;

	function enterCass(isEnter: Boolean) {
		if (!isEnter) return;

		//Act.Router.setRouteRole("CASS");
		//console.log(132);
		//Act.Router.goTo("CASS_CHOICE_MENU");
	}

	return { enterCass };
}

export default Model;
