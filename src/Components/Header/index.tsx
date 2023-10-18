"use client";
import { useAuthContext } from "@/Contexts";
import { StorageHelper } from "@/helpers";
import ConnectWalletButton from "./ConnectWalletButton";
import MenuItens from "./MenuItens";
import { MenuIcon } from "../Icons/MenuIcon";
import { OnOffIcon } from "../Icons/OnOffIcon";
import toast from "react-hot-toast";

export function Header() {
  const { logout } = useAuthContext();

  async function onLogout() {
    try {
      StorageHelper.removeItem("address");
      await logout();
      toast.success("Logout com sucesso!");
    } catch (error) {
      toast.error("Sem carteira!");
    }
  }

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
      <div className="hidden absolute right-20 lg:flex items-center gap-2">
        <ConnectWalletButton />
        <button
          onClick={onLogout}
          className="px-3 h-[51px] bg-gradient-to-r active:scale-95 transition-all duration-300 ease-in-out hover:opacity-80  from-yellow-300 to-orange-500 text-black font-bold text-16 rounded-[8px] "
          children={<OnOffIcon />}
        />
      </div>
      <div className="lg:hidden">
        <MenuIcon />
      </div>
    </div>
  );
}
