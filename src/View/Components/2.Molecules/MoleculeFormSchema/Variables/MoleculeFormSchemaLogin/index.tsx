import Component, { type IComponent as IParent } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { TAtomInputText } from "../../../../1.Atoms/AtomInput";
import type { IComponent as IInput } from "../../../../1.Atoms/AtomInput/Variables/AtomInputForm";

export interface IComponent {
	title: MessageInterface.EWord;
	labelLog: MessageInterface.EWord;
	labelPas: MessageInterface.EWord;
	btnText: MessageInterface.EWord;
	submit: (val: TMoleculeFormSchemaLoginForm) => void;
}

export type TMoleculeFormSchemaLoginForm = {
	login: string;
	password: string;
};

const Index: FC<IComponent> = (props) => {
	const { title, submit, labelPas, labelLog, btnText } = props;

	const textEl: TAtomInputText = { text: "", font: "BodyMain" };

	const logParam: IInput = { initText: textEl, name: "login" };
	const passParam: IInput = { initText: textEl, name: "password" };

	const propsComponent: IParent = {
		...props,
		schema: {
			value: [
				{
					extStyle: Styles.wrapper,
					value: {
						type: "text",
						options: {
							text: title,
							color: "SECOND",
							font: "BlockHeading",
						},
					},
				},
				{
					value: {
						type: "text",
						options: {
							text: labelLog,
							font: "LabelMedium",
						},
					},
				},
				{
					value: {
						type: "input",
						options: logParam,
					},
				},
				{
					value: {
						type: "text",
						options: {
							text: labelPas,
							font: "LabelMedium",
						},
					},
				},
				{
					value: {
						type: "input",
						options: passParam,
					},
				},
			],
		},
		form: { onSubmit: submit },
		buttonList: [{ text: btnText }],
	};

	return <Component {...propsComponent} />;
};

export default Index;
