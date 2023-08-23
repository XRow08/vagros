export default function MenuItem({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <h1 className="color-[#FFF] text-white font-archivo font-medium text-16">{children}</h1>
    )
}