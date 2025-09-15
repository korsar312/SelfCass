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

function prefixArray<const T extends readonly string[], const P extends string>(arr: T, prefix: P) {
	return arr.map((k) => `${prefix}${k}`) as {
		[K in T[number]]: `${P}${K}`;
	}[T[number]][];
}

const rawCass = ["LOGIN", "CHOICE_MENU", "MENU"] as const;
const CassRoutes = prefixArray(rawCass, "CASS_");

const rawAdm = ["LOGIN"] as const;
const AdmRoutes = prefixArray(rawAdm, "ADM_");

type TCassPath = (typeof CassRoutes)[number];
type TAdnPath = (typeof AdmRoutes)[number];

type AllPath = TCassPath | TAdnPath;

const Router = Object.fromEntries(CassRoutes.map((k) => [k, ""])) as {
	[K in AllPath]: string;
};
