export namespace MessageInterface {
	export interface IAdapter {
		getWord(text: EWord, lang: ELang, arrReplace?: Array<string | number>): string;
	}

	export interface Store {

	}

	export type EWord = keyof typeof Word;
	export type ELang = keyof typeof Lang;

	export type TDictionary = Record<EWord, TMapWord>;
	type TMapWord = Record<ELang, string>;
}


const Word = {
	DAY_US_USDT: "DAY_US_USDT"
} as const;

const Lang = {
	RU: "RU"
} as const;

