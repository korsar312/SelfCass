import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Grid from "../../../../Components/0.Cores/Grid";
import Text from "../../../../Components/0.Cores/Text";
import Image from "../../../../Components/0.Cores/Image";
import AtomButtonMajor from "../../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMajor";

const View: NFC<typeof Model> = (props) => {
	const { title, imagePath, goMenu, goBasket, goPay, goGame, callWaiter } = props;

	const titleRn = (
		<Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
			<Image img={imagePath} />
			<Text text={title} font={"PageTitle"} />
		</Grid>
	);

	const btnTopRn = (
		<Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
			<AtomButtonMajor text={"MENU"} click={goMenu} />
		</Grid>
	);

	const btnMidRn = (
		<>
			<Grid item xs={8} sm={8} md={8} xl={8} lg={8}>
				<AtomButtonMajor text={"PAYMENT"} click={goPay} />
			</Grid>

			<Grid item xs={4} sm={4} md={4} xl={4} lg={4}>
				<AtomButtonMajor text={"CALL_WAITER"} click={callWaiter} />
			</Grid>
		</>
	);

	const btnBotRn = (
		<>
			<Grid item xs={4} sm={4} md={4} xl={4} lg={4}>
				<AtomButtonMajor text={"GAMES"} click={goGame} />
			</Grid>

			<Grid item xs={8} sm={8} md={8} xl={8} lg={8}>
				<AtomButtonMajor text={"CART"} click={goBasket} />
			</Grid>
		</>
	);

	return (
		<div css={Style.wrapper}>
			<Grid container space={3}>
				{titleRn}
				{btnTopRn}
				{btnMidRn}
				{btnBotRn}
			</Grid>
		</div>
	);
};

export default View;
