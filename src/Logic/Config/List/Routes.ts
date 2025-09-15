import type { RouterInterface } from "../../Core/Services/ServiceRouter/Router.interface.ts";
import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const cassPath = "admin/";
const admPath = "cass/";

export const Path: RouterInterface.TPath = {
	ADM_LOGIN: `${admPath}login`,
	CASS_LOGIN: `${cassPath}login`,
	CASS_CHOICE_MENU: `${cassPath}menu`,
	CASS_MENU: `${cassPath}`,
};

const AdmLogin = lazy(() => import("./../../../View/Page/Adm/AdmLogin"));

const CassLogin = lazy(() => import("./../../../View/Page/Cass/CassLogin"));
const CassChoiceMenu = lazy(() => import("./../../../View/Page/Cass/CassChoiceMenu"));
const CassMenu = lazy(() => import("./../../../View/Page/Cass/CassMenu"));

export const Routes: RouterInterface.TRouter = createBrowserRouter([
	{
		path: Path.ADM_LOGIN,
		Component: AdmLogin,
	},
	{
		path: Path.CASS_LOGIN,
		Component: CassLogin,
	},
	{
		path: Path.CASS_CHOICE_MENU,
		Component: CassChoiceMenu,
	},
	{
		path: Path.CASS_MENU,
		Component: CassMenu,
	},
]);
