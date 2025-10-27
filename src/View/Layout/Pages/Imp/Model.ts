import type { IComponent } from "../index";
import { Act } from "../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	const router = Act.Router.getRouteObj();

	const name = Act.Router.getCurPage();
	const isAccessPage = Act.Router.isAccessPage(name);

	return { router, isAccessPage };
}

export default Model;
