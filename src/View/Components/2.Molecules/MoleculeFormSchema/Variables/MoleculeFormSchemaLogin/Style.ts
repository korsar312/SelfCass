import Styles from "../../../../../../Styles/Styles.ts";
import type { CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = {
		display: "flex",
		flexDirection: "column",
	};
}

export default new Style();
