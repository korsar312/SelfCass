import { css, type CSSObject } from "@emotion/react";

class MixinsVars {
	public flexCenter: CSSObject = css`
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	public flexGorCenter: CSSObject = css`
		display: flex;
		justify-content: center;
	`;

	public flexVerCenter: CSSObject = css`
		display: flex;
		align-items: center;
	`;

	public flexCol: CSSObject = css`
		display: flex;
		flex-direction: column;
	`;

	public flexCenterCol: CSSObject = css`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	`;

	public absolute: CSSObject = css`
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	`;

	public fixed: CSSObject = css`
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	`;

	public lineBreak(line: number): CSSObject {
		return css`
			display: -webkit-box;
			webkit-line-clamp: ${line};
			webkit-box-orient: "vertical";
			overflow: hidden;
		`;
	}
}

const Mixins = new MixinsVars();
export default Mixins;
