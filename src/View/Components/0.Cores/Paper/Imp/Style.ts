import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

class Style extends Styles {
	public wrapper(color?: StyleInterface.TColorChoice): CSSObject {
		return css`
			border-radius: ${this.variables.radiusStandard}px;
			background: ${this.getColor(color || "PRIME")};
			transition: ${this.variables.fastTransition};
	
			& *::-webkit-scrollbar-track" { 
				marginBottom: ${this.variables.radiusStandard},
				marginTop: ${this.variables.radiusStandard},
				marginLeft: ${this.variables.radiusStandard - this.variables.scrollSize},
				marginRight: ${this.variables.radiusStandard - this.variables.scrollSize * 2},		
			}
		`;
	}

	public full: CSSObject = css`
		height: "100%";
	`;
}

export default new Style();
