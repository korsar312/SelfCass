import type { SettingInterface } from "../../Services/ServiceSetting/Setting.interface.ts";

export namespace LinksInterface {
	export interface IAdapter {
		GET_PAYMENT_QR(): Promise<string>;
		GET_PAYMENT_STATUS(id: string): Promise<boolean>;
		CANCEL_PAYMENT(): Promise<string>;
		SPLIT_BILL(): Promise<string>;
		GET_MENU(): Promise<string>;
		CALL_WAITER(): Promise<void>;
		LOGIN(login: string, password: string): Promise<SettingInterface.TLoginInfo>;
		QR_ENTER(token: string): Promise<SettingInterface.TLoginInfo>;
		LOGOFF(): Promise<string>;
		GET_BUSINESS_INFO(): Promise<SettingInterface.TBusinessInfo>;
		SEND_ORDER(): Promise<string>;
	}

	export type EMethod = keyof typeof Method;
	export type EName = keyof typeof Names;
	export type TLinksList = Record<EName, string>;

	export type ERequestParam = {
		link: EName;
		method: EMethod;
		param?: Record<string, any>;
	};
}

const Method = {
	GET: "GET",
	PUT: "PUT",
	POST: "POST",
	DELETE: "DELETE",
} as const;

const Payment = {
	GET_PAYMENT_QR: "GET_PAYMENT_QR",
	GET_PAYMENT_STATUS: "GET_PAYMENT_STATUS",
	CANCEL_PAYMENT: "CANCEL_PAYMENT",
	SPLIT_BILL: "SPLIT_BILL",
} as const;

const Service = {
	GET_MENU: "GET_MENU",
	CALL_WAITER: "CALL_WAITER",
} as const;

const Setting = {
	QR_ENTER: "QR_ENTER",
	LOGIN: "LOGIN",
	LOGOFF: "LOGOFF",
	GET_BUSINESS_INFO: "GET_BUSINESS_INFO",
} as const;

const Order = {
	SEND_ORDER: "SEND_ORDER",
} as const;

const Names = {
	...Payment,
	...Service,
	...Setting,
	...Order,
} as const;
