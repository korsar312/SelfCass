import type { RouterInterface } from "../../Core/Services/ServiceRouter/Router.interface.ts";
import { createBrowserRouter, redirect } from "react-router";
import { lazy } from "react";

const cassPath = "cass/";
const admPath = "admin/";

export const Path: RouterInterface.TPath = {
	HOME: "/",
	OTHER: `*`,

	ADM_LOGIN: `${admPath}login`,

	CASS_LOGIN: `${cassPath}login`,
	CASS_CHOICE_MENU: `${cassPath}menu`,
	CASS_MENU: `${cassPath}`,
};

const PageChoice = lazy(() => import("./../../../View/Page/PageChoice"));

const AdmLogin = lazy(() => import("./../../../View/Page/Adm/AdmLogin"));

const CassLogin = lazy(() => import("./../../../View/Page/Cass/CassLogin"));
const CassChoiceMenu = lazy(() => import("./../../../View/Page/Cass/CassChoiceMenu"));
const CassMenu = lazy(() => import("./../../../View/Page/Cass/CassMenu"));

const Route: RouterInterface.TRouterList = [
	{
		path: Path.ADM_LOGIN,
		Component: AdmLogin,
	},
	{
		path: Path.CASS_LOGIN,
		Component: CassLogin,
	},
	{
		path: Path.HOME,
		Component: PageChoice,
	},
	{
		path: Path.OTHER,
		loader: () => redirect(Path.HOME),
	},
];

const RouteAdm: RouterInterface.TRouterList = [...Route];

const RouteCass: RouterInterface.TRouterList = [
	...Route,
	{
		path: Path.CASS_CHOICE_MENU,
		Component: CassChoiceMenu,
	},
	{
		path: Path.CASS_MENU,
		Component: CassMenu,
	},
];

export const Routes: RouterInterface.TRouterRole = {
	PUB: createBrowserRouter(Route),
	ADM: createBrowserRouter(RouteAdm),
	CASS: createBrowserRouter(RouteCass),
};
