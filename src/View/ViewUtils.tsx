import type { CSSObject } from "@emotion/react";
import type { typesUtils } from "../Logic/Libs/Util/TypesUtils";
import type { ButtonHTMLAttributes } from "react";

export type TDeepCSSObject = typesUtils.TDeepTypeObject<CSSObject>;
export type TTagPartial<T extends HTMLElement, K extends keyof ButtonHTMLAttributes<T>> = Partial<Pick<ButtonHTMLAttributes<T>, K>>;