import { type MessageInterface as Interface } from "../Message.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class MessageImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	//==============================================================================================

	constructor(props: IServiceProps, dictionary: Interface.TDictionary) {
		const store: Interface.Store = { dictionary };

		super(props, store);
	}

	//==============================================================================================

	public getWord(word: Interface.EWord, lang: Interface.ELang, arrReplace?: string[]) {
		let text = this.store.dictionary[word][lang];

		if (arrReplace?.length) text = getText(text, arrReplace);

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
