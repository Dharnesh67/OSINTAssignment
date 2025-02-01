import Image from "next/image";
import { Header } from "@/components/Header";
import UI  from "@/components/UI";
export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <Header />
        <UI/>
      </div>
    </>
  );
}
