export default function CiclosViewInfoItem({
  item,
}: {
  item: { title: string; value: string };
}) {
  return (
    <div className="flex gap-1 items-center">
      <h1 className="text-black text-xl font-normal font-weight-400 leading-normal tracking-[1px]">
        {item.title}
      </h1>
      <h2 className="text-black text-xl font-bold leading-normal tracking-[1px]">
        {item.value}
      </h2>
    </div>
  );
}
