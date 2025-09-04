import { ServiceMessage } from "../Services/ServiceMessage";
import { InfrastructureLinks } from "../Infrastructure/InfrastructureLinks";

export namespace ProjectInterface {
	export type TModuleService = {
		Message: ServiceMessage;
	};

	export type TModuleInf = {
		Links: InfrastructureLinks;
	};

	//type TDI<M> = Record<keyof M, M[keyof M]>
	type TDI<M> = <T extends keyof M>(key: T) => M[T];

	export type TServices = TDI<TModuleService>;
	export type TInfrastructure = TDI<TModuleInf>;

	export type TDIModules = {
		services: TServices;
		infrastructure: TInfrastructure;
	};
}

