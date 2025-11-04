import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexCol};
		gap: ${this.size(4)};
	`;

	public top: CSSObject = css`
		height: 30vh;
	`;

	public bot: CSSObject = css`
		display: flex;
	`;
}

export default new Style();
