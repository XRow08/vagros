export default function BtnAmarelo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="bg-gradient-to-r text-black from-yellow-300 to-orange-500 cursor-pointer font-bold text-lg hover:opacity-80 transition-all duration-300 ease-in-out shadow-lg backdrop-blur-xl w-full h-full flex items-center justify-center rounded-b-md">
      {children}
    </button>
  );
}
