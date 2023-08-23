export default function Text({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <p className="text-white font-archivo text-sm font-normal tracking-wider leading-normal">{children}</p>
    )
}