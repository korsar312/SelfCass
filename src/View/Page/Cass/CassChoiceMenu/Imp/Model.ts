import type { IComponent } from "../index";
import { Act } from "../../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	const title = Act.Setting.getName();
	const imagePath = Act.Setting.getLogo();

	function goMenu() {
		Act.Router.goTo("CASS_MENU");
	}

	function goBasket() {
		Act.Router.goTo("CASS_MENU", { openBasket: "1" });
	}

	function goPay() {
		Act.Router.goTo("CASS_MENU");
	}

	function goGame() {
		Act.Router.goTo("CASS_MENU");
	}

	function callWaiter() {
		Act.Order.callWaiter();
	}

	return { title, imagePath, goMenu, goBasket, goPay, goGame, callWaiter };
}

export default Model;
