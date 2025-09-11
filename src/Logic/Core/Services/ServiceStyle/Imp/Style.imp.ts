import { type StyleInterface as Interface } from "../Style.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import type { CSSObject } from "@emotion/react";

class StyleImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private hex2rgba(hex: Interface.TColorHEXFormat, opacity: number): Interface.TColorRGBFormat {
		const RGB = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16));

		return `rgba(${RGB},${opacity})`;
	}

	private getHexColor(store: Interface.Store, theme: Interface.ETheme, color: Interface.EColor): Interface.TColorHEXFormat {
		return store.color[theme][color];
	}

	private getStoreFont(store: Interface.Store, font: Interface.EFont): CSSObject | undefined {
		return store.font[font];
	}

	private createNewFontObj(font: Interface.EFont, fontObj: Interface.TFontList, weightObj: Interface.TWeightList): CSSObject {
		const token = fontObj[font];
		const [w, size] = token.split("_") as [Interface.EWeight, `${number}`];

		return {
			fontFamily: "Roboto",
			fontWeight: weightObj[w],
			fontSize: Number(size),
		};
	}

	private saveNewFontObj(name: Interface.EFont, newFont: CSSObject): Interface.Store {
		const font = { ...this.store.font, [name]: newFont };

		return { ...this.store, font };
	}

	private getCurrentTheme(store: Interface.Store): Interface.ETheme {
		return store.theme;
	}

	//==============================================================================================

	constructor(props: IServiceProps, color: Interface.TColor, fontList: Interface.TFontList, weightList: Interface.TWeightList) {
		const store: Interface.Store = {
			color,
			font: {},
			fontProp: { fontList, weightList },
			theme: "LIGHT",
		};

		super(props, store);
	}

	//==============================================================================================

	getColor(color?: Interface.TColorChoice, opacity: number = 1): string {
		if (color === undefined) return "null";

		const theme = this.getCurrentTheme(this.store);
		const hex = this.getHexColor(this.store, theme, color);

		return this.hex2rgba(hex, opacity);
	}

	getFont(font: Interface.EFont): CSSObject {
		const storeFont = this.getStoreFont(this.store, font);
		if (storeFont) return storeFont;

		const newFont = this.createNewFontObj(font, this.store.fontProp.fontList, this.store.fontProp.weightList);
		this.store = this.saveNewFontObj(font, newFont);

		return newFont;
	}

	getTheme(): Interface.ETheme {
		return this.getCurrentTheme(this.store);
	}
}

export default StyleImp;
