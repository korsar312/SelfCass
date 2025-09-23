import type { IComponent } from "../index";
import { useEffect, useMemo, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import { useElSize } from "../../../../../Logic/Libs/Hooks/useElSize/useElSize.ts";
import { Act } from "../../../../../Logic/Core";

function Model(props: IComponent) {
	const { code, bgColor, qrColor } = props;

	const qrRef = useRef<HTMLDivElement>(null);
	const qrWrap = useRef<HTMLDivElement>(null);

	const { minSize } = useElSize(qrWrap);
	const newSize = minSize - 14;
	const isTooSmall = newSize <= 35;

	const qrCode = useMemo(() => createQrProps(), [code, minSize]);

	useEffect(() => {
		createQrView();

		return () => {
			removeQrView();
		};
	}, [minSize, qrColor]);

	useEffect(() => {
		updateQrView();
	}, [code]);

	function createQrProps() {
		if (isTooSmall) return null;

		return new QRCodeStyling({
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
		});
	}

	function createQrView() {
		if (newSize < 21 || !qrRef.current) return;
		qrCode?.append(qrRef.current);
	}

	function updateQrView() {
		qrCode?.update({ data: code });
	}

	function removeQrView() {
		const child = qrRef.current?.firstChild;
		child && qrRef.current?.removeChild(child);
	}

	return { code, qrRef, qrWrap, bgColor, isTooSmall };
}

export default Model;
