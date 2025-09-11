import Styles from "../../../../../Styles/Styles.ts";
import type { CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { TTextPos } from "../index.tsx";

class Style extends Styles {
	public wrapper: CSSObject = {
		textAlign: "center",
		transition: this.variables.fastTransition,
		whiteSpace: "pre-line",
	};

	public param(pos?: TTextPos, font?: StyleInterface.EFont, color?: StyleInterface.TColorChoice, opacity?: number) {
		return {
			...this.getFont(font || "Subtitle"),
			color: this.getColor(color, opacity),
			textAlign: pos,
		};
	}
}

export default new Style();
