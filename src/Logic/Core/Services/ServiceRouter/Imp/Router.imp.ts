import type { RouterInterface as Interface } from "../Router.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import { createBrowserRouter, generatePath } from "react-router";

class RouterImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private async go(
		navFn: Interface.TRouterFn,
		path: Interface.TPath,
		page: Interface.EPath,
		params?: Record<string, string>,
		state?: Record<string, unknown>,
	) {
		const pattern = path[page];
		const url = params ? generatePath(pattern, params) : pattern;

		await navFn(generatePath("/" + url, params), { replace: false, state });
	}

	private setCurrentRole(store: Interface.Store, role: Interface.ERole): Interface.Store {
		return { ...store, role };
	}

	private getCurrentRole(store: Interface.Store): Interface.ERole {
		return store.role;
	}

	private getCurrentRoutesRole(store: Interface.Store): Interface.TRouterListRole {
		return store.routesRole;
	}

	private getCurrentRoutes(store: Interface.Store): Interface.TRouter {
		return store.routes;
	}

	private getCurrentPath(store: Interface.Store): Interface.TPath {
		return store.path;
	}

	private getNavFn(route: Interface.TRouter): Interface.TRouterFn {
		return route.navigate;
	}

	private isAccessRoute(currentRole: Interface.ERole, page: Interface.EPath, routeRole: Interface.TRouterListRole): boolean {
		if (!routeRole[page]) return true;

		return routeRole[page].includes(currentRole);
	}

	//==============================================================================================

	constructor(props: IServiceProps, routes: Interface.TRouterList, routesRole: Interface.TRouterListRole, path: Interface.TPath) {
		const store: Interface.Store = {
			routes: createBrowserRouter(routes),
			role: "PUB",
			routesRole,
			path,
		};

		super(props, store);
	}

	//==============================================================================================

	goTo(page: Interface.EPath, param?: Record<string, string>): void {
		const role = this.getCurrentRole(this.store);
		const routesRole = this.getCurrentRoutesRole(this.store);
		const path = this.getCurrentPath(this.store);
		const routes = this.getCurrentRoutes(this.store);
		const navFn = this.getNavFn(routes);

		if (!this.isAccessRoute(role, page, routesRole)) return;

		this.go(navFn, path, page, param).then((r) => r);
	}

	getRoute(): Interface.TRouter {
		return this.getCurrentRoutes(this.store);
	}

	getRole(): Interface.ERole {
		return this.getCurrentRole(this.store);
	}

	setRouteRole(role: Interface.ERole): void {
		this.store = this.setCurrentRole(this.store, role);
	}
}

export default RouterImp;
