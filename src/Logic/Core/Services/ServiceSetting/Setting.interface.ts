export namespace SettingInterface {
	export interface IAdapter {
		Login(login: string, password: string): Promise<TLoginInfo | false>;
	}

	export interface Store {
		loginInfo?: TLoginInfo;
		businessInfo?: TBusinessInfo;
	}

	export type TLoginInfo = {
		token: string;
		id: string;
	};

	export type TBusinessInfo = {
		logoPath: string;
		name: string;
	};
}
