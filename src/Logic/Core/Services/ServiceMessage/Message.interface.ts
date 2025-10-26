import type { RouterInterface } from "../ServiceRouter/Router.interface.ts";

export namespace MessageInterface {
	export interface IAdapter {
		getWord(text: EWordAll, param?: TWordParam): string;
	}

	export interface Store {
		dictionary: TDictionary;
		lang: ELang;
	}

	export type EWord = keyof typeof Word;
	export type ELang = keyof typeof Lang;
	export type ECase = keyof typeof Case;

	type TMapWord = Record<ELang, string>;

	type EOtherIntWord = RouterInterface.EPath;
	type EAllWord = EWord | EOtherIntWord;

	export type TDictionary = Record<EAllWord, TMapWord>;
	export type EWordAll = EWord | string | number | undefined;

	export type TWordParam = {
		arrReplace?: EWordAll[];
		case?: ECase;
	};
}

const Word = {
	DAY_US_USDT: "DAY_US_USDT",
	LOGIN_TO_ADMIN_MENU: "LOGIN_TO_ADMIN_MENU",
	LOGIN_TO_CASH_DESK: "LOGIN_TO_CASH_DESK",
	MENU: "MENU",
	PAYMENT: "PAYMENT",
	CART: "CART",
	GAMES: "GAMES",
	CALL_WAITER: "CALL_WAITER",
	LOGIN: "LOGIN",
	PASSWORD: "PASSWORD",
	CASS: "CASS",
	ENTER: "ENTER",
	ADMINISTRATION: "ADMINISTRATION",
	TABLE_NUMBER: "TABLE_NUMBER",
	TOKEN: "TOKEN",
	QR_TO_SMALL: "QR_TO_SMALL",
	CLOSE: "CLOSE",
} as const;

const Lang = {
	RU: "RU",
} as const;

const Case = {
	CAPITAL: "CAPITAL",
	SMALL: "SMALL",
} as const;
