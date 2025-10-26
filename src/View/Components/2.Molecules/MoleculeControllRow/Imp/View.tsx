import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomButtonSecond from "../../../1.Atoms/AtomButton/Variables/AtomButtonSecond";
import Text from "../../../0.Cores/Text";

const View: NFC<typeof Model> = (props) => {
	const { btn, title } = props;

	return (
		<div css={Style.wrapper}>
			<div css={Style.space}>
				<AtomButtonSecond {...btn} />
			</div>

			<div css={Style.space}>
				<Text {...title} />
			</div>

			<div css={Style.space} />
		</div>
	);
};

export default View;
