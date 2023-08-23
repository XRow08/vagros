export default function BtnBranco({
  children,
}: {
  children: React.ReactNode
}){
  return(
      <div className=" bg-white text-white  shadow-xl border-black border-opacity-10 border-[1px] backdrop-blur-xl w-full h-full flex items-center justify-center rounded-[8px]">
          <div>{children}</div>
      </div>
  )
}