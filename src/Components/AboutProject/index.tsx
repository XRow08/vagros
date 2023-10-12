import { useGetUSDT } from "@/hooks/useGetUSDT";
import { useCicleStore } from "@/stores/cicleStore";

export default function AboutProject({ video }: { video: string }) {
  const videoID = video?.split("=")[1];
  const { price } = useGetUSDT();
  const { selectedCicle } = useCicleStore();
  const totalValue = Number(selectedCicle?.totalValue).toLocaleString("pt-BR");
  const totalValueBRL = (
    Number(selectedCicle?.totalValue) * price
  ).toLocaleString("pt-BR");
  const minValue = Number(selectedCicle?.minValue).toLocaleString("pt-BR");
  const minValueBRL = (Number(selectedCicle?.minValue) * price).toLocaleString(
    "pt-BR"
  );

  return (
    <div className="flex flex-col items-center text-black pt-[10rem] w-full">
      <div className="flex flex-col w-full gap-5">
        <h1 className="text-black font-Archivo text-2xl font-bold leading-normal tracking-wider">
          Sobre o projeto
        </h1>

        <div className="flex gap-28 w-full shadow-lg  px-20 rounded-md">
          <div className="flex flex-col items-center rounded-b-sm border-b-[4px] border-[#B338FF] p-4 cursor-pointer w-[15%] h-[60px]">
            <h1 className="text-black font-Archivo text-20 font-normal leading-normal">
              Ciclo
            </h1>
          </div>
          <div className="flex flex-col items-center hover:rounded-b-sm hover:border-b-[4px] hover:border-[#B338FF] p-4 cursor-pointer w-[15%] h-[60px]">
            <h1 className="text-black font-Archivo text-20 font-normal leading-normal">
              Confinamento
            </h1>
          </div>
          <div className="flex flex-col items-center hover:rounded-b-sm hover:border-b-[4px] hover:border-[#B338FF] p-4 cursor-pointer w-[15%] h-[60px]">
            <h1 className="text-black font-Archivo text-20 font-normal leading-normal">
              Documentos
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-[20px] mb-[50px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">
              Apresentação do rebanho:
            </h1>

            <div className="flex w-[60%] h-[500px] shadow-lg rounded-lg">
              <iframe
                id="ytplayer"
                allowFullScreen
                className="h-full w-full object-cover rounded-xl"
                src={`https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&playlist=${videoID}`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 text-black">
            <h1 className="text-20 font-bold leading-normal tracking-wider">
              Resumo do projeto:
            </h1>
            <div className="flex flex-col gap-2">
              <p className="text-18 font-normal leading-normal tracking-wide">
                VAGROS PEC INTERMEDIACOES LTDA CNPJ : 51.420.132/0001-03
                disponibiliza a oferta de Leilão com Smart Contract na Rede
                Blockchain Polygon - Vagros: 1° Ciclo de Produção Oportunidade
                imperdível! Apresentamos o 1° Ciclo de Produção Vagros, uma
                oferta exclusiva de gado nelore com 100 animais machos,
                totalizando 1.200@, com uma média de 17 meses de idade. Esses
                animais de qualidade excepcional estão localizados na Fazenda
                Nova Esperança, na região de Goiás, a apenas 45 km de Goianésia
                – GO.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-20 font-bold leading-normal tracking-wider">
              Detalhes do Lote:
            </h1>
            <ul className="flex flex-col gap-1 list-disc ml-10">
              <li className="text-18 font-normal leading-normal tracking-wide">
                <strong>Produtor: </strong> José Antonio Silva
              </li>
              <li className="text-18 font-normal leading-normal tracking-wide">
                <strong>Contrato: </strong>
                0x5c13233164c648760E5562EddE782Faa9463ffdf
              </li>
              <li className="text-18 font-normal leading-normal tracking-wide">
                <strong>Valor Total do Lote: </strong> USDT {totalValue}
                (equivalente a R$ {totalValueBRL})
              </li>
              <li className="text-18 font-normal leading-normal tracking-wide">
                <strong>Valor Mínimo por Participação: </strong> USDT {minValue}{" "}
                (R$ {minValueBRL} BRL)
              </li>
            </ul>
          </div>
          <h1 className="text-20 flex items-center gap-2 font-bold leading-normal tracking-wider">
            Duração do Ciclo:
            <p className="text-18 font-normal leading-normal tracking-wide">
              150 dias
            </p>
          </h1>
          <h1 className="text-20 flex items-center gap-2 font-bold leading-normal tracking-wider">
            Produção Alvo:
            <p className="text-18 font-normal leading-normal tracking-wide">
              1.900@
            </p>
          </h1>
          <h1 className="text-20 flex items-center gap-2 font-bold leading-normal tracking-wider">
            Meta de Stake Beef:
            <p className="text-18 font-normal leading-normal tracking-wide">
              20% APY
            </p>
          </h1>
          <p className="text-18 font-normal leading-normal tracking-wide">
            Esta oferta estará disponível exclusivamente para a comunidade
            Vagros durante 7 dias. Não perca a oportunidade de fazer parte desta
            experiência e contribuir com a produção de alimentos para o mundo.
          </p>
        </div>
      </div>
    </div>
  );
}
