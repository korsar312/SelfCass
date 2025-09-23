import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

class Style extends Styles {
	public wrapper(color?: StyleInterface.TColorChoice): CSSObject {
		return css`
			${this.mixins.flexCenter};
			position: relative;
			background: ${this.getColor(color)};
			border-radius: ${this.size(3)};
			height: 100%;
		`;
	}

	public qr: CSSObject = css`
		${this.mixins.flexCenter};
	`;
}

export default new Style();
