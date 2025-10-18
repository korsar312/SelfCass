import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomButtonCount from "../../../1.Atoms/AtomButton/Variables/AtomButtonCount";
import Text from "../../../0.Cores/Text";
import AtomButtonIcon from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";

const View: NFC<typeof Model> = (props) => {
	const { count, increment, decrement, leftImage, isNullValue } = props;

	return (
		<div css={Style.wrapper}>
			<AtomButtonCount icon={leftImage} click={decrement} isDisable={isNullValue} />
			<Text text={count} font={"LabelLarge"} color={"TYPO_4"} />
			<AtomButtonCount icon={"Add"} click={increment} />

			<div css={Style.addCont(isNullValue)}>
				<AtomButtonIcon isFullHeight isFullWidth icon={"Add"} click={increment} />
			</div>
		</div>
	);
};

export default View;
