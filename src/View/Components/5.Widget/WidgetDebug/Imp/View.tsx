import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomModal from "../../../1.Atoms/AtomModal";
import Text from "../../../0.Cores/Text";
import type { MessageInterface } from "../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { ReactNode } from "react";
import AtomButtonIcon from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomButtonMajor from "../../../1.Atoms/AtomButton/Variables/AtomButtonMajor";
import AtomButtonSecond from "../../../1.Atoms/AtomButton/Variables/AtomButtonSecond";
import AtomButtonLabel from "../../../1.Atoms/AtomButton/Variables/AtomButtonLabel";
import AtomButtonPill from "../../../1.Atoms/AtomButton/Variables/AtomButtonPill";
import AtomPaperMajor from "../../../1.Atoms/AtomPaper/Variables/AtomPaperMajor";

const View: NFC<typeof Model> = (props) => {
	const { isShow, onClose } = props;

	function row(name: MessageInterface.EWordAll, component: ReactNode) {
		return (
			<>
				<Text text={name} />
				{component}
			</>
		);
	}

	return (
		<AtomModal css={Style.wrapper} isShow={isShow}>
			<AtomPaperMajor color={"BLUE"}>
				{row("AtomButtonIcon", <AtomButtonIcon icon={"Add"} />)}

				{row("AtomButtonLabel", <AtomButtonLabel isFill text={"PASSWORD"} />)}
				{row("AtomButtonLabel", <AtomButtonLabel text={"PASSWORD"} />)}

				{row("AtomButtonMajor", <AtomButtonMajor text={"PASSWORD"} />)}

				{row("AtomButtonPill", <AtomButtonPill isFill text={"PASSWORD"} />)}
				{row("AtomButtonPill", <AtomButtonPill text={"PASSWORD"} />)}

				{row("AtomButtonSecond", <AtomButtonSecond text={"PASSWORD"} />)}

				<AtomButtonSecond text={"CLOSE"} click={onClose} />
			</AtomPaperMajor>
		</AtomModal>
	);
};

export default View;
