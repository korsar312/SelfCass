import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexVerCenter}
	`;

	public space: CSSObject = css`
		flex: 1;
	`;
}

export default new Style();
