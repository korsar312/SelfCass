import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import { Act } from "../../../../Logic/Core";
import { RouterProvider } from "react-router/dom";
import AtomButtonLable from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonLable";
import AtomButtonIcon from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomButtonMajor from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMajor";
import AtomButtonSecond from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonSecond";
import AtomButtonPill from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonPill";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	const router = Act.Router.getRouteObj();

	return (
		<div css={Style.wrapper}>
			<AtomButtonLable text={"PASSWORD"} />
			<AtomButtonLable isFill text={"PASSWORD"} />
			<AtomButtonMajor color={"WHITE"} text={"PASSWORD"} />
			<AtomButtonSecond color={"WHITE"} text={"PASSWORD"} />
			<AtomButtonIcon icon={"Bug"} />
			<AtomButtonPill text={"PASSWORD"} />
			<AtomButtonPill isFill text={"PASSWORD"} />

			<RouterProvider router={router} />
		</div>
	);
};

export default View;
