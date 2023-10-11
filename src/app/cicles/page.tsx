"use client";
import BannerCiclos from "@/Components/BannerCiclos";
import CiclosSection from "@/Components/Ciclos/CiclosSection";
import { StorageHelper } from "@/helpers";
import { CiclesService } from "@/services/cicles.service";
import { useCicleStore } from "@/stores/cicleStore";
import { useEffect } from "react";

export default function CiclesPage() {
  const { setCicles, cicles } = useCicleStore();
  
  useEffect(() => {
    async function onFunc() {
      try {
        const data = await CiclesService.getAllCicles();
        StorageHelper.setItem("cicles", data);
        setCicles(data);
      } catch (error) {
        console.log(error);
      }
    }
    onFunc();
  }, []);

  return (
    <div className="flex flex-col gap-28 w-full bg-black">
      <div className="mt-[150px]">
        <BannerCiclos />
      </div>
      <div className="py-20 bg-white w-full px-[10%]">
        <CiclosSection cicles={cicles} />
      </div>
    </div>
  );
}
