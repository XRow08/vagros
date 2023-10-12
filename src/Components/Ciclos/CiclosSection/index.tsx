import type { ICiclo } from "@/interfaces";
import CicleCard from "../CicleCard";

export default function CiclosSection({ cicles }: { cicles: ICiclo[] }) {
  return (
    <div className="flex flex-col items-center gap-5 bg-white w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
        {cicles.map((item, index) => {
          return <CicleCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
