import Styles from "../../../../../Styles/Styles.ts";
import type { CSSObject } from "@emotion/react";

class Style extends Styles {
	private pad = 8;

	public form: CSSObject = {
		position: "relative",
		padding: this.variables.radiusStandard,
	};

	public bottom: CSSObject = {
		marginTop: -this.variables.radiusStandard * 2,
		padding: `${this.variables.radiusStandard * 2 + this.pad}px ${this.pad}px ${this.pad}px ${this.pad}px`,
	};
}

export default new Style();
