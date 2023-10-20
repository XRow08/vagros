import type { INFT } from "@/interfaces/INFT";
import Polygon from "../Icons/Polygon";
import Wallet from "../Icons/Wallet";
import { TLogoIcon } from "../Icons/TLogoIcon";
import { BrasilIcon } from "../Icons/BrasilIcon";
import { DateRemain } from "./DateRemain";
import { useCicleStore } from "@/stores/cicleStore";
import { AddressUtils } from "@/helpers/AddressUtils";
import { useGetUSDT } from "@/hooks/useGetUSDT";

export default function NFTCard({
  item,
  index,
}: {
  item: INFT;
  index: number;
}) {
  const { selectedCicle } = useCicleStore();
  const { price } = useGetUSDT();
  const address = AddressUtils.hideAddress(item.owner);
  const totalValue = Number(item.totalAmount).toLocaleString("pt-BR");
  const totalValueBRL = (Number(item.totalAmount) * price).toLocaleString(
    "pt-BR"
  );
  return (
    <a
      href={`/nft/${item.owner}`}
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
            src={selectedCicle?.thumbnail}
            className="h-full w-full object-cover rounded-t-lg"
            draggable={false}
            alt="vaquinha2"
          />
        </div>

        <div className="flex items-center justify-between py-1 mx-[5%] pt-2">
          <h1 className="text-black font-bold text-lg leading-normal tracking-wide">
            Nelore #{index}
          </h1>
          <div>
            <Polygon />
          </div>
        </div>

        <div className="flex items-center mx-[5%] justify-between gap-2">
          <div className="flex flex-col items-start justify-between shadow-xl border-[1px] border-gray-100 rounded-md my-2 p-2 gap-2 w-full">
            <h1 className="text-black text-14 font-normal leading-normal tracking-wider flex items-center gap-1">
              USDT
              <TLogoIcon />
            </h1>
            <h2 className="text-black text-16 font-normal leading-normal tracking-wider">
              $ {totalValue}
            </h2>
          </div>

          <div className="flex flex-col items-start justify-between shadow-xl border-[1px] border-gray-100 rounded-md my-2 p-2 gap-2 w-full">
            <h1 className="text-black text-14 font-normal leading-normal tracking-wider flex items-center gap-1">
              BRL
              <BrasilIcon />
            </h1>
            <h2 className="text-black text-16 font-normal leading-normal tracking-wider">
              R$ {totalValueBRL}
            </h2>
          </div>
        </div>

        <div className="flex gap-2 items-center mx-[7%] mb-[5px] pb-2">
          <Wallet />
          <h1 className="text-black text-base font-normal leading-normal tracking-wider">
            {address}
          </h1>
        </div>
        <DateRemain date={selectedCicle?.closingDate!} />
      </div>
    </a>
  );
}
