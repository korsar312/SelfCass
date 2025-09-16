import Styles from "../../../../Styles/Styles.ts";
import type { CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = {
		position: "fixed",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	};

	public img: CSSObject = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "left center",
	};
}

export default new Style();
