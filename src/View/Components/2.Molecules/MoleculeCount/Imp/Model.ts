import type { IComponent } from "../index";
import type { IComponent as IText } from "../../../0.Cores/Text";
import type { IComponent as IBtnImg } from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import type { IComponent as IBtn } from "../../../1.Atoms/AtomButton/Variables/AtomButtonSecond";

function Model(props: IComponent) {
	const { textVars, leftBtn, rightBtn, fullBtn, isFullBtn, extStyles } = props;

	const textObj = changeText(textVars);
	const leftBtnObj = changeBtnImg(leftBtn);
	const rightBtnObj = changeBtnImg(rightBtn);
	const fullBtnObj = changeBtn(fullBtn);

	function changeText(text: IText): IText {
		return { ...text, font: text.font || "LabelLarge", color: text.color || "TYPO_4" };
	}

	function changeBtnImg(btn: IBtnImg): IBtnImg {
		return { ...btn };
	}

	function changeBtn(btn: IBtn): IBtn {
		return { ...btn };
	}

	return { textObj, leftBtnObj, rightBtnObj, fullBtnObj, isFullBtn, extStyles };
}

export default Model;
