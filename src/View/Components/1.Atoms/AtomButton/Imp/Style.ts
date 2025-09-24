import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

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

	public color(color: StyleInterface.TColorChoice): CSSObject {
		return css`
			background: ${this.getColor(color)};
		`;
	}
}

export default new Style();
