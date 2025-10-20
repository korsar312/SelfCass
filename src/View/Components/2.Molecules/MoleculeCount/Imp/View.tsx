import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomButtonCount from "../../../1.Atoms/AtomButton/Variables/AtomButtonCount";
import Text from "../../../0.Cores/Text";
import AtomButtonSecond from "../../../1.Atoms/AtomButton/Variables/AtomButtonSecond";

const View: NFC<typeof Model> = (props) => {
	const { textObj, leftBtnObj, rightBtnObj, fullBtnObj, isFullBtn, extStyles } = props;

	return (
		<div css={[Style.wrapper, extStyles]}>
			<AtomButtonCount {...leftBtnObj} />
			<Text {...textObj} />
			<AtomButtonCount {...rightBtnObj} />

			<div css={Style.addCont(isFullBtn)}>
				<AtomButtonSecond {...fullBtnObj} />
			</div>
		</div>
	);
};

export default View;
