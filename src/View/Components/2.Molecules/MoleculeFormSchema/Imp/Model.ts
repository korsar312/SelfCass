import type { IComponent } from "../";

function Model(props: IComponent) {
	const { schema, extStyle, color, buttonList, form } = props;

	return { schema, extStyle, color, form, buttonList };
}

export default Model;
