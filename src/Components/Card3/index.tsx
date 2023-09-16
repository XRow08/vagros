import { ICard3 } from "@/interfaces/ICard3";
import Polygon from "../Icons/Polygon";
import Wallet from "../Icons/Wallet";
import { TLogoIcon } from "../Icons/TLogoIcon";
import { BrasilIcon } from "../Icons/BrasilIcon";

export default function Card3({ item }: { item: ICard3 }) {
  return (
    <div className="flex flex-col  bg-white w-full min-w-[280px] h-full rounded-lg  shadow-2xl ">
      <div className="flex flex-col  text-black w-full h-full shadow-2xl">
        <div className="w-full relative">
          <img
            src="/images/Vicon.svg"
            className="absolute right-2 p-1 pt-2"
            alt=""
          />

          <img
            src="/images/vaquinha2.png"
            className="max-h-[130px] w-full cover rounded-t-lg"
            alt=""
          />
        </div>

        <div className="flex items-center justify-between py-1 mr-[5%] ml-[5%]">
          <h1 className="text-black font-bold text-lg leading-normal tracking-wide">
            {item.nftName}
          </h1>
          <div>
            <Polygon />
          </div>
        </div>

        <div className="flex items-center justify-between mr-[5%] ml-[5%]">
          <div className="flex items-center justify-between shadow-xl border-[1px] border-gray-100 rounded-md my-2 p-1 w-[40%]">
            <h1 className="text-black text-14 font-normal leading-normal tracking-wider flex items-center">
              USDT
              <TLogoIcon />
            </h1>
            <h2 className="text-black text-16 font-normal leading-normal tracking-wider">
              $ {item.priceUsdt}
            </h2>
          </div>

          <div className="flex items-center justify-between shadow-xl border-[1px] border-gray-100 rounded-md  my-2 p-1 w-[40%]">
            <h1 className="text-black text-14 font-normal leading-normal tracking-wider flex items-center">
              BRL
              <BrasilIcon />
            </h1>
            <h2 className="text-black text-16 font-normal leading-normal tracking-wider">
              R$ {item.priceBrl}
            </h2>
          </div>
        </div>

        <div className="flex gap-2 items-center mr-[7%] ml-[7%] mb-[5px]">
          <Wallet />
          <h1 className="text-black text-base font-normal leading-normal tracking-wider">
            {item.address}
          </h1>
        </div>

        <div className="flex flex-col rounded-b-lg bg-gradient-to-r from-[#7000FF] to-[#B338FF]">
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
    </div>
  );
}
