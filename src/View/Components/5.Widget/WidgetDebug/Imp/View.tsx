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
import AtomButtonCount from "../../../1.Atoms/AtomButton/Variables/AtomButtonCount";
import AtomToggleRadio from "../../../1.Atoms/AtomToggle/Variables/AtomToggleRadio";
import AtomToggleCheck from "../../../1.Atoms/AtomToggle/Variables/AtomToggleCheck";

const View: NFC<typeof Model> = (props) => {
	const { isShow, onClose, btnSwitch, comp, isFill } = props;

	function content() {
		switch (comp) {
			case "btn":
				return buttons();
			case "tgl":
				return toggles();
		}
	}

	function row(name: MessageInterface.EWordAll, component: ReactNode) {
		return (
			<>
				<Text text={name} />
				{component}
			</>
		);
	}

	function buttons() {
		return (
			<>
				{row("AtomButtonIcon", <AtomButtonIcon icon={"Add"} />)}

				{row("AtomButtonLabel", <AtomButtonLabel isFill text={"PASSWORD"} />)}
				{row("AtomButtonLabel", <AtomButtonLabel text={"PASSWORD"} />)}

				{row("AtomButtonMajor", <AtomButtonMajor text={"PASSWORD"} />)}

				{row("AtomButtonPill", <AtomButtonPill isFill text={"PASSWORD"} />)}
				{row("AtomButtonPill", <AtomButtonPill text={"PASSWORD"} />)}

				{row("AtomButtonSecond", <AtomButtonSecond text={"PASSWORD"} />)}

				{row("AtomButtonCount", <AtomButtonCount icon={"Add"} />)}
			</>
		);
	}

	function toggles() {
		return (
			<>
				{row("AtomToggleRadio", <AtomToggleRadio />)}
				{row("AtomToggleRadio", <AtomToggleRadio checked />)}
				{row("AtomToggleRadio", <AtomToggleRadio disabled />)}
				{row("AtomToggleRadio", <AtomToggleRadio disabled checked />)}

				{row("AtomToggleCheck", <AtomToggleCheck />)}
				{row("AtomToggleCheck", <AtomToggleCheck checked />)}
				{row("AtomToggleCheck", <AtomToggleCheck disabled />)}
				{row("AtomToggleCheck", <AtomToggleCheck disabled checked />)}
			</>
		);
	}

	return (
		<AtomModal css={Style.wrapper} isShow={isShow}>
			<AtomPaperMajor color={"WHITE"}>
				<div css={Style.titleBtn}>
					{btnSwitch.map(({ title, comp, click }) => (
						<AtomButtonPill isFullWidth key={title} isFill={isFill(comp)} text={title} click={click} />
					))}
				</div>

				<div css={Style.content}>{content()}</div>

				<AtomButtonSecond text={"CLOSE"} click={onClose} />
			</AtomPaperMajor>
		</AtomModal>
	);
};

export default View;
