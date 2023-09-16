export default function YellowWord({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
      {children}
    </span>
  );
}
