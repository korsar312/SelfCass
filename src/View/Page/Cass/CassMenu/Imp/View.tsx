import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomInput from "../../../../Components/1.Atoms/AtomInput";
import TemplateCardItem from "../../../../Components/4.Templates/TemplateCardItem";
import AtomButtonLabel from "../../../../Components/1.Atoms/AtomButton/Variables/AtomButtonLabel";

const View: NFC<typeof Model> = (props) => {
	const { products } = props;

	return (
		<div css={Style.wrapper}>
			<AtomInput iconsLeft={"Search"} placeholder={"SEARCHING"} initText={{ text: "" }} />

			<div css={Style.category}>
				{[1, 2, 3, 4, 5].map((id) => (
					<AtomButtonLabel key={id} text={"CART"} />
				))}
			</div>

			<div css={Style.cards}>
				{products.map((id) => (
					<TemplateCardItem key={id} itemId={id} />
				))}
			</div>
		</div>
	);
};

export default View;
