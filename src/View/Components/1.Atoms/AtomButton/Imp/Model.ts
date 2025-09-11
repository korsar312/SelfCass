import type { IComponent, TAtomButtonGeneralGroup } from "../index";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { IComponent as IImage } from "../../../0.Cores/Image";
import type { IComponent as IText } from "../../../0.Cores//Text";

function Model(props: IComponent) {
	const { textVars, color, extStyles, icons, isFullWidth, click, type = "button", isDisable } = props;

	const leftIcon = spread(icons?.["left"], changeImage);
	const rightIcon = spread(icons?.["right"], changeImage);

	const textChanged = spread(textVars, changeText);

	function spread<T>(val?: TAtomButtonGeneralGroup<T>, changeFn?: (v: T) => T): TAtomButtonGeneralGroup<T> | undefined {
		return val && { ...val, value: val.value.map((el) => changeFn?.(el) || el) };
	}

	function changeImage(icon: IImage): IImage {
		return { ...icon, color: icon.color || getColorText() };
	}

	function changeText(text: IText): IText {
		return { ...text, color: text.color || getColorText() };
	}

	function getColorText(): StyleInterface.EColor {
		switch (color) {
			case "PRIME":
			case "MEDIUM":
			case "SECOND":
			case "SUCCESS":
			case "ERROR":
				return "PRIME";
			default:
				return "SECOND";
		}
	}

	function handleClick() {
		click?.();
	}

	return { textChanged, color, extStyles, leftIcon, rightIcon, isFullWidth, handleClick, type, isDisable };
}

export default Model;
