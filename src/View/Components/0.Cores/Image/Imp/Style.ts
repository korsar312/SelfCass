import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { TImagesSize } from "../index.tsx";

class Style extends Styles {
	public wrapper: CSSObject = css`
		transition: ${this.variables.fastTransition};
	`;

	public scale(size: TImagesSize = 20): CSSObject {
		return css`
            width: ${size}
            height: ${size}
		`;
	}

	public color(colors: StyleInterface.TColorChoice): CSSObject {
		return css`
			path {
				fill: ${this.getColor(colors)};
				transition: ${this.variables.fastTransition};
			}
		`;
	}
}

export default new Style();
