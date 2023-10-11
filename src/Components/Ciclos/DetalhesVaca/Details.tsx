"use client";
import { useState } from "react";
import ArrowDown from "../../Icons/ArrowDown";
import IdCard from "../../Icons/IdCard";
import Books from "../../Icons/Books";
import { IDetails } from "@/interfaces/IDetails";

export function Details({ item }: { item: IDetails }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${
        !open ? "h-[300px]" : "h-12"
      } flex flex-col absolute left-0 top-0 items-center justify-between mt-[15px] p-3 px-4 w-full transition-all duration-300 ease-in-out overflow-hidden bg-white rounded-lg shadow-2xl`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <IdCard />
          <h1 className="text-black font-Archivo text-18 font-semibold leading-normal">
            Detalhes
          </h1>
        </div>
        <div className={open ? "rotate-180" : ""}>
          <ArrowDown />
        </div>
      </div>

      <span className="w-full h-full">
        {!open ? (
          <div className="grid grid-cols-2 w-full h-full mt-[20px]">
            <div>
              <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">
                Contract address
              </h1>
              <div className="flex gap-2">
                <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">
                  {item.contractAddress}
                </h1>
                <Books />
              </div>
            </div>

            <div>
              <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">
                Token ID
              </h1>
              <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">
                {item.tokenId}
              </h1>
            </div>

            <div>
              <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">
                Token standard
              </h1>
              <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">
                {item.tokenStandart}
              </h1>
            </div>

            <div>
              <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">
                Blockchain
              </h1>
              <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">
                {item.blockchain}
              </h1>
            </div>

            <div>
              <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">
                Token supply
              </h1>
              <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">
                {item.totalSupply}
              </h1>
            </div>

            <div>
              <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">
                Creator
              </h1>
              <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">
                {item.creator}
              </h1>
            </div>
          </div>
        ) : (
          ""
        )}
      </span>
    </div>
  );
}
