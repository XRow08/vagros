import { IAboutProject } from "@/interfaces/IAboutProject";

export default function AboutProject({
  item,
  video,
}: {
  item: IAboutProject;
  video: string;
}) {
  const videoID = video?.split("=")[1];
  return (
    <div className="flex flex-col items-center text-black pt-[10rem] w-full">
      <div className="flex flex-col w-full gap-5">
        <h1 className="text-black font-Archivo text-2xl font-bold leading-normal tracking-wider">
          Sobre o projeto
        </h1>

        <div className="flex gap-28 w-full shadow-lg  px-20 rounded-md">
          <div className="flex flex-col items-center rounded-b-sm border-b-[4px] border-[#B338FF] p-4 cursor-pointer w-[15%] h-[60px]">
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
              <iframe
                id="ytplayer"
                allowFullScreen
                className="h-full w-full object-cover rounded-xl"
                src={`https://www.youtube.com/embed/${videoID}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-black font-Archivo text-20 font-bold leading-normal tracking-wider">
              Resumo do projeto:
            </h1>
            <div className="flex flex-col gap-2">
              <p className="text-black font-Archivo text-18 font-normal leading-normal tracking-wide">
                {item.resumo}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-black font-Archivo text-20 font-bold leading-normal tracking-wider">
              Mais detalhes:
            </h1>
            <div className="flex flex-col gap-1">
              <p className="text-black font-Archivo text-18 font-normal leading-normal tracking-wide">
                {item.detalhes1}
              </p>
              <p className="text-black font-Archivo text-18 font-normal leading-normal tracking-wide">
                {item.detalhes2}
              </p>
              <p className="text-black font-Archivo text-18 font-normal leading-normal tracking-wide">
                {item.detalhes3}
              </p>
              <p className="text-black font-Archivo text-18 font-normal leading-normal tracking-wide">
                {item.detalhes4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
