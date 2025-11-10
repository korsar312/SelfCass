import type Model from "./Model.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomInput from "../../../../Components/1.Atoms/AtomInput";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<div>
			<AtomInput iconsLeft={"Search"} placeholder={"SEARCHING"} initText={{ text: "" }} />
		</div>
	);
};

export default View;
