import { useCicleStore } from "@/stores/cicleStore";
import CiclosViewInfoItem from "../CiclosViewInfoItem";
import { useGetUSDT } from "@/hooks/useGetUSDT";

export default function CiclosViewInfo() {
  const { selectedCicle: item } = useCicleStore();
  const { price } = useGetUSDT();
  const curValue = Number(item?.curValue).toLocaleString("pt-BR");
  const curValueBRL = (Number(item?.curValue) * price).toLocaleString("pt-BR");

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
      value: `${curValue} /`,
    },
    {
      title: "BRL",
      value: curValueBRL,
    },
    {
      title: "Prazo",
      value: `150 dias`,
    },
    {
      title: "Stake beef",
      value: `${item?.stakeBeef}% APY`,
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
