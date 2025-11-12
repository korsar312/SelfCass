export namespace CatalogueInterface {
	export interface IAdapter {
		initCategory: () => Promise<void>;
		initGoods: () => Promise<void>;
	}

	export type TCategory = {
		id: number;
		name: string;
	};

	export type TWords = {};

	export type TItem = {
		id: string;
		name: string;
		image: string;
		price: number;
		categoryInclude: number;
		tags: string[];
		kKal?: number;
		weight?: number;
		craftTime?: number;
		description?: string;
	};

	export interface Store {
		category: TCategory[];
		goods: TItem[];
	}
}
