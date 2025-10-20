import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		position: relative;
		${this.mixins.flexVerCenter};
		justify-content: space-between;
		padding: ${this.size(2)};
		border: 2px solid ${this.getColor("GREY_3")};
		border-radius: 100px;
		overflow: hidden;
	`;

	public addCont(isBotContent?: boolean): CSSObject {
		return css`
			${this.mixins.absolute};
			transition: ${this.variables.fastTransition};
			transform: translateY(${isBotContent ? "0" : "100%"});
		`;
	}
}

export default new Style();
