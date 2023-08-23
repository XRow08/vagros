export default function Title({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <h1 className="text-white font-archivo text-3xl font-bold tracking-wider">{children}</h1>
    )
}