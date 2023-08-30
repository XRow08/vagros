import { ICiclosViewInfoItem } from "@/interfaces/ICiclosViewInfoItem";

export default function CiclosViewInfoItem({ item }: { item: ICiclosViewInfoItem }) {
  return (
    <div className="flex gap-1 items-center">
      <h1 className="text-black font-Archivo text-[0.92rem] font-normal font-weight-400 leading-normal tracking-wider">
        {item.title}
      </h1>
      <h2 className="text-black font-Archivo text-[0.92rem] font-bold leading-normal tracking-wider">
        {item.value}
      </h2>
    </div>
  );
}
