import Styles from "../../../../Styles/Styles.ts";
import type { CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		height: "100%",
		gap: this.size(2),
	};
}

export default new Style();
