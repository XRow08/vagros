import Link from "next/link";
import ConnectWalletButton from "./ConnectWalletButton";
import MenuItens from "./MenuItens";


export function Header(){
    return(
        <div className="fixed z-40 top-0 w-full h-[87px] backdrop-blur-md rounded-bl-[45px] rounded-br-[45px] flex items-center justify-between bg-[#050505] bg-opacity-40 pr-10 pl-10">
            <Link href="/">
                <div className="">
                    <img className="absolute top-0 left-0 mt-0 ml-20" src="/images/Logo.svg" alt="Vagros Logo" />
                </div>
            </Link>
            <div className="flex-grow flex justify-center">
                <MenuItens></MenuItens>
            </div>
            <div className="absolute right-20">
                <Link href="">
                    <ConnectWalletButton />
                </Link>
            </div>
        </div>
    )
}