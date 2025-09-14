import { type LinksInterface as Interface } from "../Links.interface";

class LinksImp implements Interface.IAdapter {
	private readonly links: Interface.TLinksList;

	private async request<T>(param: Interface.ERequestParam, returnTest: T): Promise<T> {
		param;
		this.links;

		return returnTest;
	}

	//==============================================================================================

	constructor(links: Interface.TLinksList) {
		this.links = links;
	}

	//==============================================================================================

	public GET_PAYMENT_QR() {
		return this.request<string>({ link: "GET_PAYMENT_QR", method: "GET" }, "ссылка");
	}
	public GET_PAYMENT_STATUS() {
		return this.request<string>({ link: "GET_PAYMENT_STATUS", method: "GET" }, "ссылка");
	}
	public CANCEL_PAYMENT() {
		return this.request<string>({ link: "CANCEL_PAYMENT", method: "GET" }, "ссылка");
	}
	public SPLIT_BILL() {
		return this.request<string>({ link: "SPLIT_BILL", method: "GET" }, "ссылка");
	}
	public GET_MENU() {
		return this.request<string>({ link: "GET_MENU", method: "GET" }, "ссылка");
	}
	public CALL_WAITER() {
		return this.request<string>({ link: "CALL_WAITER", method: "GET" }, "ссылка");
	}
	public LOGIN() {
		return this.request<string>({ link: "LOGIN", method: "GET" }, "ссылка");
	}
	public LOGOFF() {
		return this.request<string>({ link: "LOGOFF", method: "GET" }, "ссылка");
	}
	public GET_BUSINESS_INFO() {
		return this.request<string>({ link: "GET_BUSINESS_INFO", method: "GET" }, "ссылка");
	}
	public SEND_ORDER() {
		return this.request<string>({ link: "SEND_ORDER", method: "GET" }, "ссылка");
	}
}

export default LinksImp;
