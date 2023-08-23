export default function PurpleWord({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">{children}</span>
    )
}
