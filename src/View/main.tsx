import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Background from "./Layout/Background";
import Pages from "./Layout/Pages";

createRoot(document.getElementById("root") || document.body).render(
	<StrictMode>
		<Background />
		<Pages />
	</StrictMode>,
);
