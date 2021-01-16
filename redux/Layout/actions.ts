import { FIRST_LOAD_COMPLETE } from "../types";

interface FirstLoadComplete {
  type: typeof FIRST_LOAD_COMPLETE;
  payload?: boolean;
}

export const setFirstLoadComplete = (value: boolean = true): FirstLoadComplete => (
  { type: FIRST_LOAD_COMPLETE, payload: value }
);

export type LayoutTypes = FirstLoadComplete;
