import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const countAtom = atomWithStorage("count", 0);
export const doubleCountAtom = atom((get) => get(countAtom) * 2);
