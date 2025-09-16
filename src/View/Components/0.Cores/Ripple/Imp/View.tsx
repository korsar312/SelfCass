import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import { type JSX, useEffect, useRef, useState } from "react";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	const [ripples, setRipples] = useState<Array<JSX.Element>>([]);
	const rippleContainer = useRef<HTMLDivElement>(null);

	const createRipple = (event: MouseEvent) => {
		const container = rippleContainer.current;
		if (!container) return;

		const rect = container.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height);
		const x = event.clientX - rect.left - size / 2;
		const y = event.clientY - rect.top - size / 2;

		const newRipple = (
			<span
				key={Date.now()}
				css={Style.rippleStyle(x, y, size)}
				onAnimationEnd={() => {
					setRipples((prev) => prev.slice(1));
				}}
			/>
		);

		setRipples((prev) => [...prev, newRipple]);
	};

	useEffect(() => {
		const node = rippleContainer.current?.parentElement;
		if (!node) return;

		node.addEventListener("click", createRipple);
		return () => {
			node.removeEventListener("click", createRipple);
		};
	}, []);

	return (
		<div ref={rippleContainer} css={Style.wrapper}>
			{ripples}
		</div>
	);
};

export default View;
