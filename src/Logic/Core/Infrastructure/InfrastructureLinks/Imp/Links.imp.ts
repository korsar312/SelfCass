import type { LinksInterface as Interface } from "../Links.interface";
import type { SettingInterface } from "../../../Services/ServiceSetting/Setting.interface.ts";

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
	public GET_PAYMENT_STATUS(id: string) {
		return this.request<boolean>({ link: "GET_PAYMENT_STATUS", method: "GET", param: { id: id } }, true);
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
		const res: SettingInterface.TBusinessInfo = { logoPath: "/logo.png", name: "Попарим" };
		return this.request<SettingInterface.TBusinessInfo>({ link: "GET_BUSINESS_INFO", method: "GET" }, res);
	}
	public SEND_ORDER() {
		return this.request<string>({ link: "SEND_ORDER", method: "GET" }, "ссылка");
	}
}

export default LinksImp;
