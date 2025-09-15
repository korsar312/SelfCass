import type { RouterInterface as Interface } from "../Router.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import { type NavigateOptions } from "react-router";

class RouterImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private go(navFn: Interface.TRouterFn, path: Interface.TPath, page: Interface.EPath, options?: NavigateOptions) {
		const pathNav = path[page];
		navFn(pathNav, options);
	}

	private getCurRoutes(store: Interface.Store): Interface.TRouter {
		return store.routes[store.role];
	}

	private setCurrentRole(store: Interface.Store, role: Interface.ERouterRole): Interface.Store {
		return { ...store, role };
	}

	//==============================================================================================

	constructor(props: IServiceProps, routes: Interface.TRouterRole, path: Interface.TPath) {
		const store: Interface.Store = {
			routes: routes,
			role: "PUB",
			path,
		};

		super(props, store);
	}

	//==============================================================================================

	goTo(page: Interface.EPath, options?: NavigateOptions): void {
		const route = this.getCurRoutes(this.store);
		this.go(route.navigate, this.store.path, page, options);
	}

	getRoute(): Interface.TRouter {
		return this.getCurRoutes(this.store);
	}

	setRouteRole(role: Interface.ERouterRole): void {
		this.store = this.setCurrentRole(this.store, role);
	}
}

export default RouterImp;
