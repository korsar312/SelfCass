import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { TAtomButtonColor } from "../index.tsx";

class Style extends Styles {
	public wrapper(isFullWidth?: boolean): CSSObject {
		return css`
			${this.mixins.flexCenter};
			position: relative;
			justify-content: space-between;
			transition: ${this.variables.fastTransition};
			width: ${isFullWidth ? "100%" : "auto"};
			gap: 4px;
			cursor: pointer;

			&:active {
				opacity: 0.8;
			}

			&[disabled] {
				opacity: 0.3;
			}
		`;
	}

	public icon: CSSObject = css`
		${this.mixins.flexCenter};
		gap: 4px;
	`;

	public color(color?: TAtomButtonColor): CSSObject {
		const borderParam = color === "WHITE" ? `1px solid ${this.getColor("GREY_4")}` : "none";

		return css`
			border: ${borderParam};
			background: ${this.getColor(color)};
		`;
	}
}

export default new Style();
