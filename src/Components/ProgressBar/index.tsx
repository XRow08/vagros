type Props = {
  curValue: string;
  curValueBRL: string;
  status: number;
};

export default function ProgressBar({ curValue, curValueBRL, status }: Props) {
  const widthBar = `w-[${status}]`;
  return (
    <div className="flex flex-col relative items-center w-full">
      <div className="flex flex-col w-full">
        <div className="flex justify-between mb-1 text-black">
          <span className="text-base font-medium">
            Status: <span className="text-sm font-medium">{status}%</span>
          </span>
          <span className="text-sm font-medium">
            USDT {curValue} / BRL {curValueBRL}
          </span>
        </div>
        <div className="w-full bg-[#DFDFDF] shadow-inner rounded-sm h-[40px]">
          <div
            style={{ width: `${status}%` }}
            className={`bg-gradient-to-r rounded-sm from-yellow-300 to-orange-500 h-full`}
          />
        </div>
        <p className="text-sm w-full text-end pt-1 text-black font-medium ">
          Volume total
        </p>
      </div>
    </div>
  );
}
