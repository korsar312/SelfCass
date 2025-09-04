import Dictionary from "./Dictionary";
import type { MessageInterface } from "../Message.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class MessageImp extends ServiceBase<MessageInterface.Store> implements MessageInterface.IAdapter {
	private readonly dictionary = Dictionary;

	constructor(props: IServiceProps) {
		super(props, {});
	}

	public getWord(word: MessageInterface.EWord, lang: MessageInterface.ELang, arrReplace?: string[]) {
		let text = this.dictionary[word][lang];

		if (arrReplace?.length) text = getText(text, arrReplace);

		this.API.Links.request();
		return text;
	}
}

export default MessageImp;

function getText(text: string, arrReplace: Array<string | number>): string {
	return text.replace(/\{\{(\d+)\}\}/g, (_, group1) => {
		const idx = Number(group1) - 1; // {{1}} → индекс 0
		const replacement = arrReplace[idx];
		return replacement !== undefined // если есть замена
			? String(replacement) // – приводим к строке
			: `{{${group1}}}`; // – иначе оставляем как есть
	});
}
