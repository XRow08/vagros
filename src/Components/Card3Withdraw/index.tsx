import Link from "next/link";
import BtnAmarelo from "../BtnAmarelo";
import Polygon from "../Icons/Polygon";
import Wallet from "../Icons/Wallet";

export default function Card3Withdraw() {
  return (
    <div className="flex flex-col  bg-white w-full min-w-[280px] h-full rounded-lg  shadow-2xl ">
      <div className="flex flex-col  text-black w-full h-full shadow-2xl">

        <div className="w-full relative">
          <img src="/images/Vicon.svg" className="absolute right-2 p-1 pt-2" alt="" />
          <div><img src="/images/vaquinha2.png" className="max-h-[130px] w-full cover rounded-t-lg" alt="" /></div>
        </div>

        <div className="flex items-center justify-between py-1 mr-[5%] ml-[5%]">
          <h1 className="text-black font-Archivo font-bold text-18 leading-normal tracking-wide">Nelore#2540</h1>
          <div>
            <Polygon/>
          </div>
        </div>

        <div className="flex items-center justify-between mr-[5%] ml-[5%]">

          <div className="flex items-center justify-between shadow-xl my-2 border-gray-100 rounded-md p-1 w-[40%]">
            <h1 className="text-black font-Archivo text-14 font-normal leading-normal tracking-wider">USDT</h1>
            <h2 className="text-black font-Archivo text-16 font-normal leading-normal tracking-wider">$20</h2>
          </div>

          <div className="flex items-center justify-between shadow-xl my-2 border-gray-100 rounded-md p-1 w-[40%]">
            <h1 className="text-black font-Archivo text-14 font-normal leading-normal tracking-wider">BRL</h1>
            <h2 className="text-black font-Archivo text-16 font-normal leading-normal tracking-wider">R$100</h2>
          </div>

        </div>

        <div className="flex gap-2 items-center mr-[7%] ml-[7%] mb-[5px]">
          <Wallet/>
          <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">cro41.....9012</h1>
        </div>

        <Link href="/withdrawal">
          <div className="h-[50px] rounded-b-md">
          <BtnAmarelo><h1 className="text-black font-Archivo font-bold text-18 leading-normal tracking-wide">WITHDRAW</h1></BtnAmarelo>
          </div>
        </Link>
      </div>
    </div>
  );
}
