"use client";
import AboutProject from "@/Components/AboutProject";
import CiclosViewInfoSection from "@/Components/Ciclos/CiclosViewInfoSection";
import DetalhesVaca from "@/Components/Ciclos/DetalhesVaca";
import { StorageHelper } from "@/helpers";
import { ICiclo } from "@/interfaces";
import { useCicleStore } from "@/stores/cicleStore";
import { useEffect } from "react";

export default function Auction({ params }: { params: { id: string } }) {
  const { setSelectedCicle, selectedCicle } = useCicleStore();

  useEffect(() => {
    const cicles: ICiclo[] = StorageHelper.getItem("cicles");
    const cicle = cicles.find((e) => e.id === params.id);
    setSelectedCicle(cicle!);
  }, [params]);

  const dataAboutProject = {
    resumo:
      "Nesta operação, você será sócio da B-ENERGY PARTICIPAÇÃO SOCIETÁRIA SPE I LTDA, empresa do grupo Bloxs, que aportará os recursos captados nesta Oferta Pública, via mútuo conversível, em duas sociedades controladas pela SINERGI COOPERATIVA. A Sinergi, por sua vez, utilizará os recursos para a implantação e desenvolvimento de 02 Usinas Fotovoltaica no Estado do Paraná, que possuem, juntas, uma potência de geração de 2MW. O mútuo conversível garante a B-ENERGY e, consequentemente, a você, na condição de sócio indireto, o direito a receber uma remuneração variável mensal sobre os resultados das usinas solares - o que poderá representar uma renda passiva mensal por 30 anos -além do direito de conversão em participação futura nas referidas sociedades. A operação contará com apoio estratégico da Sinergi Cooperativa, empresa no ramo que conta com uma carteira com mais de 3.000 associados, que ajudará na implantação, operação e comercialização da energia para sua rede de cooperados. Por ser um projeto B-Teses, a Bloxs Capital, na condição de única sócia da B-Energy, atuará como Controladora da Operação, sendo responsável por monitorar e gerenciar toda a alocação dos recursos até os pagamentos aos investidores, além de ser a responsável por fazer a publicação de relatórios periódicos e pelo alinhamento da tese de saída. O plano financeiro projeta proventos mensais após 12 meses de carência - tempo de implantação das usinas - de 1,19% a.m. ou 15,29% a.a. + IPCA - sem considerar a tese de saída. Esse é um tipo de ativo para quem busca RENDA PASSIVA e FORMAÇÃO DE PATRIMÔNIO, contando com o IPCA como componente da remuneração, mitigando assim os efeitos da INFLAÇÃO que consomem o seu poder de compra.",
    detalhes1:
      "✅ Nesta oportunidade, você será sócio investidor da B-ENERGY PARTICIPAÇÃO SOCIETÁRIA SPE I LTDA;",
    detalhes2:
      "✅ Com os recursos captados, a Sociedade Investida, controlada pela Bloxs Capital, celebrará um contrato de mútuo conversível com as sociedades detentoras das 02 Usinas Solares de Geração Distribuída no Paraná;",
    detalhes3:
      "✅ Para implantar, operar e comercializar essas usinas, a B-ENERGY terá como parceira uma grande cooperativa de energia, a Sinergi Cooperativa, empresa no ramo que tem carteira com quase 3.000 clientes, sendo algum deles a Ultragaz, Heineken e Nike;",
    detalhes4:
      "✅ Mensalmente, após o prazo de implementação das usinas, os resultados auferidos pela comercialização da energia serão distribuídos proporcionalmente as cotas adquiridas pelos sócios investidores da B-ENERGY I.",
  };

  return (
    <div className="flex flex-col w-full pt-[10rem] bg-white px-[10%]">
      <div className="flex w-full gap-10">
        <DetalhesVaca />
        <CiclosViewInfoSection item={selectedCicle!} />
      </div>

      <AboutProject item={dataAboutProject} video={selectedCicle?.video!} />
    </div>
  );
}
