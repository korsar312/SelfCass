import { computed, makeObservable, observable, runInAction } from "mobx";
import type { ProjectInterface } from "../DI/Project.interface.ts";

export interface IServiceProps {
	infrastructure: ProjectInterface.TInfrastructure;
}


class ServiceBase<S extends object> {
	private readonly _infrastructure: ProjectInterface.TInfrastructure;
	private _store: S;

	constructor(params: IServiceProps, store: S) {
		this._infrastructure = params.infrastructure;
		this._store = store;

		makeObservable<this, "_store">(this, {
			_store: observable.ref,   	// наблюдаем за ссылкой на стор
			store: computed          	// геттер
		});
	}

	set store(newStore: S) {
		if (JSON.stringify(this._store) !== JSON.stringify(newStore)) {
			runInAction(() => {
				this._store = newStore; // экшен
			});
		}
	}

	get store(): S {
		return this._store;
	}

	public API = new Proxy({} as ProjectInterface.ActType<ProjectInterface.TModuleInf>, {
		get: (_, prop: keyof ProjectInterface.TModuleInf) => this._infrastructure(prop).invoke
	});

}

export default ServiceBase;
