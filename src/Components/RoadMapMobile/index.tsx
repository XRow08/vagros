import { RoadMapCard } from "../RoadMapCard";
import Title from "../Title";

export function RoadMapMobile() {
  return (
    <div className="flex lg:hidden flex-col items-center mt-32 bg-[url('/images/roadmap_mobile.png')] bg-cover p-4 space-y-8">
      <Title>ROADMAP</Title>
      <RoadMapCard
        title={"2 ° TRIMESTRE"}
        text1={"CONSOLIDAÇÃO DA EQUIPE"}
        text2={"ESTRUTURAÇÃO JURÍDICA DO PROJETO"}
        text3={"RELATÓRIO CVM DE OFERTA PRIVADA"}
        text4={"DESENVOLVIMENTO SMART CONTRACT ERC-1155"}
        text5={"ESTRUTURA DO SITE E DESENVOLVIMENTO"}
        year={"2023"}
        color={"yellow"}
      />
      <RoadMapCard
        title={"3 ° TRIMESTRE"}
        text1={"BUSINESS PLAN CAPTAÇÃO DE RECUROS"}
        text2={"INTEGRAÇÃO DE CONFINAMENTOS PARCEIROS"}
        text3={"INTEGRAÇÃO PRODUTOR RURAL"}
        text4={"INÍCIO MVP 1º LEILÃO EM BLOCKCHAIN"}
        year={"2023"}
        color={"yellow"}
      />
      <RoadMapCard
        title={"4 ° TRIMESTRE"}
        text1={"INÍCIO MVP 1° CICLO"}
        text2={"INÍCIO MVP 2° CICLO"}
        text3={"MARKETING E ATUALIZAÇÃO DO CICLO"}
        text4={"FEEDBACK DE PRODUTORES USUÁRIOS E PARCEIROS"}
        year={"2023"}
        color={"yellow"}
      />
      <RoadMapCard
        title={"1 ° TRIMESTRE"}
        text1={"ATUALIZAÇÃO E MELHORIAS NA PLATAFORMA"}
        text2={"FECHAMENTO DOS CICLOS E LIQUIDEZ"}
        text3={"VALIDAÇÃO E DIVULGAÇÃO DO MVP"}
        text4={"PITCH COM FRIGORÍFICOS"}
        year={"2024"}
        color={"yellow"}
      />
      <RoadMapCard
        title={"2 ° TRIMESTRE"}
        text1={"EXPANSÃO DA EQUIPE VAGROS"}
        text2={"2º RELATÓRIO CVM OFERTA PÚBLICA"}
        text3={"INÍCIO 3° CICLO"}
        text4={"MARKETING DIVULGAÇÃO EM EVENTOS"}
        year={"2024"}
        color={"yellow"}
      />
      <RoadMapCard
        title={"3 ° TRIMESTRE"}
        text1={"EXPANSÃO DA COMUNIDADE VAGROS"}
        text2={"TOKEN NATIVO VAGROS ERC-20"}
        text3={"RELATÓRIO AUDITORIA DO TOKEN"}
        year={"2024"}
        color={"yellow"}
      />
      <RoadMapCard
        title={"4 ° TRIMESTRE"}
        text1={"COINMARKETCAP/COINGECKO"}
        text2={"LISTAGEM DEX / CORRETORAS"}
        text3={"INTEGRAÇÃO DE FRIGORÍFICOS PARCEIROS"}
        text4={"AIRDROP PARA COMUNIDADE"}
        year={"2024"}
        color={"purple"}
      />
      <RoadMapCard
        title={"1 ° SEMESTRE"}
        text1={"INTEGRAÇÃO DE FRIGORÍFICOS PARCEIROS"}
        text2={"MARKETPLACE DESCONTOS EM FRIGORÍFICOS"}
        text3={"APP NFC DE PAGAMENTO UTILIZANDO TOKENS"}
        year={"2025"}
        color={"purple"}
      />
      <RoadMapCard
        title={"2 ° SEMESTRE"}
        text1={"PLATAFORMA DE NFT PARA COMUNIDADE"}
        text2={"INTEGRAÇÃO COM INTELIGÊNCIA ARTIFICIAL"}
        text3={"PROJETO SFP - SEJA FIEL NO POUCO"}
        year={"2025"}
        color={"purple"}
      />
      <RoadMapCard
        title={"1 ° TRIMESTRE"}
        text1={"AQUISIÇÃO DE TERRENO"}
        text2={"PROJETO CONFINAMENTO VAGROS BIODIGESTOR"}
        text3={"EXPANSÃO NA PRODUÇÃO DE ALIMENTOS"}
        year={"2026"}
        color={"purple"}
      />
    </div>
  );
}
