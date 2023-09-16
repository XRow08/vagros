export default function BtnPerfil({
  children,
  state
}: {
  children: React.ReactNode,
  state: boolean
}){

  const ativado = "text-white bg-gradient-to-r from-purple-500 to-purple-800  shadow-xl border-black border-opacity-10 border-[1px] backdrop-blur-xl w-full h-full flex items-center justify-center rounded-[8px]"

  return(
  
    <div className={state? ativado : "text-black hover:text-white bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-800  shadow-xl border-black border-opacity-10 border-[1px] backdrop-blur-xl w-full h-full flex items-center justify-center rounded-[8px]"}>
          <div>{children}</div>
    </div>
  ) 
}