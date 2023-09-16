import { ICard2 } from "@/interfaces/ICard2";
import Text from "../Text";
import UserAdd from "../Icons/UserAdd";
import Hammer from "../Icons/Hammer";
import Eye from "../Icons/Eye";
import Bull from "../Icons/Bull";
import Caderno from "../Icons/Caderno";
import Play from "../Icons/Play";
import Arrow from "../Icons/Arrow";

export default function Card2({ item }: { item: ICard2 }) {
  return (
    <div className="flex flex-col gap-3 bg-[#212121] shadow-lg min-w-[380px] h-[240px] rounded-lg p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-white font-archivo text-base font-light leading-normal tracking-wider">
          {item.title1}
        </h1>
        {item.icon === "user" ? (
          <UserAdd />
        ) : item.icon === "hammer" ? (
          <Hammer />
        ) : item.icon === "eye" ? (
          <Eye />
        ) : item.icon === "bull" ? (
          <Bull />
        ) : item.icon === "caderno" ? (
          <Caderno />
        ) : item.icon === "play" ? (
          <Play />
        ) : (
          <Arrow />
        )}
      </div>
      <h1 className="text-white font-archivo text-2xl font-bold tracking-wide">
        {item.title2}
      </h1>
      <Text>{item.text}</Text>
    </div>
  );
}
