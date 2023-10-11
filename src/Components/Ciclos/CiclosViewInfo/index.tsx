import { useCicleStore } from "@/stores/cicleStore";
import CiclosViewInfoItem from "../CiclosViewInfoItem";
import { useGetUSDT } from "@/hooks/useGetUSDT";
import { DateFormat } from "@/helpers/DateFormat";
import { useCountDown } from "@/hooks/useCountDown";

export default function CiclosViewInfo() {
  const { selectedCicle: item } = useCicleStore();
  const { price } = useGetUSDT();
  const { isoToTimestamp, secToDays } = DateFormat;
  const timestamp = isoToTimestamp(item?.closingDate!);
  const timer = useCountDown(timestamp);
  const days = secToDays(timer!).toFixed();
  const minValue = Number(item?.minValue).toLocaleString("pt-BR");
  const minValueBRL = (Number(item?.minValue) * price).toLocaleString("pt-BR");

  const data = [
    {
      title: "Volume total",
      value: "10.000",
    },
    {
      title: "Proprietários",
      value: "430",
    },
    {
      title: "USDT",
      value: `${minValue} /`,
    },
    {
      title: "BRL",
      value: minValueBRL,
    },
    {
      title: "Prazo",
      value: `${days} dias`,
    },
    {
      title: "Stake beef",
      value: `${item?.stakeBeef} APY`,
    },
  ];

  return (
    <div className="flex flex-wrap gap-1 lg:gap-4 mt-2 w-full">
      {data.slice(0, 6).map((item, index) => {
        return <CiclosViewInfoItem key={index} item={item} />;
      })}
    </div>
  );
}