import Styles from "../../../../../../Styles/Styles.ts";
import type { CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = {
		display: "flex",
		flexDirection: "column",
		padding: this.size(4),
		gap: this.size(3),
	};

	public content: CSSObject = {
		display: "flex",
		flexDirection: "column",
	};
}

export default new Style();
