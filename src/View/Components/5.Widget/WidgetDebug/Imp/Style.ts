import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css``;

	public titleBtn: CSSObject = css`
		${this.mixins.flexCenter};
		gap: ${this.size(2)};
		width: 250px;
		padding: ${this.size(4)};
	`;

	public content: CSSObject = css`
		height: 40vh;
		overflow: auto;
		padding: ${this.size(2)};
	`;
}

export default new Style();
