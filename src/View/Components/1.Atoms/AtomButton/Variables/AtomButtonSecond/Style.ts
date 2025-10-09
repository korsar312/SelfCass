import Styles from "../../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		padding: 10px 16px;
		border-radius: 12px;
	`;

	public text: CSSObject = css`
		flex: 1;
	`;
}

export default new Style();
