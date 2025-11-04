import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		display: grid;
		align-items: center;
		grid-template-columns: 150px 100fr 150px;
		padding: ${this.size(3)};
		border-radius: 12px;
		box-shadow: 0 0 17px -8px ${this.getColor("BLACK")};
	`;

	public text: CSSObject = css`
		${this.mixins.flexGorCenter}
	`;
}

export default new Style();
