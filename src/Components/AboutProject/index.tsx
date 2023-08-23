export default function AboutProject() {
  return (
    <div className="flex flex-col items-center text-black pt-[50px]">
      <div className="flex flex-col w-[80%] gap-5">
        <h1 className="text-black font-Archivo text-2xl font-bold leading-normal tracking-wider">
          Sobre o projeto
        </h1>

        <div className="flex gap-28 w-full shadow-lg  px-20 rounded-md">
          <div className="flex flex-col items-center hover:rounded-b-sm hover:border-b-[4px] hover:border-[#B338FF] p-4 cursor-pointer w-[15%] h-[60px]">
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
              <video src="" className=" w-full h-full rounded-lg"></video>
            </div>

          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-black font-Archivo text-20 font-bold leading-normal tracking-wider">
              Resumo do projeto:
            </h1>
            <div className="flex flex-col gap-2">
              <p className="text-black font-Archivo text-18 font-normal leading-normal tracking-wide">
                Nesta operação, você será sócio da B-ENERGY PARTICIPAÇÃO
                SOCIETÁRIA SPE I LTDA, empresa do grupo Bloxs, que aportará os
                recursos captados nesta Oferta Pública, via mútuo conversível,
                em duas sociedades controladas pela SINERGI COOPERATIVA. A
                Sinergi, por sua vez, utilizará os recursos para a implantação e
                desenvolvimento de 02 Usinas Fotovoltaica no Estado do Paraná,
                que possuem, juntas, uma potência de geração de 2MW. O mútuo
                conversível garante a B-ENERGY e, consequentemente, a você, na
                condição de sócio indireto, o direito a receber uma remuneração
                variável mensal sobre os resultados das usinas solares - o que
                poderá representar uma renda passiva mensal por 30 anos -além do
                direito de conversão em participação futura nas referidas
                sociedades. A operação contará com apoio estratégico da Sinergi
                Cooperativa, empresa no ramo que conta com uma carteira com mais
                de 3.000 associados, que ajudará na implantação, operação e
                comercialização da energia para sua rede de cooperados. Por ser
                um projeto B-Teses, a Bloxs Capital, na condição de única sócia
                da B-Energy, atuará como Controladora da Operação, sendo
                responsável por monitorar e gerenciar toda a alocação dos
                recursos até os pagamentos aos investidores, além de ser a
                responsável por fazer a publicação de relatórios periódicos e
                pelo alinhamento da tese de saída. O plano financeiro projeta
                proventos mensais após 12 meses de carência - tempo de
                implantação das usinas - de 1,19% a.m. ou 15,29% a.a. + IPCA -
                sem considerar a tese de saída. Esse é um tipo de ativo para
                quem busca RENDA PASSIVA e FORMAÇÃO DE PATRIMÔNIO, contando com
                o IPCA como componente da remuneração, mitigando assim os
                efeitos da INFLAÇÃO que consomem o seu poder de compra.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-black font-Archivo text-20 font-bold leading-normal tracking-wider">
              Mais detalhes:
            </h1>
            <div className="flex flex-col gap-1">
              <p className="text-black font-Archivo text-18 font-normal leading-normal tracking-wide">
                ✅ Nesta oportunidade, você será sócio investidor da B-ENERGY
                PARTICIPAÇÃO SOCIETÁRIA SPE I LTDA;
              </p>
              <p className="text-black font-Archivo text-18 font-normal leading-normal tracking-wide">
                ✅ Com os recursos captados, a Sociedade Investida, controlada
                pela Bloxs Capital, celebrará um contrato de mútuo conversível
                com as sociedades detentoras das 02 Usinas Solares de Geração
                Distribuída no Paraná;
              </p>
              <p className="text-black font-Archivo text-18 font-normal leading-normal tracking-wide">
                ✅ Para implantar, operar e comercializar essas usinas, a
                B-ENERGY terá como parceira uma grande cooperativa de energia, a
                Sinergi Cooperativa, empresa no ramo que tem carteira com quase
                3.000 clientes, sendo algum deles a Ultragaz, Heineken e Nike;
              </p>
              <p className="text-black font-Archivo text-18 font-normal leading-normal tracking-wide">
                ✅ Mensalmente, após o prazo de implementação das usinas, os
                resultados auferidos pela comercialização da energia serão
                distribuídos proporcionalmente as cotas adquiridas pelos sócios
                investidores da B-ENERGY I.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
