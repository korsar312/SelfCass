export namespace SettingInterface {
	export interface IAdapter {}

	export interface Store {
		businessInfo?: TBusinessInfo;
	}

	export type TBusinessInfo = {
		logoPath: string;
		name: string;
	};
}
