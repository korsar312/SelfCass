import type { IComponent } from "../index";
import { useState } from "react";
import type { MessageInterface } from "../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";

type TComponent = "btn" | "tgl";

type TBtn = {
	title: MessageInterface.EWord;
	comp: TComponent;
	click: () => void;
};

function Model(props: IComponent) {
	const { isShow, onClose } = props;

	const [comp, setComp] = useState<TComponent>("btn");

	const btnParam: Omit<TBtn, "click">[] = [
		{
			title: "PASSWORD",
			comp: "btn",
		},
		{
			title: "CART",
			comp: "tgl",
		},
	];

	const btnSwitch: TBtn[] = btnParam.map((el) => ({ ...el, click: () => setComp(el.comp) }));

	function isFill(curCat: TComponent) {
		return curCat === comp;
	}

	return { isShow, onClose, btnSwitch, comp, isFill };
}

export default Model;
