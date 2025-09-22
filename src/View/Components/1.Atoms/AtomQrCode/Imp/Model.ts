import type { IComponent } from "../index";
import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import { useElSize } from "../../../../../Logic/Libs/Hooks/useElSize/useElSize.ts";

function Model(props: IComponent) {
	const { code } = props;

	const qrRef = useRef<HTMLDivElement>(null);
	const qrWrap = useRef<HTMLDivElement>(null);

	const { maxSize } = useElSize(qrWrap);

	useEffect(() => {
		if (!maxSize) return;
		console.log(234);

		const qrCode = new QRCodeStyling({
			width: maxSize,
			height: maxSize,
			type: "canvas",
			data: code,
			dotsOptions: {
				color: "#4267b2",
				type: "rounded",
			},
			backgroundOptions: {
				color: "none",
			},
		});

		qrRef.current && qrCode.append(qrRef.current);

		return () => {
			const child = qrRef.current?.firstChild;
			child && qrRef.current?.removeChild(child);
		};
	}, [maxSize]);

	return { code, qrRef, qrWrap };
}

export default Model;
