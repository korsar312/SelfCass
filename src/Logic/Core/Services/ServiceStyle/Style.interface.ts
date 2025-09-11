import type { CSSObject } from "@emotion/react";

export namespace StyleInterface {
	export interface IAdapter {
		getColor(theme: ETheme, color?: TColorChoice, opacity?: number): string;
		getFont(font: EFont): CSSObject;
		getTheme(): ETheme;
	}

	export interface Store {
		color: TColor;
		font: Partial<TFont>;
		fontProp: {
			fontList: TFontList;
			weightList: TWeightList;
		};
		theme: ETheme;
	}

	export type EFont = keyof typeof FontToken;

	export type EWeight = keyof typeof WeightToken;
	export type TWeightList = Record<StyleInterface.EWeight, number>;

	export type TFont = Record<EFont, CSSObject>;
	export type TFontToken = `${EWeight}_${number}`;
	export type TFontList = Record<StyleInterface.EFont, StyleInterface.TFontToken>;

	export type EColor = keyof typeof Color;
	export type ETheme = keyof typeof Theme;

	export type TColor = Record<ETheme, Record<EColor, TColorHEXFormat>>;

	export type TColorRGBFormat = `rgba(${string},${number})`;
	export type TColorHEXFormat = `#${string}`;

	export type TColorChoice = EColor | undefined;
}

const FontToken = {
	H3: "H3",
	H2: "H2",
	Subtitle: "Subtitle",
} as const;

const WeightToken = {
	B: "B",
	S: "S",
	M: "M",
	R: "R",
} as const;

const Color = {
	PRIME: "PRIME",
	MEDIUM: "MEDIUM",
	SECOND: "SECOND",
	SUCCESS: "SUCCESS",
	ERROR: "ERROR",
	WARNING: "WARNING",
} as const;

const Theme = {
	LIGHT: "LIGHT",
} as const;
