import Styles from "../../../../Styles/Styles.ts";
import type { CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	};
}

export default new Style();
