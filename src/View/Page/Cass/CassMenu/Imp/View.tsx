import type Model from "./Model.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import { Act } from "../../../../../Logic/Core";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	function as() {
		Act.Router.goTo("CASS_LOGIN");
	}

	return <div onClick={as}>{Act.Message.getWord("DAY_US_USDT", { arrReplace: ["1", "4", "6"] })}</div>;
};

export default View;
