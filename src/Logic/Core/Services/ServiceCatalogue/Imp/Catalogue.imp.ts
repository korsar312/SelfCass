import type { CatalogueInterface as Interface } from "../Catalogue.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class CatalogueImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			category: [],
			goods: [],
		};

		super(props, store);
	}

	//==============================================================================================

	public async initCategory() {
		await this.API.Links.GET_CATEGORY_LIST();
	}

	public async initGoods() {
		await this.API.Links.GET_ALL_GOODS();
	}
}

export default CatalogueImp;
