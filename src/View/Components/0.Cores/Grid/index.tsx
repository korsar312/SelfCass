import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import { type JSX, type ReactNode } from "react";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";
import { type typesUtils } from "../../../../Logic/Libs/Util/TypesUtils.ts";

export type TComponent = {
	children?: ReactNode;
	xs?: TGridBreakpoint;
	sm?: TGridBreakpoint;
	md?: TGridBreakpoint;
	lg?: TGridBreakpoint;
	xl?: TGridBreakpoint;
	spacing?: 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32;
	extStyle?: TDeepCSSObject;
	as?: keyof JSX.IntrinsicElements;
} & typesUtils.ExclusiveKeys<TInputType>;

type TInputType = {
	container: boolean;
	item: boolean;
};

type TGridBreakpoint = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto" | false;

const Index = (props: TComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
