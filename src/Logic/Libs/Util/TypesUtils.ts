import type { FC } from "react";

export type NFC<T extends (...args: any[]) => any> = FC<ReturnType<T>>;

export namespace typesUtils {
	export type TDeepTypeObject<T> = typesUtils.RecursiveArray<T | undefined | false> | T;

	/**
	 * Тип для неограниченного по вложенности массива
	 */
	export type RecursiveArray<type> = {
		[index: number]: RecursiveArray<type> | type;
		length: number;
	};

	/**
	 * Необходимо только 1 из нескольких свойств
	 */
	export type ExclusiveKeys<T> = {
		[K in keyof T]: { [P in K]: T[K] } & Partial<Record<Exclude<keyof T, K>, never>>;
	}[keyof T];
}
