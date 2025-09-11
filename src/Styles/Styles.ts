import Mixins from "./Mixins/Mixins";
import Variables from "./Variables/Variables";
import StyleP from "./StyleP/StyleP";
import type { StyleInterface } from "../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import { Act } from "../Logic/Core";

export class Styles {
	public pub = StyleP;

	protected mixins = Mixins;
	protected variables = Variables;

	protected getColor(color?: StyleInterface.TColorChoice, opacity?: number) {
		const theme: StyleInterface.ETheme = Act.Style.getTheme();

		return Act.Style.getColor(theme, color, opacity);
	}

	protected getFont(font: StyleInterface.EFont) {
		return Act.Style.getFont(font);
	}
}

export default Styles;
