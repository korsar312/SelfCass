import type { IComponent } from "../index";
import { useState } from "react";
import type { MessageInterface } from "../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";

export type TWidgetDebugState = "btn" | "tgl" | "inp";

type TBtn = {
	title: MessageInterface.EWord;
	comp: TWidgetDebugState;
	click: () => void;
};

function Model(props: IComponent) {
	const { isShow, onClose } = props;

	const [comp, setComp] = useState<TWidgetDebugState>("btn");

	const btnParam: Omit<TBtn, "click">[] = [
		{
			title: "PASSWORD",
			comp: "btn",
		},
		{
			title: "CART",
			comp: "tgl",
		},
		{
			title: "CLOSE",
			comp: "inp",
		},
	];

	const btnSwitch: TBtn[] = btnParam.map((el) => ({ ...el, click: () => setComp(el.comp) }));

	function isFill(curCat: TWidgetDebugState) {
		return curCat === comp;
	}

	return { isShow, onClose, btnSwitch, comp, isFill };
}

export default Model;
