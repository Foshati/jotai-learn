"use client";
import { cartAtom, totalAtom } from "@/atoms/cartAtom";
import { useAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";
type CartItemType = {
  id: string;
  name: string;
  price: number;
};

export default function ShopCartPage() {
  const [cart, setCart] = useAtom(cartAtom);
  const [total] = useAtom(totalAtom);

  const addItem = (item: CartItemType) => {
    setCart([...cart, item]);
  };

  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>
      <ul>
        {cart?.map((item) => (
          <li key={item.id} className="mb-2">
            {item.name} - ${item.price}
            <button
              onClick={() => removeItem(item.id)}
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded-full"
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-semibold">Total: ${total}</p>
      <div className="mt-4 space-x-2">
        <button
          onClick={() => addItem({ id: uuidv4(), name: "Apple", price: 1.5 })}
          className="btn"
        >
          Add Apple
        </button>
        <button
          onClick={() => addItem({ id: uuidv4(), name: "Banana", price: 1.0 })}
          className="btn"
        >
          Add Banana
        </button>
      </div>
    </div>
  );
}
