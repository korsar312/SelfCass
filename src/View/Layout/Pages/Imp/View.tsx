import type Model from "./Model.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import { Act } from "../../../../Logic/Core";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	const asd = Act.Message.getWord("DAY_US_USDT", "RU", ["рас", "два", "три"]);

	return <div>
		{asd}
	</div>;
};

export default View;
