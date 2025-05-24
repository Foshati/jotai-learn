import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type CartItemType = {
    id: string;
    name: string;
    price: number;
};

export const cartAtom = atomWithStorage<CartItemType[]>("cart", []);

export const totalAtom = atom((get) =>
    get(cartAtom).reduce((total, item) => total + item.price, 0)
);
