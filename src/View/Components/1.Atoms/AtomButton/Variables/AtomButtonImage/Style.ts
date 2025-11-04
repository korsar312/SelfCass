import Styles from "../../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		border-radius: 12px;
		position: relative;

		&::after {
			content: "";
			${this.mixins.flexCenter};
			position: absolute;
			top: 30%;
			bottom: 30%;
			left: 30%;
			right: 30%;
			border-radius: 1000px;
			background: ${this.getColor("BLACK", 0.9)};
			filter: blur(14px);
		}
	`;

	public text: CSSObject = css`
		z-index: 1;
	`;

	public image: CSSObject = css`
		${this.mixins.absolute};
		opacity: 0.7;
	`;
}

export default new Style();
