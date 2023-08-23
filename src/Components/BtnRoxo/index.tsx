export default function BtnRoxo({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <div className=" bg-gradient-to-r text-white from-purple-500 to-purple-800 shadow-lg backdrop-blur-xl w-full h-[56px] flex items-center justify-center rounded-[8px]">
            <div>{children}</div>
        </div>
    )
}