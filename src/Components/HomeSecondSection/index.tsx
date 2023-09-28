import Title from "../Title";
import Text from "../Text";
import BtnRoxo from "../BtnRoxo";
import Card2 from "../Card2";
import PurpleWord from "../PurpleWord";
import YellowWord from "../YellowWord";
import BtnAmarelo from "../BtnAmarelo";

export default function HomeSecondSection() {
  const data = [
    {
      title1: "PARCEIROS",
      title2: "1- NOVOS PARCEIROS",
      text: "Produtor ou corretor rural com interesse em leiloar seu rebanho utilizando nosso programa de ciclos, deverá enviar o formulário seguindo as especificações solicitadas através da área do produtor.",
      icon: "user",
    },
    {
      title1: "LEILÃO",
      title2: "2- REALIZAR UM LEILÃO",
      text: "Nossa equipe recebe os dados enviados e realiza o primeiro contato para captura de informações detalhadas.",
      icon: "hammer",
    },
    {
      title1: "VALIDAÇÃO",
      title2: "3- VALIDAÇÃO DO PARCEIRO",
      text: "Nossa equipe desloca até o local do parceiro, para apuração e fechamento de contrato.",
      icon: "eye",
    },
    {
      title1: "ANÚNCIO",
      title2: "4- CICLO ANUNCIADO",
      text: "Após fechamento do contrato o anúncio do ciclo é disponibilizado em nosso marketplace no período de 7 dias.",
      icon: "bull",
    },
    {
      title1: "CONTRATO",
      title2: "5- ÊXITO OU CANCELAMENTO",
      text: "Passados os 7 dias e o valor total do lote alcançado, o rebanho será vendido. Em caso contrário os valores retornam para os compradores e o contrato com o parceiro encerrado. ",
      icon: "caderno",
    },
    {
      title1: "START",
      title2: "6- INÍCIO DO CICLO",
      text: "Rebanho guiado para o confinamento parceiro, assim iniciando a produção de arrobas. Com períodos de 130 a 150 dias registrado em contrato.",
      icon: "play",
    },
    {
      title1: "BEM-SUCEDIDO",
      title2: "7- FINAL DE CICLO",
      text: "Venda e terminação do ciclo. Valores e benefícios distribuídos para os detentores.",
      icon: "arrow",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full justify-between bg-[url('/images/background1.png')] bg-cover bg-center">
      <div className="flex items-start relative gap-10 w-full mt-20 p-4 lg:p-0 lg:px-[10%]">
        <div className="hidden lg:block absolute right-0 mt-[-13rem] top-0">
          <img src="/images/Logo Vagros.png" className="w-[800px]" alt="" />
        </div>
        <div className="flex flex-col lg:w-[40%] gap-10">
          <div className="lg:hidden w-[370px] -mt-[10rem] -mb-[5rem]">
            <img
              src="/images/Logo Vagros.png"
              className="w-full h-full object-cover"
              alt="asd"
            />
          </div>
          <Title>
            MAIOR <PurpleWord>ECOSSISTEMA</PurpleWord> DE PRODUÇÃO DE ALIMENTOS
          </Title>
          <span className="text-justify">
            <Text>
              Utilizando blockchain e contratos inteligentes, estamos
              construindo uma ponte para que qualquer pessoa possa interagir com
              o setor agropecuário, independentemente de seu espaço geográfico
              ou conhecimento sobre o assunto. Proporcionamos aos usuários uma
              identidade digital dentro de cada ciclo leiloado, oferecendo
              incentivos e benefícios a todos que contribuírem para um mundo
              melhor. Juntos, acreditamos na criação de uma comunidade capaz de
              contribuir na alimentação mundial. Junte-se a nós nessa jornada e
              faça parte da comunidade Vagros, onde cada ação conta para um
              futuro mais sustentável e uma alimentação mundial mais justa.
            </Text>
          </span>
          <a href="/ciclos" className="w-[259px] h-[56px]">
            <BtnRoxo>CONHECER CICLOS</BtnRoxo>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center mt-28 p-4 lg:p-0 lg:px-[10%]">
        <div className="flex flex-col lg:w-[60%] text-start lg:text-center gap-3">
          <Title>
            MANEIRA <YellowWord>MODERNA</YellowWord> DE CRIAR O SEU PRÓPRIO{" "}
            <YellowWord>LEILÃO</YellowWord>
          </Title>
          <Text>
            Produtores rurais podem realizar suas negociações de forma ágil e
            segura, sem precisar deslocar seu rebanho. A plataforma oferece
            tecnologia para ampliarem sua visibilidade e alcançarem novos
            mercados. Solução eficiente e inteligente para os desafios do setor
            pecuário, conectando produtores, compradores e confinamentos gerando
            liquidez e expansão na produção de carnes
          </Text>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-8 mt-10 px-[10%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-8 w-full">
          {data.slice(0, 6).map((item, index) => {
            return <Card2 key={index} item={item} />;
          })}
        </div>

        <div className="w-1/3">
          <Card2 item={data[6]} />
        </div>
      </div>

      <div className="flex flex-col relative w-full items-start m-10 px-[10%] mt-20 gap-2 h-[600px]">
        <div className="flex lg:w-[40%]">
          <Title>
            APOIE O ECOSSISTEMA <YellowWord>LEILOANDO</YellowWord> SEU REBANHO
          </Title>
        </div>

        <a href="/partners" className="h-14 w-[20rem] mt-2">
          <button className="bg-gradient-to-r text-black from-yellow-300 to-orange-500 cursor-pointer hover:scale-[1.01] font-bold text-lg hover:opacity-80 transition-all duration-300 ease-in-out shadow-lg backdrop-blur-xl w-full h-full flex items-center justify-center rounded-md">
            REALIZAR LEILÃO
          </button>
        </a>

        <img
          src="/images/laptop.png"
          className="absolute right-0 bottom-20 lg:top-0 z-0"
        />
      </div>
    </div>
  );
}
