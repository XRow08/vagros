"use client";
import Banner from "@/Components/Banner";
import HomeFirstSection from "@/Components/HomeFirstSection";
import HomeSecondSection from "@/Components/HomeSecondSection";
import { StorageHelper } from "@/helpers";
import { CiclesService } from "@/services/cicles.service";
import { useCicleStore } from "@/stores/cicleStore";
import { useEffect } from "react";

export default function Home() {
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
    <>
      <Banner />
      <HomeFirstSection cicles={cicles} />
      <HomeSecondSection />
    </>
  );
}
