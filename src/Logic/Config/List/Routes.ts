import { type RouterInterface } from "../../Core/Services/ServiceRouter/Router.interface.ts";
import { createBrowserRouter } from "react-router";
import { lazy } from "react";

export const Path: RouterInterface.TPath = {
	HOME: "/",
	MENU: "menu",
};

const ChoiceMenu = lazy(() => import("./../../../View/Page/PageChoiceMenu"));
const Menu = lazy(() => import("./../../../View/Page/PageMenu"));

export const Routes: RouterInterface.TRouter = createBrowserRouter([
	{
		path: Path.HOME,
		Component: ChoiceMenu,
	},
	{
		path: Path.MENU,
		Component: Menu,
	},
]);
