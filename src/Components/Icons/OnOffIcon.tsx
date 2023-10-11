import { useAuthContext } from "@/Contexts";
import { StorageHelper } from "@/helpers";

export function OnOffIcon() {
  const { logout } = useAuthContext();

  async function onLogout() {
    StorageHelper.removeItem("address");
    await logout();
  }

  return (
    <svg
      onClick={onLogout}
      className="cursor-pointer hover:bg-black hover:bg-opacity-40 p-2 rounded-full transition-all duration-300 ease-in-out"
      width="40"
      height="40"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M11 6V8M14 6.99963C15.2144 7.91184 16 9.36418 16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 9.36418 6.78555 7.91184 8 6.99963M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
