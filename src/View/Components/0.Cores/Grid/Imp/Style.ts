import Styles from "../../../../../Styles/Styles.ts";
import type { CSSObject } from "@emotion/react";
import type { TGridBPCont, TGridBPList } from "../index.tsx";

const BP = { xs: 0, sm: 600, md: 900 };

class Style extends Styles {
	public containerGrid(): CSSObject {
		return {
			display: "grid",
			gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
			boxSizing: "border-box",
		};
	}

	public itemGrid(bps: TGridBPList): CSSObject {
		const css: CSSObject = { ...this.spanCss(bps.xs ?? "auto") };

		if (bps.sm !== undefined) css[`@media (min-width:${BP.sm}px)`] = this.spanCss(bps.sm);
		if (bps.md !== undefined) css[`@media (min-width:${BP.md}px)`] = this.spanCss(bps.md);

		return css;
	}

	private spanCss(val: TGridBPCont): CSSObject {
		if (val === false) return { display: "none" };
		if (val === "auto") return { gridColumn: "auto" };

		return { gridColumn: `span ${val} / span ${val}` };
	}
}

export default new Style();
