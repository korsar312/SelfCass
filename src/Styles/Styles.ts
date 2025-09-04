import Mixins from "./Mixins/Mixins";
import Variables from "./Variables/Variables";
import StyleP from "./StyleP/StyleP";

export class Styles {
	public pub = StyleP;

	protected mixins = Mixins;
	protected variables = Variables;

	protected getColors(color?: StylesInterface.TColorChoice, opacity?: number) {
		const theme = StylesInterface.ETheme.DARK;

		return UseCases.interactor("style", "getColor", theme, color, opacity);
	}

	protected getFonts(font: StylesInterface.EFont) {
		return UseCases.interactor("style", "getFont", font);
	}

	protected getSizeFonts(font: StylesInterface.EFont) {
		return UseCases.interactor("style", "getSizeFont", font);
	}
}

export default Styles;
