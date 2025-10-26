import type { RouterInterface as Interface } from "../Router.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import { createBrowserRouter, generatePath, matchPath } from "react-router";

class RouterImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private async go(
		navFn: Interface.TRouterFn,
		path: Interface.TPath,
		page: Interface.EPath,
		params?: Record<string, string>,
		state?: Record<string, unknown>,
		replace: boolean = false,
	) {
		await navFn(generatePath("/" + path[page], params), { replace, state });
	}

	private setCurrentRole(store: Interface.Store, role: Interface.ERole): Interface.Store {
		return { ...store, role };
	}

	private getPage(path: string, pathObj: Interface.TPath): Interface.EPath {
		const pathArr = Object.entries(pathObj) as unknown as [Interface.EPath, string][];

		return (
			pathArr.find(([_key, value]) => {
				return Boolean(matchPath({ path, end: true }, value));
			})?.[0] || "OTHER"
		);
	}

	private setCurPath(store: Interface.Store, currentPathName: Interface.EPath): Interface.Store {
		return { ...store, currentPathName };
	}

	private isAccessRoute(currentRole: Interface.ERole, page: Interface.EPath, routeRole: Interface.TRouterListRole): boolean {
		if (page === "OTHER") return false;
		if (!routeRole[page]) return true;

		return routeRole[page].includes(currentRole);
	}

	private redirectRole(role: Interface.ERole): Interface.EPath {
		switch (role) {
			case "PUB":
				return "HOME";
			case "CASS":
				return "CASS_CHOICE_MENU";
			case "ADM":
				return "ADM_LOGIN";
		}
	}

	//==============================================================================================

	constructor(props: IServiceProps, routes: Interface.TRouterList, routesRole: Interface.TRouterListRole, path: Interface.TPath) {
		const role: Interface.ERole = "PUB";

		const store: Interface.Store = {
			routes: createBrowserRouter(routes),
			role,
			routesRole,
			path,
			currentPathName: "OTHER",
		};

		super(props, store);

		const route = routes.map((el) => {
			if (!el.loader) {
				el.loader = () => {
					const page = this.getPage(el.path || "", path);
					return this.isAccessRoute(this.getRole(), page, routesRole) ? null : this.goTo("HOME");
				};
			}
			return el;
		});

		const browserRouter = createBrowserRouter(route);
		const curPath = browserRouter.state.location.pathname;
		const currentPathName = this.getPage(curPath, path);

		this.store = { ...this.store, routes: browserRouter, currentPathName };
	}

	//==============================================================================================

	goTo(page: Interface.EPath, param?: Record<string, string>): void {
		if (!this.isAccessRoute(this.store.role, page, this.store.routesRole)) {
			param = undefined;
			page = this.redirectRole(this.store.role);
		}

		this.go(this.store.routes.navigate, this.store.path, page, param);
		this.store = this.setCurPath(this.store, page);
	}

	getCurPathName(): Interface.EPath {
		return this.store.currentPathName;
	}

	getRouteObj(): Interface.TRouter {
		return this.store.routes;
	}

	getRole(): Interface.ERole {
		return this.store.role;
	}

	setRole(role: Interface.ERole): void {
		this.store = this.setCurrentRole(this.store, role);
	}
}

export default RouterImp;
