import { InfrastructureLinks } from "../Infrastructure/InfrastructureLinks";
import { ServiceMessage } from "../Services/ServiceMessage";
import { ServiceStyle } from "../Services/ServiceStyle";

export namespace ProjectInterface {
	export type TModuleInf = {
		Links: InfrastructureLinks;
	};

	export type TModuleService = {
		Message: ServiceMessage;
		Style: ServiceStyle;
	};

	type TDI<M> = <T extends keyof M>(key: T) => M[T];

	export type TServices = TDI<TModuleService>;
	export type TInfrastructure = TDI<TModuleInf>;

	type InvokeOf<T> = T extends { invoke: infer I } ? I : never;

	export type ActType<T> = {
		[K in keyof T]: InvokeOf<T[K]>;
	};
}
