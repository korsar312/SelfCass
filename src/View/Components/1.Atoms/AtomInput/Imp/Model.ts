import type { IComponent, TAtomInputText } from "../index";
import { type ChangeEvent, useState } from "react";
import { Act } from "../../../../../Logic/Core";

function Model(props: IComponent) {
	const { initText, onClick, onChange, extStyle, name, type } = props;

	const [value, setValue] = useState(initText.text);

	const textObj = changeText(initText);
	const text = Act.Message.getWord(initText.text);

	function changeText(text: TAtomInputText): TAtomInputText {
		return { ...text, text: value, color: text.color || "BLACK" };
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.currentTarget.value;
		onChange?.(newValue);
		setValue(newValue);
	}

	return { textObj, onClick, handleChange, text, extStyle, name, type };
}

export default Model;
