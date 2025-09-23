import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { qrRef, qrWrap, bgColor } = props;

	return (
		<div ref={qrWrap} css={Style.wrapper(bgColor)}>
			<div css={Style.qr} ref={qrRef} />
		</div>
	);
};

export default View;
