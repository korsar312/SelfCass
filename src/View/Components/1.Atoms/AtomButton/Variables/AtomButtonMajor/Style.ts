import Styles from "../../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		padding: 14px 36px;
		border-radius: 12px;
	`;

	public text: CSSObject = css`
		flex: 1;
	`;
}

export default new Style();
