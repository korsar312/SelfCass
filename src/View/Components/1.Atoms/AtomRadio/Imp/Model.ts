import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { onClick, isFlag, disabled } = props;

	return { onClick, isFlag, disabled };
}

export default Model;
