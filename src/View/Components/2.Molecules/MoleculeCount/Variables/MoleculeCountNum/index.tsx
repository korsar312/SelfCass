import { type FC, useState } from "react";
import Style from "./Style.ts";
import Component, { type IComponent as IParent } from "../../index";
import { useDidUpdate } from "../../../../../../Logic/Libs/Hooks/useDidUpdate/useDidUpdate.ts";

export interface IComponent {
	defaultValue: number;
	onChange: (num: number) => void;
}

const Index: FC<IComponent> = (props) => {
	const { defaultValue, onChange } = props;

	const [count, setCount] = useState(defaultValue);

	useDidUpdate(() => {
		onChange(count);
	}, [count]);

	function increment() {
		setCount((old) => old + 1);
	}

	function decrement() {
		setCount((old) => old - 1);
	}

	const propsComponent: IParent = {
		textVars: { text: count },
		leftBtn: { icon: count <= 1 ? "Block" : "Add", click: decrement },
		rightBtn: { icon: "Add", click: increment },
		fullBtn: { text: "LOGIN", click: increment, isFullHeight: true },
		isFullBtn: !count,
		extStyles: Style.wrapper,
	};

	return <Component {...propsComponent} />;
};

export default Index;
