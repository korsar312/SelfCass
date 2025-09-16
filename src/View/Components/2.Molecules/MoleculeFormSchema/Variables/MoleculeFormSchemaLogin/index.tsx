import Component, { type IComponent as IParent } from "../../index";
import type { FC } from "react";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { TAtomInputText } from "../../../../1.Atoms/AtomInput";
import type { IComponent as IInput } from "../../../../1.Atoms/AtomInput/Variables/AtomInputForm";

export interface IComponent {
	title: MessageInterface.EWord;
	labelLog: MessageInterface.EWord;
	labelPas: MessageInterface.EWord;
	submit: (val: TMoleculeFormSchemaLoginForm) => void;
}

export type TMoleculeFormSchemaLoginForm = {
	login: string;
	password: string;
};

const Index: FC<IComponent> = (props) => {
	const { title, submit } = props;

	const textEl: TAtomInputText = { text: "" };

	const topTextOptions: IInput = { initText: textEl, name: "topText" };

	const propsComponent: IParent = {
		...props,
		schema: {
			extStyle: { display: "flex", flexDirection: "column", gap: 12, width: 400 },
			value: [
				{
					extStyle: { display: "flex", flexDirection: "column" },
					value: {
						type: "text",
						options: {
							text: title,
							color: "PRIME",
							font: "H2",
						},
					},
				},
				{
					value: {
						type: "input",
						options: topTextOptions,
					},
				},
			],
		},
		form: { onSubmit: submit },
		buttonList: [{ text: "DAY_US_USDT" }],
	};

	return <Component {...propsComponent} />;
};

export default Index;
