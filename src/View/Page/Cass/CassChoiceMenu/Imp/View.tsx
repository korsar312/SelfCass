import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Grid from "../../../../Components/0.Cores/Grid";
import AtomButtonMajor from "../../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMajor";
import AtomButtonImage from "../../../../Components/1.Atoms/AtomButton/Variables/AtomButtonImage";
import AtomPaperCard from "../../../../Components/1.Atoms/AtomPaper/Variables/AtomPaperCard";
import TemplateCardItem from "../../../../Components/4.Templates/TemplateCardItem";

const View: NFC<typeof Model> = (props) => {
	const { imagePath, goMenu, goBasket, goPay, goGame, callWaiter, products } = props;

	const btnTopRn = (
		<Grid extStyle={Style.top} item xs={12} sm={12} md={12} xl={12} lg={12}>
			<AtomButtonImage icon={imagePath} text={"MENU"} click={goMenu} />
		</Grid>
	);

	const btnMidRn = (
		<>
			<Grid item xs={8} sm={8} md={8} xl={8} lg={8}>
				<AtomButtonMajor text={"PAYMENT"} click={goGame} />
			</Grid>

			<Grid item xs={4} sm={4} md={4} xl={4} lg={4}>
				<AtomButtonMajor text={"CART"} click={goBasket} />
			</Grid>
		</>
	);

	const btnBotRn = (
		<>
			<Grid item xs={4} sm={4} md={4} xl={4} lg={4}>
				<AtomButtonMajor text={"GAMES"} click={goPay} />
			</Grid>

			<Grid item xs={8} sm={8} md={8} xl={8} lg={8}>
				<AtomButtonMajor text={"CALL_WAITER"} click={callWaiter} />
			</Grid>
		</>
	);

	return (
		<div css={Style.wrapper}>
			<AtomPaperCard>
				<Grid container space={3}>
					{btnTopRn}
					{btnMidRn}
					{btnBotRn}
				</Grid>
			</AtomPaperCard>

			<div css={Style.bot}>
				{products.map((id) => (
					<TemplateCardItem key={id} itemId={id} />
				))}
			</div>
		</div>
	);
};

export default View;
