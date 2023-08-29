import Title from "../Title";
import Text from "../Text";
import BtnRoxo from "../BtnRoxo";
import Card2 from "../Card2";
import UserAdd from "../Icons/UserAdd";
import ConnectWalletButton from "../Header/ConnectWalletButton";
import Link from "next/link";
import PurpleWord from "../PurpleWord";
import YellowWord from "../YellowWord";

export default function HomeSecondSection() {

  const data = [
    {
      title1: "PARCEIROS",
      title2: "1- NOVOS PARCEIROS",
      text: "Produtor ou corretor rural com interesse em leiloar seu rebanho utilizando nosso programa de ciclos, deverá enviar o formulário seguindo as especificações solicitadas através da área do produtor.",
      icon: "user"
    },
    {
      title1: "LEILÃO",
      title2: "2- REALIZAR UM LEILÃO",
      text: "Nossa equipe recebe os dados enviados e realiza o primeiro contato para captura de informações detalhadas.",
      icon: "hammer"
    },
    {
      title1: "VALIDAÇÃO",
      title2: "3- VALIDAÇÃO DO PARCEIRO",
      text: "Nossa equipe desloca até o local do parceiro, para apuração e fechamento de contrato.",
      icon: "eye"
    },
    {
      title1: "ANÚNCIO",
      title2: "4- CICLO ANUNCIADO",
      text: "Após fechamento do contrato o anúncio do ciclo é disponibilizado em nosso marketplace no período de 7 dias.",
      icon: "bull"
    },
    {
      title1: "CONTRATO",
      title2: "5- ÊXITO OU CANCELAMENTO",
      text: "Passados os 7 dias e o valor total do lote alcançado, o rebanho será vendido. Em caso contrário os valores retornam para os compradores e o contrato com o parceiro encerrado. ",
      icon: "caderno"
    },
    {
      title1: "START",
      title2: "6- INÍCIO DO CICLO",
      text: "Rebanho guiado para o confinamento parceiro, assim iniciando a produção de arrobas. Com períodos de 130 a 150 dias registrado em contrato.",
      icon: "play"
    },
    {
      title1: "BEM-SUCEDIDO",
      title2: "7- FINAL DE CICLO",
      text: "Venda e terminação do ciclo. Valores e benefícios distribuídos para os detentores.",
      icon: "arrow"
    },
  ]

  const infoCard7 = data[6]

  return (
    <div className="flex flex-col items-center w-full  justify-between bg-[url('/images/background1.png')] bg-cover bg-center">
      
      <div className="flex items-start gap-10 w-full mt-20">
        <div className="flex flex-col w-[40%] gap-10 ml-[5%]">
          <Title>
            MAIOR <PurpleWord>ECOSSISTEMA</PurpleWord> DE PRODUÇÃO DE ALIMENTOS
          </Title>
          <span className="text-justify">
            <Text>
              Utilizando blockchain e contratos inteligentes, estamos construindo
              uma ponte para que qualquer pessoa possa interagir com o setor
              agropecuário, independentemente de seu espaço geográfico ou
              conhecimento sobre o assunto. Proporcionamos aos usuários uma
              identidade digital dentro de cada ciclo leiloado, oferecendo
              incentivos e benefícios a todos que contribuírem para um mundo
              melhor. Juntos, acreditamos na criação de uma comunidade capaz de
              contribuir na alimentação mundial. Junte-se a nós nessa jornada e
              faça parte da comunidade Vagros, onde cada ação conta para um futuro
              mais sustentável e uma alimentação mundial mais justa.
            </Text>
          </span>
          <div className="w-[50%] h-[40px]">
            <BtnRoxo>CONHECER CICLOS</BtnRoxo>
          </div>
        </div>

      </div>

      <div className="absolute right-5 top-[1300px]">
        <img
          src="/images/Logo Vagros.png"
          className="w-[800px] h-auto"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center mt-28">
        <div className="flex flex-col w-[40%] text-center gap-3">
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

      <div className="flex items-center justify-center flex-col gap-8 mt-10 w-[90%]">
        <div className="grid grid-cols-3 place-items-center gap-8 w-full">

          {data.slice(0, 6).map(
            (item, index) => {
            return <Card2 key={index} item={item} />;
          }
          )} 
        </div> 

        <Card2 item={infoCard7}/> 
      </div>

      <div className="flex flex-col w-full items-start m-10 pl-[5%] mt-20 gap-5 h-[600px]">
        <div className="flex w-[30%] ">
          <Title>
            APOIE O ECOSSISTEMA <YellowWord>LEILOANDO</YellowWord> SEU REBANHO
          </Title>
        </div>

        <Link href="">
          <div className="flex bg-gradient-to-r from-yellow-500 to-yellow-700 filter drop-shadow-lg backdrop-blur-xl rounded-lg p-3 pl-10 pr-10">
            <h1 className="text-black font-archivo text-base font-bold">
              REALIZAR LEILÃO
            </h1>
          </div>
        </Link>

        <img src="/images/laptop.png" alt="" className="absolute right-0 z-0" />
      </div>
    </div>
  );
}
