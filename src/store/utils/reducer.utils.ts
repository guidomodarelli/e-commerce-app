import { Actions } from "@store/types";

type ActionPayloadMap = {
  [K in Actions as K["type"]]: K extends { payload: infer P } ? P : undefined;
};

export function createAction<T extends Actions["type"]>(type: T): { type: T };
export function createAction<T extends Actions["type"]>(
  type: T,
  payload: ActionPayloadMap[T],
): { type: T; payload: ActionPayloadMap[T] };
export function createAction<T extends Actions["type"]>(type: T, payload?: ActionPayloadMap[T]) {
  return { type, payload };
}
