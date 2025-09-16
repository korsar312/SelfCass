import Styles from "../../../../../Styles/Styles.ts";
import type { CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

class Style extends Styles {
	public wrapper(isFullWidth?: boolean): CSSObject {
		return {
			...this.mixins.flexCenter,
			position: "relative",
			justifyContent: "space-between",
			transition: this.variables.fastTransition,
			width: isFullWidth ? "100%" : "auto",
			gap: 4,
			cursor: "pointer",

			"&:hover": {
				opacity: 0.8,
			},

			"&[disabled]": {
				opacity: 0.3,
			},
		};
	}

	public icon: CSSObject = {
		...this.mixins.flexCenter,
		gap: 4,
	};

	public color(color: StyleInterface.TColorChoice): CSSObject {
		return {
			background: this.getColor(color),
		};
	}
}

export default new Style();
