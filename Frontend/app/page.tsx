"use client";
import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/Header";
import UI from "@/components/UI";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [isUser, setIsUser] = useState(false);
  const [input, setInput] = useState("");

  return (
    <>
      <div className="text-white">
        <Header />
        {!isUser ? (
          <div className="form">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="text-4xl font-bold">Welcome to the Assignment</div>
              <div className="text-2xl font-bold">Enter your username</div>
              <div className="flex gap-4">
                <Input
                  placeholder="Username"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
                <button
                  className="bg-blue-500 px-4 py-2 rounded-lg"
                  onClick={() => {
                    setIsUser(true);
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        ) : (
          <UI data={input} />
        )}
      </div>
    </>
  );
}