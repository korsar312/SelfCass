import Styles from "../../../../../Styles/Styles.ts";
import type { CSSObject } from "@emotion/react";
import type { TGridBPCont, TGridBPItem, TGridBPList } from "../index.tsx";

const BP: Record<TGridBPItem, number> = { xs: 0, sm: 600, md: 900, xl: 1200, lg: 1536 };

class Style extends Styles {
	public containerGrid(): CSSObject {
		return {
			display: "grid",
			gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
			boxSizing: "border-box",
		};
	}

	public itemGrid(bps: TGridBPList): CSSObject {
		const { xs, ...rest } = bps;

		const css: CSSObject = { ...this.spanCss(xs ?? "auto") };

		Object.entries(rest).forEach(([key, val]) => (css[`@media (min-width:${BP[key as TGridBPItem]}px)`] = this.spanCss(val)));

		css[`@media (min-width:${BP.sm}px)`] = this.spanCss(bps.sm);
		css[`@media (min-width:${BP.md}px)`] = this.spanCss(bps.md);

		return css;
	}

	private spanCss(val: TGridBPCont): CSSObject {
		if (val === false) return { display: "none" };
		if (val === "auto") return { gridColumn: "auto" };

		return { gridColumn: `span ${val} / span ${val}` };
	}
}

export default new Style();
