import CiclosViewInfoItem from "../CiclosViewInfoItem";

export default function CiclosViewInfo() {
  const data = [
    {
      title: "Volume total",
      value: "10.000"
    },
    {
      title: "Proprietários",
      value: "430"
    },
    {
      title: "Preço mínimo",
      value: "R$ 2.000,00"
    },
    {
      title: "Prazo",
      value: "150 Dias"
    },
    {
      title: "Stake beef",
      value: " 20% APY"
    }
  ]


  return (
    <div className="flex gap-1 w-full">
      {data.slice(0, 6).map((item, index) => {
        return <CiclosViewInfoItem key={index} item={item} />;
      })}
    </div>
  );
}
