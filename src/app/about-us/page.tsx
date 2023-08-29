import YellowWord from "@/Components/YellowWord";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen py-4 bg-[#1E1E1E]">
      <div className="flex  w-[90%] justify-center h-full gap-10 mt-[120px] px-20">
        
        <div className="flex flex-col gap-3 w-[60%] ">
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-Archivo text-25 font-normal tracking-wider leading-normal letter-spacing-1.25">Quem somos?</h1>
            <h1 className="text-gray-300 font-Archivo text-3xl font-bold tracking-wider leading-normal letter-spacing-2.25">
              Conheça a história da <YellowWord>VAGROS</YellowWord>
            </h1>
          </div>

          <div className="flex flex-col gap-2 text-white font-Archivo text-sm font-normal tracking-wide leading-normal letter-spacing-1">
            <p>
              Em 2009, reunimos um grupo de amigos movidos pelo desejo de
              aproveitar o crescimento do setor agropecuário e contribuir para a
              pecuária, por meio da compra e comercialização de gado. No
              entanto, enfrentamos desafios devido aos altos custos e às
              restrições para acessar esse setor.
            </p>

            <p>
              Em 2021, ao conhecermos a tecnologia blockchain e a tokenização,
              surgiu a ideia do projeto Vagros. Nossa visão era oferecer uma
              solução inovadora para a indústria pecuária, permitindo que os
              produtores de gado pudessem negociar seu rebanho com qualquer
              pessoa, inclusive aquelas sem terras ou conhecimento prévio no
              setor. Essa possibilidade se tornou viável graças aos smart
              contracts e à capacidade de captação e gestão dos confinamentos
              espalhados pelo Brasil.
            </p>

            <p>
              A tokenização é a base do nosso conceito, pois oferece mais
              transparência, eficiência e segurança nas transações financeiras.
              Através dela, criamos oportunidades para as pessoas adquirirem
              participações e benefícios na produção de carnes, mesmo com
              recursos financeiros limitados. Isso é possível porque os ativos
              podem ser fracionados, permitindo que pequenos e médios
              investidores contribuam para o avanço do agronegócio.
            </p>

            <p>
              Nossa missão é democratizar o acesso ao setor agropecuário,
              possibilitando que mais pessoas participem e se beneficiem desse
              mercado. Através do Vagros, estamos construindo uma plataforma
              inclusiva e transparente, onde produtores, investidores e
              consumidores podem se conectar, colaborar e impulsionar o
              crescimento do agronegócio de forma sustentável.
            </p>

            <p>
              Junte-se a nós nessa jornada e faça parte da comunidade Vagros,
              onde estamos transformando a pecuária e tornando o agronegócio
              mais acessível para todos.
            </p>
          </div>
        </div>

        <div className="flex w-[40%] h-full">
          <img src="/images/ImgAboutUs.png" className="w-full h-full object-cover" alt="" />
        </div>


      </div>

    </div>
  );
}
