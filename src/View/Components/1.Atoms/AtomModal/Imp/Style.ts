import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject, keyframes } from "@emotion/react";

class Style extends Styles {
	private timeAnim = this.variables.timeFastTransition;

	private open = keyframes`
		from {opacity: 0}
		to {opacity: 1}
    `;

	private close = keyframes`
		from {opacity: 1}		
		to {opacity: 0}
    `;

	private openAnim = `${this.open} ${this.timeAnim} forwards`;
	private closeAnim = `${this.close} ${this.timeAnim} forwards`;

	public wrapper: CSSObject = css`
        overflow: visible;
        background: none;
        border: none;
        outline: none;
        padding: 0;

        transition: display 1s, overlay 1s;
        transition-behavior: allow-discrete;
        animation: ${this.closeAnim};
		
        &[open] { animation: ${this.openAnim} }
    	&[open]::backdrop { animation: ${this.openAnim} },
    	&::backdrop {
			animation: ${this.closeAnim}
			background: ${this.getColor("PRIME", 0.7)}
		}	
	`;
}

export default new Style();
