"use client";
import { countAtom } from "@/atoms";
import { useAtom } from "jotai";

export default function HomePage() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className=" border border-amber-100 p-4 rounded-full m-2 text-xl font-bold">
        {count}
      </p>
      <div>
        <button className="btn" onClick={() => setCount((prev) => prev + 1)}>
          Increment
        </button>
        <button className="btn" onClick={() => setCount((prev) => prev - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}
