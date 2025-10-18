import Model, { type TWidgetDebugState } from "./Model.ts";
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
import AtomToggleSwitch from "../../../1.Atoms/AtomToggle/Variables/AtomToggleSwitch";
import AtomInput from "../../../1.Atoms/AtomInput";
import SubstanceItemCard from "../../../3.Substances/SubstanceItemCard";
import { Act } from "../../../../../Logic/Core";
import util from "../../../../../Logic/Libs/Util";

const View: NFC<typeof Model> = (props) => {
	const { isShow, onClose, btnSwitch, comp, isFill } = props;

	const imagePath = Act.Setting.getLogo();
	const price = util.toMoney(42124.67);

	const content: Record<TWidgetDebugState, ReactNode> = {
		btn: (
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
		),
		tgl: (
			<>
				{row("AtomToggleRadio", <AtomToggleRadio />)}
				{row("AtomToggleRadio \n checked", <AtomToggleRadio checked />)}
				{row("AtomToggleRadio \n disabled", <AtomToggleRadio disabled />)}
				{row("AtomToggleRadio \n disabled checked", <AtomToggleRadio disabled checked />)}

				{row("AtomToggleCheck", <AtomToggleCheck />)}
				{row("AtomToggleCheck \n checked", <AtomToggleCheck checked />)}
				{row("AtomToggleCheck \n disabled", <AtomToggleCheck disabled />)}
				{row("AtomToggleCheck \n disabled checked", <AtomToggleCheck disabled checked />)}

				{row("AtomToggleSwitch", <AtomToggleSwitch />)}
				{row("AtomToggleSwitch \n checked", <AtomToggleSwitch checked />)}
				{row("AtomToggleSwitch \n disabled", <AtomToggleSwitch disabled />)}
				{row("AtomToggleSwitch \n disabled checked", <AtomToggleSwitch disabled checked />)}
			</>
		),
		inp: (
			<>
				{row("AtomInput", <AtomInput initText={"CLOSE"} />)}
				{row(
					"AtomInput",
					<AtomInput
						iconsLeft={{ value: [{ img: "Message" }, { img: "Message" }] }}
						placeholder={"Фырк Ырк"}
						initText={"CLOSE"}
					/>,
				)}
				{row("AtomInput", <AtomInput iconsLeft={{ value: [{ img: "Message" }, { img: "Message" }] }} disabled initText={""} />)}
				{row("AtomInput", <AtomInput iconsLeft={"Message"} valid={[() => false]} initText={""} />)}
			</>
		),
		card: <>{row("MoleculeItemCard", <SubstanceItemCard image={imagePath} name={"Cheese Burst Pizza"} price={price} />)}</>,
	};

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
			<AtomPaperMajor color={"WHITE"}>
				<div css={Style.titleBtn}>
					{btnSwitch.map(({ title, comp, click }) => (
						<AtomButtonPill isFullWidth key={title} isFill={isFill(comp)} text={title} click={click} />
					))}
				</div>

				<div css={Style.content}>{content[comp]}</div>

				<AtomButtonSecond text={"CLOSE"} click={onClose} />
			</AtomPaperMajor>
		</AtomModal>
	);
};

export default View;
