import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import Image from "../../../Components/0.Cores/Image";
import BG from "../../../../Assets/Images/Background/BG.jpg";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<div css={Style.wrapper}>
			<Image extStyle={Style.img} img={BG} />
		</div>
	);
};

export default View;
