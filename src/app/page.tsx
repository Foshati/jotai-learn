"use client";
import { countAtom, doubleCountAtom } from "@/atoms/countAtom";
import { useAtom } from "jotai";

export default function HomePage() {
  const [count, setCount] = useAtom(countAtom);
  const [doubleCounter] = useAtom(doubleCountAtom);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className=" border border-amber-100 p-4 rounded-full m-2 text-xl font-bold">
        {count}
      </p>
      <p className=" border border-amber-100 p-4 rounded-full m-2 text-xl font-bold">
        {doubleCounter}
      </p>
      <div>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button className="btn" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}
