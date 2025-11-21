import type { IComponent } from "../index";
import { Act } from "../../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	const catalogue = Act.Catalogue.getCategoryIdList();
	const products = Act.Catalogue.getGoodsIdList();

	return { catalogue, products };
}

export default Model;
