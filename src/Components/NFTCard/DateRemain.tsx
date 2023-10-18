import { DateFormat } from "@/helpers/DateFormat";
import { useCountDown } from "@/hooks/useCountDown";

export function DateRemain({ date }: { date?: string }) {
  const { isoToTimestamp, timestampToDate } = DateFormat;
  const timestamp = isoToTimestamp(date!);
  const timer = useCountDown(timestamp);
  const { days, hours, min, sec } = timestampToDate(timer!);

  return (
    <div className="flex flex-col bg-gradient-to-r from-[#7000FF] to-[#B338FF]">
      <div className="flex items-center gap-2 justify-center px-10 py-1">
        <div className="flex flex-col items-center shadow-2xl shadow-black bg-black rounded-md w-[30%] bg-opacity-40 backdrop-blur-md">
          <h1 className="text-white text-base font-normal tracking-wider">
            {days}
          </h1>
          <h2 className="text-white text-xs font-normal tracking-wider">
            dias
          </h2>
        </div>
        <div className="flex flex-col items-center shadow-2xl shadow-black bg-black rounded-md w-[30%] bg-opacity-40 backdrop-blur-md">
          <h1 className="text-white text-base font-normal tracking-wider">
            {hours}
          </h1>
          <h2 className="text-white text-xs font-normal tracking-wider">
            horas
          </h2>
        </div>
        <div className="flex flex-col items-center shadow-2xl shadow-black bg-black rounded-md w-[30%] bg-opacity-40 backdrop-blur-md">
          <h1 className="text-white text-base font-normal tracking-wider">
            {min}
          </h1>
          <h2 className="text-white text-xs font-normal tracking-wider">min</h2>
        </div>
        <div className="flex flex-col items-center shadow-2xl shadow-black bg-black rounded-md w-[30%] bg-opacity-40 backdrop-blur-md">
          <h1 className="text-white text-base font-normal tracking-wider">
            {sec}
          </h1>
          <h2 className="text-white text-xs font-normal tracking-wider">seg</h2>
        </div>
      </div>
    </div>
  );
}
