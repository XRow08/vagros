import CicleCard from "../CicleCard";

export default function CiclosSection() {
  const data = [
    {
      id: "1",
      live: true,
      img: "/images/Vicon.svg",
      title: "Vagros 1 stake ciclo de produção",
      stakeBeef: "20%",
      minValue: "5.000,00",
      cycleValue: "250.000,00",
      prazo: "150",
    },
    {
      id: "2",
      live: false,
      img: "/images/Vicon.svg",
      title: "Vagros 1 stake ciclo de produção",
      stakeBeef: "20%",
      minValue: "5.000,00",
      cycleValue: "250.000,00",
      prazo: "150",
    },
    {
      id: "3",
      live: true,
      img: "/images/Vicon.svg",
      title: "Vagros 1 stake ciclo de produção",
      stakeBeef: "20%",
      minValue: "5.000,00",
      cycleValue: "250.000,00",
      prazo: "150",
    },
    {
      id: "4",
      live: false,
      img: "/images/Vicon.svg",
      title: "Vagros 1 stake ciclo de produção",
      stakeBeef: "20%",
      minValue: "5.000,00",
      cycleValue: "250.000,00",
      prazo: "150",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-5 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {data.map((item, index) => {
          return <CicleCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
