import { DateFormat } from "@/helpers/DateFormat";
import { useCountDown } from "@/hooks/useCountDown";

export function DateInfo({ date }: { date: string }) {
  const { isoToTimestamp, timestampToDate } = DateFormat;
  const timestamp = isoToTimestamp(date);
  const timer = useCountDown(timestamp);
  const { days, hours, min, sec } = timestampToDate(timer!);

  return (
    <div className="flex flex-col w-[40%]">
      <div className="flex items-center gap-2 justify-between w-full">
        <div className="flex flex-col items-center bg-white rounded-md w-[30%] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
          <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">
            149
          </h1>
          <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
            dias
          </h2>
        </div>

        <div className="flex flex-col items-center bg-white rounded-md w-[30%] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
          <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">
            {hours}
          </h1>
          <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
            horas
          </h2>
        </div>

        <div className="flex flex-col items-center bg-white rounded-md w-[30%] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
          <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">
            {min}
          </h1>
          <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
            min
          </h2>
        </div>

        <div className="flex flex-col items-center bg-white rounded-md w-[30%] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
          <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">
            {sec}
          </h1>
          <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
            seg
          </h2>
        </div>
      </div>
    </div>
  );
}
