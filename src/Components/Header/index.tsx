"use client";
import ConnectWalletButton from "./ConnectWalletButton";
import MenuItens from "./MenuItens";
import { MenuIcon } from "../Icons/MenuIcon";
import { OnOffIcon } from "../Icons/OnOffIcon";

export function Header() {
  return (
    <div className="fixed z-50 top-0 w-full min-h-[87px] backdrop-blur-md rounded-bl-[45px] rounded-br-[45px] flex items-center justify-between lg:bg-[#050505] lg:bg-opacity-40 pr-10 pl-10">
      <a href="/">
        <img
          className="absolute top-0 left-10 lg:left-20"
          src="/images/Logo.svg"
          alt="Vagros Logo"
        />
      </a>
      <div className="flex-grow hidden lg:flex justify-center">
        <MenuItens />
      </div>
      <div className="hidden absolute right-20 lg:flex items-center gap-4">
        <ConnectWalletButton />
        <OnOffIcon />
      </div>
      <div className="lg:hidden">
        <MenuIcon />
      </div>
    </div>
  );
}
