export default function Footer() {
  return (
    <div className="flex flex-col p-12 pr-28 pl-28 gap-5 bg-[#131313]">
      <div className="flex items-center justify-between border-b-[1px] border-[#252525] pb-5">
        <img src="/images/logo.png" alt="" />
        <div className="hidden lg:flex gap-9">
          <div className="flex text-white flex-col gap-1">
            <h1 className="text-white font-archivo text-base font-bold tracking-wide leading-normal">
              Marketplace
            </h1>
            <p>Ver todas</p>
            <p>Criar ciclo</p>
            <p>Meu perfil</p>
          </div>
          <div className="flex text-white flex-col gap-1">
            <h1 className="text-white font-archivo text-base font-bold tracking-wide leading-normal">
              Vagros
            </h1>
            <p>História</p>
            <p>Paper</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white font-archivo text-xs font-light tracking-wide leading-normal">
          © 2023 Vagros NFT. All rights reserved.
        </p>
      </div>
    </div>
  );
}
