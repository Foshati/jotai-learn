import { atom } from "jotai";

type CartItemType = {
    id: string;
    name: string;
    price: number;
};

export const cartAtom = atom<CartItemType[]>([]);

export const totalAtom = atom((get) =>
    get(cartAtom).reduce((total, item) => total + item.price, 0)
);
