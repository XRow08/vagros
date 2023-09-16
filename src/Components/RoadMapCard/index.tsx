import PurpleWord from "../PurpleWord";
import YellowWord from "../YellowWord";

type Props = {
  title:
    | "1 ° TRIMESTRE"
    | "2 ° TRIMESTRE"
    | "3 ° TRIMESTRE"
    | "4 ° TRIMESTRE"
    | "1 ° SEMESTRE"
    | "2 ° SEMESTRE"
    | "3 ° SEMESTRE";
  text1: string;
  text2: string;
  text3: string;
  text4?: string;
  text5?: string;
  year: "2023" | "2024" | "2025" | "2026";
  color: "yellow" | "purple";
};

export function RoadMapCard({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  year,
  color,
}: Props) {
  const background =
    color === "yellow" ? "border-[#FFD809]" : "border-[#7000FF]";
  const classText =
    "text-white text-[12px] font-normal tracking-wide leading-normal letter-spacing-0.8";
  return (
    <div
      className={`flex flex-col items-center border-[1px] w-full ${background} bg-[#212121] rounded-md p-4`}
    >
      {color === "yellow" ? (
        <YellowWord>{year}</YellowWord>
      ) : (
        <PurpleWord>{year}</PurpleWord>
      )}
      <div className="flex flex-col gap-4 w-full h-full">
        <h1 className="text-white font-Archivo text-lg font-bold tracking-wide leading-normal letter-spacing-1.25">
          {title}
        </h1>
        <div className="flex flex-col gap-1">
          {text1 && <p className={classText}>· {text1}</p>}
          {text2 && <p className={classText}>· {text2}</p>}
          {text3 && <p className={classText}>· {text3}</p>}
          {text4 && <p className={classText}>· {text4}</p>}
          {text5 && <p className={classText}>· {text5}</p>}
        </div>
      </div>
    </div>
  );
}
