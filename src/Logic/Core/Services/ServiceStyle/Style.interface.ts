import type { CSSObject } from "@emotion/react";

export namespace StyleInterface {
	export interface IAdapter {
		getColor(color?: TColorChoice, opacity?: number): string;
		getFont(font: EFont): CSSObject;
		getSize(size: number): string;
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
	fullSize: "fullSize",
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

const Primary = {
	PRIME_1: "PRIME_1",
	PRIME_2: "PRIME_2",
	PRIME_3: "PRIME_3",
	PRIME_4: "PRIME_4",
	PRIME_5: "PRIME_5",
	PRIME_6: "PRIME_6",
	PRIME_7: "PRIME_7",
} as const;

const Typography = {
	TYPO_1: "TYPO_1",
	TYPO_2: "TYPO_2",
	TYPO_3: "TYPO_3",
	TYPO_4: "TYPO_4",
	TYPO_5: "TYPO_5",
} as const;

const Grey = {
	GREY_1: "GREY_1",
	GREY_2: "GREY_2",
	GREY_3: "GREY_3",
	GREY_4: "GREY_4",
	GREY_5: "GREY_5",
	GREY_6: "GREY_6",
	GREY_7: "GREY_7",
} as const;

const Other = {
	RED: "RED",
	PORCELAIN: "PORCELAIN",
	YELLOW: "YELLOW",
	BLUE: "BLUE",
	GREEN: "GREEN",
	ORANGE: "ORANGE",
} as const;

const Base = {
	WHITE: "WHITE",
	BLACK: "BLACK",
} as const;

const Color = {
	...Primary,
	...Typography,
	...Grey,
	...Other,
	...Base,
} as const;

const Theme = {
	LIGHT: "LIGHT",
	DARK: "DARK",
} as const;
