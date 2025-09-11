import type Model from "./Model.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import { Act } from "../../../../Logic/Core";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	function as() {
		Act.Router.goTo("MENU");
	}

	return <div onClick={as}>123</div>;
};

export default View;
