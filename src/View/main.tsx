import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Background from "./Layout/Background";
import Pages from "./Layout/Pages";
import Initial from "./Layout/Initial";

createRoot(document.getElementById("root") || document.body).render(
	<StrictMode>
		<Initial />
		<Background />
		<Pages />
	</StrictMode>,
);
