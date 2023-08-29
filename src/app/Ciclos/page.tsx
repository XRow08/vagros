import BannerCiclos from "@/Components/BannerCiclos";
import CiclosSection from "@/Components/CiclosSection";

export default function Ciclos() {
  return (
    <div className="flex flex-col gap-28 w-full">
      <div className="mt-[150px]">
        <BannerCiclos />
      </div>
      <div className="py-20 bg-white w-full px-[5%]">
        <CiclosSection />
      </div>
    </div>
  );
}
