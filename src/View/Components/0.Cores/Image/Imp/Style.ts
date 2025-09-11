import Styles from "../../../../../Styles/Styles.ts";
import type { CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { TImagesSize } from "../index.tsx";

class Style extends Styles {
	public wrapper: CSSObject = {
		transition: this.variables.fastTransition,
	};

	public size(size: TImagesSize = 20): CSSObject {
		return {
			width: size,
			height: size,
		};
	}

	public color(colors: StyleInterface.TColorChoice): CSSObject {
		return { path: { fill: this.getColor(colors), transition: this.variables.fastTransition } };
	}
}

export default new Style();
