import type { CSSObject } from "@emotion/react";

export namespace StyleInterface {
	export interface IAdapter {
		getColor(color?: TColorChoice, opacity?: number): string;
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

	export type EFont = keyof typeof Font;

	export type EWeight = keyof typeof Weight;
	export type TWeightList = Record<EWeight, number>;

	type TFont = Record<EFont, CSSObject>;
	type TFontToken = `${EWeight}_${number}`;
	export type TFontList = Record<EFont, TFontToken>;

	export type EColor = keyof typeof Color;
	export type ETheme = keyof typeof Theme;

	export type TColor = Record<ETheme, Record<EColor, TColorHEXFormat>>;

	export type TColorRGBFormat = `rgba(${string},${number})`;
	export type TColorHEXFormat = `#${string}`;

	export type TColorChoice = EColor | undefined;
}

const Font = {
	PageTitle: "PageTitle",
	SectionTitle: "SectionTitle",
	BlockTitle: "BlockTitle",
	SectionDesc: "SectionDesc",
	BlockLead: "BlockLead",
	BlockHeading: "BlockHeading",
	ElementHeading: "ElementHeading",
	BodyMain: "BodyMain",
	BodySecondary: "BodySecondary",
	BodySmall: "BodySmall",
	BodyDense: "BodyDense",
	LabelLarge: "LabelLarge",
	LabelMain: "LabelMain",
	LabelMedium: "LabelMedium",
	LabelSmall: "LabelSmall",
	Hint: "Hint",
} as const;

const Weight = {
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
