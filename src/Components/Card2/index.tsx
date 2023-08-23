import Title from "../Title";
import Text from "../Text";

export default function Card2({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <div className="flex flex-col gap-3 bg-[#212121] shadow-lg max-w-[400px] max-h-[224px] rounded-lg p-3">
            <div className="flex items-center justify-between">
                <h1 className="text-white font-archivo text-base font-light leading-normal tracking-wider">PARCEIROS</h1>
                <span>{children}</span>
            </div>
            <h1 className="text-white font-archivo text-2xl font-bold tracking-wide">1- NOVOS PARCEIROS</h1>
            <Text>Produtor ou corretor rural com interesse em leiloar seu rebanho utilizando nosso programa de ciclos, deverá enviar o formulário seguindo as especificações solicitadas através da área do produtor.</Text>
        </div>
    )
}