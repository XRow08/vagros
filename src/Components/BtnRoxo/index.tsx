export default function BtnRoxo({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-r text-white from-purple-500 to-purple-800 cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out shadow-lg font-bold text-lg backdrop-blur-xl w-full h-full flex items-center justify-center rounded-[8px]">
      {children}
    </div>
  );
}
