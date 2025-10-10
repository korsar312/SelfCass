import type { IComponent, TAtomInputText } from "../index";
import { type ChangeEvent, useState } from "react";
import { Act } from "../../../../../Logic/Core";
import type { MessageInterface } from "../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";

function Model(props: IComponent) {
	const { initText, onClick, onChange, name, type, icons } = props;

	const [value, setValue] = useState<MessageInterface.EWordAll>(getText);

	const textObj = changeText(initText);
	const isTextExist = Boolean(textObj.text?.length);
	const text = Act.Message.getWord(textObj.text);

	function changeText(text: TAtomInputText | MessageInterface.EWordAll): TAtomInputText {
		const props: TAtomInputText = typeof text === "object" ? text : { text, font: "BodyMain" };

		return { ...props, text: value, color: props.color || "BLACK" };
	}

	function getText(): MessageInterface.EWordAll {
		return typeof initText === "object" ? initText.text : initText;
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.currentTarget.value;
		onChange?.(newValue);
		setValue(newValue);
	}

	return { textObj, onClick, handleChange, text, name, type, icons, isTextExist };
}

export default Model;
