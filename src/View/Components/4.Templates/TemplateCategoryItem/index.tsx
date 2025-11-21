import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonLabel";
import { Act } from "../../../../Logic/Core";

export interface IComponent {
	itemId: string;
	isFill?: boolean;
}

const Index: FC<IComponent> = (props) => {
	const { itemId, isFill } = props;

	const text = Act.Message.getGoodsWord(itemId, "name");

	const propsComponent: IProp = {
		text,
		isFill,
	};

	return <Substance {...propsComponent} />;
};

export default Index;
