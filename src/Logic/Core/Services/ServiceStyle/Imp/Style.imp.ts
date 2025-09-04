import { type StyleInterface as Interface } from "../Style.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class StyleImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private readonly fonts: Interface.TFont;

	constructor(props: IServiceProps, fonts: Interface.TFont) {
		super(props, {});
		this.fonts = fonts;
		this.fonts;
	}
}

export default StyleImp;
