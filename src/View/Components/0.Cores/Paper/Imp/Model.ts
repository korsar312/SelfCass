import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { children, color, extStyle, isFull, onClick } = props;

	return { children, color, extStyle, isFull, onClick };
}

export default Model;
