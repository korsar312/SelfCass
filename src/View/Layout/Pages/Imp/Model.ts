import type { IComponent } from "../index";
import { Act } from "../../../../Logic/Core";
import { useEffect } from "react";

function Model(props: IComponent) {
	const {} = props;

	const router = Act.Router.getRouteObj();

	const name = Act.Router.getCurPage();
	const nameWord = Act.Message.getWord(name);

	const isAccessPage = Act.Router.isAccessPage(name);

	useEffect(() => {
		document.title = nameWord;
	}, [name]);

	return { router, isAccessPage };
}

export default Model;
