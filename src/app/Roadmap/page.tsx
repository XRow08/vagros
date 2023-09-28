import PurpleWord from "@/Components/PurpleWord";
import { RoadMapMobile } from "@/Components/RoadMapMobile";
import YellowWord from "@/Components/YellowWord";

export default function Roadmap() {
  return (
    <>
      <RoadMapMobile />
      <div className="hidden lg:flex justify-center w-full h-full bg-[url('/images/ROADMAPbg.png')] bg-cover bg-center">
        <div className="flex flex-col items-center gap-6 h-full mt-[120px]">
          <h1 className="text-white font-Archivo text-4xl pb-[10px] font-bold leading-9 tracking-wide letter-spacing-2">
            ROAD MAP
          </h1>

          <div className="flex flex-col gap-10 items-center justify-center w-full relative">
            <img
              src="/images/Roadmap1.png"
              className="absolute top-20"
              alt=""
            />

            <div className="flex w-full gap-[200px] ">
              <div className="flex flex-col items-center border-[1px] w-[500px] h-[230px] border-[#FFD809] transition-all duration-300 ease-in-out hover:-translate-y-2 bg-[#212121] rounded-md px-4 py-2">
                <h1>
                  <YellowWord>2023</YellowWord>
                </h1>
                <div className="flex flex-col gap-4 w-full h-full">
                  <h1 className="text-white font-Archivo text-xl font-bold tracking-wide leading-normal letter-spacing-1.25">
                    2 ° TRIMESTRE
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · CONSOLIDAÇÃO DA EQUIPE
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · ESTRUTURAÇÃO JURÍDICA DO PROJETO
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · RELATÓRIO CVM DE OFERTA PRIVADA
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · DESENVOLVIMENTO SMART CONTRACT ERC-1155
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · ESTRUTURA DO SITE E DESENVOLVIMENTO
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center border-[1px] w-[500px] h-[230px] border-[#FFD809] transition-all duration-300 ease-in-out hover:-translate-y-2 mt-[100px] bg-[#212121] rounded-md px-4 py-2">
                <h1>
                  <YellowWord>2023</YellowWord>
                </h1>
                <div className="flex flex-col gap-4 w-full h-full">
                  <h1 className="text-white font-Archivo text-xl font-bold tracking-wide leading-normal letter-spacing-1.25">
                    3 ° TRIMESTRE
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · BUSINESS PLAN CAPTAÇÃO DE RECUROS
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · INTEGRAÇÃO DE CONFINAMENTOS PARCEIROS
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · INTEGRAÇÃO PRODUTOR RURAL
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · INÍCIO MVP 1º LEILÃO EM BLOCKCHAIN
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full gap-[200px] ">
              <div className="flex flex-col items-center border-[1px] w-[500px] h-[230px] border-[#FFD809] transition-all duration-300 ease-in-out hover:-translate-y-2 bg-[#212121] rounded-md px-4 py-2">
                <h1>
                  <YellowWord>2023</YellowWord>
                </h1>
                <div className="flex flex-col gap-4 w-full h-full">
                  <h1 className="text-white font-Archivo text-xl font-bold tracking-wide leading-normal letter-spacing-1.25">
                    4 ° TRIMESTRE
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · INÍCIO MVP 1° CICLO
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · INÍCIO MVP 2° CICLO
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · MARKETING E ATUALIZAÇÃO DO CICLO
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · FEEDBACK DE PRODUTORES USUÁRIOS E PARCEIROS
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center border-[1px] w-[500px] h-[230px] border-[#FFD809] transition-all duration-300 ease-in-out hover:-translate-y-2 mt-[100px] bg-[#212121] rounded-md px-4 py-2">
                <h1>
                  <YellowWord>2024</YellowWord>
                </h1>
                <div className="flex flex-col gap-4 w-full h-full">
                  <h1 className="text-white font-Archivo text-xl font-bold tracking-wide leading-normal letter-spacing-1.25">
                    1 ° TRIMESTRE
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · ATUALIZAÇÃO E MELHORIAS NA PLATAFORMA
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · FECHAMENTO DOS CICLOS E LIQUIDEZ
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · VALIDAÇÃO E DIVULGAÇÃO DO MVP
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · PITCH COM FRIGORÍFICOS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full gap-[200px] ">
              <div className="flex flex-col items-center border-[1px] w-[500px] h-[230px] border-[#FFD809] transition-all duration-300 ease-in-out hover:-translate-y-2 bg-[#212121] rounded-md px-4 py-2">
                <h1>
                  <YellowWord>2024</YellowWord>
                </h1>
                <div className="flex flex-col gap-4 w-full h-full">
                  <h1 className="text-white font-Archivo text-xl font-bold tracking-wide leading-normal letter-spacing-1.25">
                    2 ° TRIMESTRE
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · EXPANSÃO DA EQUIPE VAGROS
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · 2º RELATÓRIO CVM OFERTA PÚBLICA
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · INÍCIO 3° CICLO
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · MARKETING DIVULGAÇÃO EM EVENTOS
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center border-[1px] w-[500px] h-[230px] border-[#FFD809] transition-all duration-300 ease-in-out hover:-translate-y-2 mt-[100px] bg-[#212121] rounded-md px-4 py-2">
                <h1>
                  <YellowWord>2024</YellowWord>
                </h1>
                <div className="flex flex-col gap-4 w-full h-full">
                  <h1 className="text-white font-Archivo text-xl font-bold tracking-wide leading-normal letter-spacing-1.25">
                    3 ° TRIMESTRE
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · EXPANSÃO DA COMUNIDADE VAGROS
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · TOKEN NATIVO VAGROS ERC-20
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · RELATÓRIO AUDITORIA DO TOKEN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pb-[50px] justify-center w-full relative">
            <img
              src="/images/Roadmap2.png"
              className="absolute top-20"
              alt=""
            />

            <div className="flex w-full gap-[200px] ">
              <div className="flex flex-col items-center border-[1px] w-[500px] h-[230px] border-[#7000FF] transition-all duration-300 ease-in-out hover:-translate-y-2 bg-[#212121] rounded-md px-4 py-2">
                <h1>
                  <PurpleWord>2024</PurpleWord>
                </h1>
                <div className="flex flex-col gap-4 w-full h-full">
                  <h1 className="text-white font-Archivo text-xl font-bold tracking-wide leading-normal letter-spacing-1.25">
                    4 ° TRIMESTRE
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · COINMARKETCAP/COINGECKO
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · LISTAGEM DEX / CORRETORAS
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · INTEGRAÇÃO DE FRIGORÍFICOS PARCEIROS
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · AIRDROP PARA COMUNIDADE
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center border-[1px] w-[500px] h-[230px] border-[#7000FF] transition-all duration-300 ease-in-out hover:-translate-y-2 mt-[100px] bg-[#212121] rounded-md px-4 py-2">
                <h1>
                  <PurpleWord>2025</PurpleWord>
                </h1>
                <div className="flex flex-col gap-4 w-full h-full">
                  <h1 className="text-white font-Archivo text-xl font-bold tracking-wide leading-normal letter-spacing-1.25">
                    1 ° TRIMESTRE
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · INTEGRAÇÃO DE FRIGORÍFICOS PARCEIROS
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · MARKETPLACE DESCONTOS EM FRIGORÍFICOS
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · APP NFC DE PAGAMENTO UTILIZANDO TOKENS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-[200px] ">
              <div className="flex flex-col items-center border-[1px] w-[500px] h-[230px] border-[#7000FF] transition-all duration-300 ease-in-out hover:-translate-y-2 bg-[#212121] rounded-md px-4 py-2">
                <h1>
                  <PurpleWord>2025</PurpleWord>
                </h1>
                <div className="flex flex-col gap-4 w-full h-full">
                  <h1 className="text-white font-Archivo text-xl font-bold tracking-wide leading-normal letter-spacing-1.25">
                    2 ° TRIMESTRE
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · PLATAFORMA DE NFT PARA COMUNIDADE
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · INTEGRAÇÃO COM INTELIGÊNCIA ARTIFICIAL
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · PROJETO SFP - SEJA FIEL NO POUCO
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center border-[1px] w-[500px] h-[230px] border-[#7000FF] transition-all duration-300 ease-in-out hover:-translate-y-2 mt-[100px] bg-[#212121] rounded-md px-4 py-2">
                <h1>
                  <PurpleWord>2026</PurpleWord>
                </h1>
                <div className="flex flex-col gap-4 w-full h-full">
                  <h1 className="text-white font-Archivo text-xl font-bold tracking-wide leading-normal letter-spacing-1.25">
                    1 ° TRIMESTRE
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · AQUISIÇÃO DE TERRENO
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · PROJETO CONFINAMENTO VAGROS BIODIGESTOR
                    </p>
                    <p className="text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-0.8">
                      · EXPANSÃO NA PRODUÇÃO DE ALIMENTOS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
