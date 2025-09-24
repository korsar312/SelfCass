import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { children, xs, sm, md, xl, lg, item, space } = props;

	const css = item ? Style.itemGrid({ xs, sm, md, xl, lg }) : Style.containerGrid;

	return <div css={[css, Style.wrapper(space)]}>{children}</div>;
};

export default View;
