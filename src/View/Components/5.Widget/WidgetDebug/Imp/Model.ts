import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { isShow, onClose } = props;

	return { isShow, onClose };
}

export default Model;
