import { atom } from "jotai";
import { loadable } from "jotai/utils";


export const asyncInfoAtom = atom(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    return data;
})

export const loadableInfoAtom = loadable(asyncInfoAtom);