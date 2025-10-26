import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { btn, title } = props;

	return { btn, title };
}

export default Model;
