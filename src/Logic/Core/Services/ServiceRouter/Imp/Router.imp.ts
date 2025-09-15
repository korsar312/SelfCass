import type { RouterInterface as Interface } from "../Router.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import type { NavigateOptions } from "react-router";

class RouterImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private go(navFn: Interface.TRouterFn, path: Interface.TPath, page: Interface.EPath, options?: NavigateOptions) {
		const pathNav = path[page];
		navFn(pathNav, options);
	}

	//==============================================================================================

	constructor(props: IServiceProps, route: Interface.TRouter, path: Interface.TPath) {
		const store: Interface.Store = {
			route,
			path,
		};

		super(props, store);
	}

	//==============================================================================================

	goTo(page: Interface.EPath, options?: NavigateOptions): void {
		this.go(this.store.route.navigate, this.store.path, page, options);
	}

	getRoute(): Interface.TRouter {
		return this.store.route;
	}
}

export default RouterImp;
