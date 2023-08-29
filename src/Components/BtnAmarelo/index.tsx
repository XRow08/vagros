export default function BtnAmarelo({
  children,
}: {
  children: React.ReactNode
}){
  return(
      <div className=" bg-gradient-to-r text-black from-yellow-300 to-orange-500 cursor-pointer shadow-lg backdrop-blur-xl w-full h-full flex items-center justify-center rounded-b-md">
          <div>{children}</div>
      </div>
  )
}