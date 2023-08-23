import Title from "../Title";
import Text from "../Text";
import BtnRoxo from "../BtnRoxo";
import Card2 from "../Card2";
import UserAdd from "../Icons/UserAdd";
import ConnectWalletButton from "../Header/ConnectWalletButton";
import Link from "next/link";
import PurpleWord from "../PurpleWord";
import YellowWord from "../YellowWord";

export default function HomeSecondSection(){
    return(
        <div className="flex flex-col justify-between bg-[url('/images/background1.png')] bg-cover bg-center">

            <div className="flex flex-col gap-10 w-[40%] m-10 ml-20 mt-20">
                <Title>MAIOR <PurpleWord>ECOSSISTEMA</PurpleWord> DE PRODUÇÃO DE ALIMENTOS</Title>
                <span className="text-justify">
                    <Text>Utilizando blockchain e contratos inteligentes, estamos construindo uma ponte para que qualquer pessoa possa interagir com o setor agropecuário, independentemente de seu espaço geográfico ou conhecimento sobre o assunto. Proporcionamos aos usuários uma identidade digital dentro de cada ciclo leiloado, oferecendo incentivos e benefícios a todos que contribuírem para um mundo melhor. Juntos, acreditamos na criação de uma comunidade capaz de contribuir na alimentação mundial. Junte-se a nós nessa jornada e faça parte da comunidade Vagros, onde cada ação conta para um futuro mais sustentável e uma alimentação mundial mais justa.</Text>
                </span>
                <BtnRoxo>CONHECER CICLOS</BtnRoxo>
            </div>

            <div className="absolute right-5 top-[1300px]">
                <img src="/images/Logo Vagros.png" className="w-[800px] h-auto" alt="" />
            </div>
            
            
            <div className="flex flex-col items-center mt-28">
                <div className="flex flex-col w-[40%] text-center gap-3">

                    <Title>MANEIRA <YellowWord>MODERNA</YellowWord> DE CRIAR O SEU PRÓPRIO <YellowWord>LEILÃO</YellowWord></Title>
                    <Text>Produtores rurais podem realizar suas negociações de forma ágil e segura, sem precisar deslocar seu rebanho. A plataforma oferece tecnologia para ampliarem sua visibilidade e alcançarem novos mercados. Solução eficiente e inteligente para os desafios do setor pecuário, conectando produtores, compradores e confinamentos gerando liquidez e expansão na produção de carnes</Text>

                </div>
            </div>

            <div className="flex items-center justify-between flex-col gap-5 mt-4">
                <div className="flex gap-5">
                    <Card2><UserAdd/></Card2>
                    <Card2><UserAdd/></Card2>
                    <Card2><UserAdd/></Card2>
                </div>
                <div className="flex gap-5">
                    <Card2><UserAdd/></Card2>
                    <Card2><UserAdd/></Card2>
                    <Card2><UserAdd/></Card2>
                </div>
                <Card2><UserAdd/></Card2>
            </div>
            
            <div className="flex flex-col items-start m-10 ml-20 mt-20 gap-5 h-[600px]">
                <div className="flex w-[30%] ">
                    <Title>APOIE O ECOSSISTEMA <YellowWord>LEILOANDO</YellowWord> SEU REBANHO</Title>
                </div>
                <Link href="">
                <div className="flex bg-gradient-to-r from-yellow-500 to-yellow-700 filter drop-shadow-lg backdrop-blur-xl rounded-lg p-3 pl-10 pr-10">
                    <h1 className="text-black font-archivo text-base font-bold">REALIZAR LEILÃO</h1>
                </div>
                </Link>
                <img src="/images/laptop.png" alt="" className="absolute right-0"/>
            </div>
        </div>
    )
}