import Styles from "../../../../../Styles/Styles.ts";
import { type CSSObject, keyframes } from "@emotion/react";

class Style extends Styles {
	protected rippleKF = keyframes({
		to: {
			transform: "scale(2.5)",
			opacity: 0,
		},
	});

	public wrapper: CSSObject = {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		overflow: "hidden",
		pointerEvents: "none",
		borderRadius: "inherit",
	};

	public rippleStyle(x: number, y: number, size: number): CSSObject {
		return {
			position: "absolute",
			left: `${x}px`,
			top: `${y}px`,
			width: ` ${size}px`,
			height: `${size}px`,
			background: `rgba(255, 255, 255, 0.4)`,
			borderRadius: `50%`,
			transform: `scale(0)`,
			animation: `${this.rippleKF} 600ms ease-out`,
			pointerEvents: "none",
		};
	}
}

export default new Style();
