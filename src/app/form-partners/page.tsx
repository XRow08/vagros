"use client";
import FormInfoPessoal from "@/Components/FormInfoPessoal";
import FormRebanho from "@/Components/FormRebanho";
import { useState } from "react";

export default function FormParceiros() {
  const [state, setState] = useState<number>(0);

  function RenderModals() {
    switch (state) {
      case 0:
        return <FormInfoPessoal setState={() => setState(1)} />;
      case 1:
        return <FormRebanho />;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen inset-0 bg-[url('/images/FormParceirosBg.png')] bg-cover bg-center backdrop-filter backdrop-blur-md">
      <RenderModals />
    </div>
  );
}
