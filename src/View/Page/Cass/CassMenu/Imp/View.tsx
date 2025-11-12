import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomInput from "../../../../Components/1.Atoms/AtomInput";
import TemplateCardItem from "../../../../Components/4.Templates/TemplateCardItem";
import AtomButtonLabel from "../../../../Components/1.Atoms/AtomButton/Variables/AtomButtonLabel";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<div css={Style.wrapper}>
			<AtomInput iconsLeft={"Search"} placeholder={"SEARCHING"} initText={{ text: "" }} />

			<div css={Style.category}>
				{[1, 3, 3, 3, 3].map(() => (
					<AtomButtonLabel text={"CART"} />
				))}
			</div>

			<div css={Style.cards}>
				{[1, 3, 1, 3, 1, 3, 4].map(() => (
					<TemplateCardItem />
				))}
			</div>
		</div>
	);
};

export default View;
