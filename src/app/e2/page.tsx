"use client";
import { loadableInfoAtom } from "@/atoms/userAtom";
import { useAtom } from "jotai";

export default function PageName() {
  const [user] = useAtom(loadableInfoAtom);
  if (user.state === "loading") return <div>Loading...</div>;
  if (user.state === "hasError") return <div>Error Occured</div>;

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p>name: {user.data.name}</p>
      <p>email: {user.data.email}</p>
    </div>
  );
}
