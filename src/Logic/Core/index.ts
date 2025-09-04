import type { ProjectInterface } from "./DI/Project.interface.ts";
import service from "./DI/Create.services.ts";

type InvokeOf<T> = T extends { invoke: infer I } ? I : never;

type ActType = {
	[K in keyof ProjectInterface.TModuleService]: InvokeOf<ProjectInterface.TModuleService[K]>;
};


export const Act: ActType = new Proxy({} as ActType, {
	get: (_, prop: keyof ProjectInterface.TModuleService) => service(prop).invoke
});



