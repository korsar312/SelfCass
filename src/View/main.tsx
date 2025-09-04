import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Pages from "./Layout/Pages";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Pages />
	</StrictMode>
);
