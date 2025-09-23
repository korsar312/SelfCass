import type { IComponent } from "../index";
import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import { useElSize } from "../../../../../Logic/Libs/Hooks/useElSize/useElSize.ts";
import type { Options } from "qr-code-styling/lib/types";
import { Act } from "../../../../../Logic/Core";

function Model(props: IComponent) {
	const { code, bgColor, qrColor } = props;

	const qrRef = useRef<HTMLDivElement>(null);
	const qrWrap = useRef<HTMLDivElement>(null);

	const { minSize } = useElSize(qrWrap);
	const newSize = minSize - 14;

	const qrProps: Partial<Options> = {
		width: newSize,
		height: newSize,
		type: "canvas",
		data: code,
		dotsOptions: {
			color: Act.Style.getColor(qrColor || "MEDIUM"),
			type: "rounded",
		},
		backgroundOptions: {
			color: "none",
		},
	};

	useEffect(() => {
		if (newSize <= 0 || !qrRef.current) return;

		const qrCode = new QRCodeStyling(qrProps);
		qrCode.append(qrRef.current);

		return () => {
			const child = qrRef.current?.firstChild;
			child && qrRef.current?.removeChild(child);
		};
	}, [minSize]);

	return { code, qrRef, qrWrap, bgColor };
}

export default Model;
