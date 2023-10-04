import type { INFT } from "@/interfaces/INFT";
import Polygon from "../Icons/Polygon";
import Wallet from "../Icons/Wallet";
import { TLogoIcon } from "../Icons/TLogoIcon";
import { BrasilIcon } from "../Icons/BrasilIcon";

export default function NFTCard({ item }: { item: INFT }) {
  return (
    <a
      href={`/nft/${item.id}`}
      className="flex flex-col bg-white w-full rounded-lg overflow-hidden h-full shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer"
    >
      <div className="flex flex-col text-black w-full shadow-2x">
        <div className="w-full relative h-[218px]">
          <img
            src="/images/Vicon.svg"
            className="absolute right-2 p-1 pt-2"
            alt="Vicon"
          />

          <img
            src="/images/vaquinha2.png"
            className="h-full w-full cover rounded-t-lg"
            alt="vaquinha2"
          />
        </div>

        <div className="flex items-center justify-between py-1 mx-[5%] pt-2">
          <h1 className="text-black font-bold text-lg leading-normal tracking-wide">
            {item.nftName}
          </h1>
          <div>
            <Polygon />
          </div>
        </div>

        <div className="flex items-center mx-[5%] justify-between gap-2">
          <div className="flex items-center justify-between shadow-xl border-[1px] border-gray-100 rounded-md my-2 p-1 gap-4">
            <h1 className="text-black text-14 font-normal leading-normal tracking-wider flex items-center gap-1">
              USDT
              <TLogoIcon />
            </h1>
            <h2 className="text-black text-16 font-normal leading-normal tracking-wider">
              $ {item.priceUsdt}
            </h2>
          </div>

          <div className="flex items-center justify-between shadow-xl border-[1px] border-gray-100 rounded-md my-2 p-1 gap-4">
            <h1 className="text-black text-14 font-normal leading-normal tracking-wider flex items-center gap-1">
              BRL
              <BrasilIcon />
            </h1>
            <h2 className="text-black text-16 font-normal leading-normal tracking-wider">
              R${item.priceBrl}
            </h2>
          </div>
        </div>

        <div className="flex gap-2 items-center mx-[7%] mb-[5px] pb-2">
          <Wallet />
          <h1 className="text-black text-base font-normal leading-normal tracking-wider">
            {item.address}
          </h1>
        </div>

        <div className="flex flex-col bg-gradient-to-r from-[#7000FF] to-[#B338FF]">
          <div className="flex items-center gap-2 justify-center px-10 py-1">
            <div className="flex flex-col items-center shadow-2xl shadow-black bg-black rounded-md w-[30%] bg-opacity-40 backdrop-blur-md">
              <h1 className="text-white text-base font-normal tracking-wider">
                {item.date.days}
              </h1>
              <h2 className="text-white text-xs font-normal tracking-wider">
                dias
              </h2>
            </div>
            <div className="flex flex-col items-center shadow-2xl shadow-black bg-black rounded-md w-[30%] bg-opacity-40 backdrop-blur-md">
              <h1 className="text-white text-base font-normal tracking-wider">
                {item.date.hours}
              </h1>
              <h2 className="text-white text-xs font-normal tracking-wider">
                horas
              </h2>
            </div>
            <div className="flex flex-col items-center shadow-2xl shadow-black bg-black rounded-md w-[30%] bg-opacity-40 backdrop-blur-md">
              <h1 className="text-white text-base font-normal tracking-wider">
                {item.date.mins}
              </h1>
              <h2 className="text-white text-xs font-normal tracking-wider">
                min
              </h2>
            </div>
            <div className="flex flex-col items-center shadow-2xl shadow-black bg-black rounded-md w-[30%] bg-opacity-40 backdrop-blur-md">
              <h1 className="text-white text-base font-normal tracking-wider">
                {item.date.segs}
              </h1>
              <h2 className="text-white text-xs font-normal tracking-wider">
                seg
              </h2>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
