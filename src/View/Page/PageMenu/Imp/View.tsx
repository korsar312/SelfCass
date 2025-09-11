import type Model from "./Model.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import { Act } from "../../../../Logic/Core";
import AtomModal from "../../../Components/1.Atoms/AtomModal/index.tsx";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	function as() {
		Act.Router.goTo("HOME");
	}

	return (
		<div onClick={as}>
			<AtomModal isShow={true}>32456</AtomModal>
			{Act.Message.getWord("DAY_US_USDT", { arrReplace: ["1", "4", "6"] })}
		</div>
	);
};

export default View;
