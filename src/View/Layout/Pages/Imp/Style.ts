import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	`;
}

export default new Style();
