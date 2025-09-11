import { createBrowserRouter, type NavigateOptions } from "react-router";

export namespace RouterInterface {
	export interface IAdapter {
		goTo(page: EPath, options?: NavigateOptions): void;
		getRoute(): TRouter;
	}

	export interface Store {
		route: TRouter;
		path: TPath;
	}

	export type EPath = keyof typeof Router;
	export type TPath = Record<EPath, string>;

	export type TRouter = ReturnType<typeof createBrowserRouter>;
	export type TRouterFn = TRouter["navigate"];
}

const Router = {
	HOME: "HOME",
	MENU: "MENU",
} as const;
