import Styles from "../../../../../Styles/Styles.ts";
import type { CSSObject } from "@emotion/react";
import type { TAtomInputText } from "../index.tsx";

class Style extends Styles {
	public wrapper: CSSObject = {
		width: "100%",
		background: this.getColor(),
		outline: "none",
		border: "none",
		padding: "0",
	};

	public text(textProp: TAtomInputText): CSSObject {
		return {
			...this.getFont(textProp.font || "BodyMain"),
			color: this.getColor(textProp.color),
		};
	}
}

export default new Style();
