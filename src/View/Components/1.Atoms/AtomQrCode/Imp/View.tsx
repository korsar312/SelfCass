import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Text from "../../../0.Cores/Text";

const View: NFC<typeof Model> = (props) => {
	const { qrRef, qrWrap, bgColor, isTooSmall } = props;

	return (
		<div ref={qrWrap} css={Style.wrapper(bgColor)}>
			<div css={Style.qr} ref={qrRef} />
			{isTooSmall && <Text text={"QR_TO_SMALL"} font={"LabelMain"} />}
		</div>
	);
};

export default View;
