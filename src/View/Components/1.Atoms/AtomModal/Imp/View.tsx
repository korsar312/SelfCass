import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { children, refDialog, close, isShow } = props;

	[close, isShow];

	return (
		<dialog ref={refDialog} css={Style.wrapper}>
			{children}
		</dialog>
	);
};

export default View;
