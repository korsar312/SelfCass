import type { IComponent } from "../index";
import { useState } from "react";
import { useDidUpdate } from "../../../../../Logic/Libs/Hooks/useDidUpdate/useDidUpdate.ts";
import type { EImages } from "../../../0.Cores/Image/Images.tsx";

function Model(props: IComponent) {
	const { defaultValue, onChange } = props;

	const [count, setCount] = useState(defaultValue);

	useDidUpdate(() => {
		onChange(count);
	}, [count]);

	const leftImage: EImages = count <= 1 ? "Block" : "Add";
	const isNullValue = !count;

	function increment() {
		setCount((old) => old + 1);
	}

	function decrement() {
		setCount((old) => old - 1);
	}

	return { count, increment, decrement, leftImage, isNullValue };
}

export default Model;
