import YellowWord from "../YellowWord";

export default function Banner() {
  return (
    <div className="bg-white">
      <div className="bg-[url('/images/banner-img.jpg')] bg-cover bg-center h-screen lg:h-[80vh] flex justify-center items-center">
        <div className="flex-col text-start lg:text-center w-full p-4 lg:p-0 lg:w-[50%]">
          <h1 className="text-white text-[22px] lg:text-[45px] font-semibold mb-4">
            O MUNDO DO <YellowWord>AGRONEGÓCIO</YellowWord> DENTRO DA BLOCKCHAIN
          </h1>
          <h2 className="text-white text-lg lg:text-xl font-normal leading-normal tracking-wide">
            Finanças descentralizadas que impulsionam a produção de alimentos
          </h2>
        </div>
      </div>
    </div>
  );
}
