import Verificado from "@/Components/Icons/Verificado";

export default function PerfilAtualizado(){
  return(
    <div className="flex items-center gap-5 bg-black bg-opacity-20 w-[400px] border-l-[3px] border-[#05FF00] p-2 pl-4 py-4 rounded-r-md">
      <div className="flex items-center justify-center bg-[#05FF00] rounded-[50%] w-[50px] h-[50px]">
        <Verificado></Verificado>
      </div>

      <div>
        <h1 className="text-white font-Archivo text-18 font-bold tracking-wider leading-normal letter-spacing-0.9">Êxito</h1>
        <h1 className="text-white font-Archivo text-16 font-normal tracking-wide leading-normal letter-spacing-0.8">Perfil Atualizado</h1>
      </div>

    </div>
  )
}