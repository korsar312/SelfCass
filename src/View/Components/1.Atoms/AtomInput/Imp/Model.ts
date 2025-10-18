import type { IComponent, TAtomInputGeneralGroup, TAtomInputIcon, TAtomInputText } from "../index";
import { type ChangeEvent, useState } from "react";
import { Act } from "../../../../../Logic/Core";
import type { MessageInterface } from "../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { IComponent as IImage } from "../../../0.Cores/Image";

function Model(props: IComponent) {
	const { initText, onClick, onChange, name, type, iconsLeft, iconsRight, disabled, placeholder, valid } = props;

	const [isValid, setIsValid] = useState<boolean>();

	const textObj = changeTitle(initText);
	const placeObj = changePlace(placeholder);

	const isTextExist = Boolean(textObj?.text?.toString().length);
	const text = Act.Message.getWord(textObj?.text);

	const imageLeft = changeImage(iconsLeft);
	const imageRight = changeImage(iconsRight);

	function changeTitle(text: TAtomInputText | MessageInterface.EWordAll): TAtomInputText {
		const props: TAtomInputText = typeof text === "object" ? text : { text, font: "LabelMedium" };
		return { ...props, color: props.color || isValid === false ? "RED" : "TYPO_5" };
	}

	function changePlace(text: TAtomInputText | MessageInterface.EWordAll): TAtomInputText {
		const props: TAtomInputText = typeof text === "object" ? text : { text, font: "BodyMain" };
		return { ...props, color: props.color || isValid === false ? "RED" : "TYPO_2" };
	}

	function changeImage(img: TAtomInputIcon): TAtomInputGeneralGroup | undefined {
		if (typeof img === "undefined") return undefined;

		const props: TAtomInputGeneralGroup = typeof img === "object" ? img : { value: [{ img }] };
		const imgArr: IImage[] = props.value.map((el) => ({
			...el,
			color: el.color || isValid === false ? "RED" : isValid ? "GREY_7" : "TYPO_2",
		}));

		return { ...props, value: [...imgArr] };
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.currentTarget.value;
		onChange?.(newValue);
	}

	function onValid(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;

		const isValidDef = Boolean(value?.length);
		const isValidUsr = valid?.some((el) => el(value));

		setIsValid(valid?.length ? isValidUsr : isValidDef);
	}

	return { textObj, onClick, handleChange, text, name, type, imageLeft, imageRight, isTextExist, disabled, placeObj, isValid, onValid };
}

export default Model;
