export namespace StyleInterface {
	export interface IAdapter {}

	export interface Store {}

	export type EFont = keyof typeof Font;

	export type TFont = Record<EFont, TMapFont>;
	type TMapFont = Record<EFont, string>;
}

const Font = {
	DAY_US_USDT: "DAY_US_USDT",
} as const;
