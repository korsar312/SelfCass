import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { EAtomButtonColor } from "../index.tsx";

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

	public color(color?: EAtomButtonColor): CSSObject {
		const isOpacity = color === "WHITE";

		return css`
			border: 1px solid ${this.getColor(isOpacity ? "GREY_4" : undefined)};
			background: ${this.getColor(isOpacity ? undefined : color)};
		`;
	}
}

export default new Style();
