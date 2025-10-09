import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { onClick, isFlag, disabled } = props;

	return <input disabled={disabled} onClick={onClick} checked={isFlag || false} type="radio" css={Style.wrapper} />;
};

export default View;
