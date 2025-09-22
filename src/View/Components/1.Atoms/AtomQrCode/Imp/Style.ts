import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

class Style extends Styles {
	public wrapper(color?: StyleInterface.TColorChoice): CSSObject {
		return css`
			position: relative;
			background: ${this.getColor(color)};
			padding: ${this.size(4)};
			border-radius: ${this.size(4)};
			width: 100%;
			height: 100%;
			background: red;
		`;
	}

	public qr: CSSObject = css`
		${this.mixins.absolute};
		${this.mixins.flexCenter};
	`;
}

export default new Style();
