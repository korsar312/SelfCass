export namespace LinksInterface {
	export interface IAdapter extends AdapterShape {}

	export type EMethod = keyof typeof Method;
	export type EName = keyof typeof Names;
	export type TLinksList = Record<EName, string>;
	type AdapterShape = { [K in EName]: (...arg: any) => Promise<any> };

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
