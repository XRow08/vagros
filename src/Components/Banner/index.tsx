import YellowWord from "../YellowWord";

export default function Banner(){
    return(
        
        <div className="bg-white">
            <div className="bg-[url('/images/banner-img.jpg')] bg-cover bg-center h-[776px] flex justify-center items-center">
            <div className="flex-col text-center mb-[250px] w-[50%]">
                <h1 className="text-white text-3xl font-semibold mb-4">O MUNDO DO <YellowWord>AGRONEGÓCIO</YellowWord> DENTRO DA BLOCKCHAIN</h1>
                <h2 className="text-white text-center font-archivo text-20 font-normal leading-normal tracking-wide">Finanças descentralizadas que impulsionam a produção de alimentos</h2>
            </div>
            </div>
        </div>
        
    ) 
}