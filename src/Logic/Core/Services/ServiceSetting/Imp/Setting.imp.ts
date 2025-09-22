import type { SettingInterface as Interface } from "../Setting.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class SettingImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private setLogInfo(store: Interface.Store, loginInfo: Interface.TLoginInfo): Interface.Store {
		return { ...store, loginInfo };
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {};

		super(props, store);
	}

	//==============================================================================================

	async LoginAdmin(login: string, password: string): Promise<Interface.TLoginInfo | false> {
		try {
			const res = await this.API.Links.LOGIN(login, password);
			this.setLogInfo(this.store, res);

			return res;
		} catch {
			return false;
		}
	}

	async LoginQr(token: string): Promise<Interface.TLoginInfo | false> {
		try {
			const res = await this.API.Links.QR_ENTER(token);
			this.setLogInfo(this.store, res);

			return res;
		} catch {
			return false;
		}
	}
}

export default SettingImp;
