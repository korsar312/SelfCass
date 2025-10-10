import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { TAtomInputText } from "../index.tsx";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexCenter};
		box-sizing: border-box;
		padding: 2px 16px;
		gap: 16px;
		height: 42px;
		border: 2px solid ${this.getColor("GREY_4")};
		border-radius: 12px;
	`;

	public valid: CSSObject = css`
		border: 2px solid ${this.getColor("PRIME_6")};
	`;

	public inputWrap: CSSObject = css`
		position: relative;
		width: 100%;
	`;

	public inputContent: CSSObject = css`
		position: absolute;
		left: 0;
	`;

	public input: CSSObject = css`
		background: ${this.getColor()};
		outline: none;
		border: none;
		padding: 0;
	`;

	public place(isTop: boolean): CSSObject {
		const topSide = "translate(0, -70%) scale(0.7)";

		return css`
			display: inline-block;
			transform: ${isTop ? topSide : "none"};
			transform-origin: left;

			&:has(+ input:focus) {
				transform: ${topSide};
			}
		`;
	}

	public imageWrap: CSSObject = css`
		display: flex;
	`;

	public text(textProp: TAtomInputText): CSSObject {
		return {
			...this.getFont(textProp.font),
			color: this.getColor(textProp.color),
		};
	}
}

export default new Style();
