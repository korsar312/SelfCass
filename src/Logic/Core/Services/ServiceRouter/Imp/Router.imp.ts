import type { RouterInterface as Interface } from "../Router.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import { createBrowserRouter, type NavigateOptions } from "react-router";

class RouterImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private async go(navFn: Interface.TRouterFn, path: Interface.TPath, page: Interface.EPath, options?: NavigateOptions) {
		const pathNav = path[page];
		await navFn(pathNav, options);
	}

	private setCurrentRole(store: Interface.Store, role: Interface.ERole): Interface.Store {
		return { ...store, role };
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

	goTo(page: Interface.EPath, options?: NavigateOptions): void {
		if (!this.isAccessRoute(this.store.role, page, this.store.routesRole)) return;

		this.go(this.store.routes.navigate, this.store.path, page, options).then((r) => r);
	}

	getRoute(): Interface.TRouter {
		return this.store.routes;
	}

	setRouteRole(role: Interface.ERole): void {
		this.store = this.setCurrentRole(this.store, role);
	}
}

export default RouterImp;
