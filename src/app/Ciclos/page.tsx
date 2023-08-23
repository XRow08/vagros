import BannerCiclos from "@/Components/BannerCiclos";
import CiclosSection from "@/Components/CiclosSection";

export default function Ciclos() {
  return (
    <div className="flex flex-col gap-28">
      <div className="mt-[150px]">
        <BannerCiclos />
      </div>
      <div className="py-20 bg-white">
        <CiclosSection />
      </div>
    </div>
  );
}
