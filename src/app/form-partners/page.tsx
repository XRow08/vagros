import FormInfoPessoal from "@/Components/FormInfoPessoal";
import FormRebanho from "@/Components/FormRebanho";
import WalletNaoConectada from "@/Components/Notificacoes/Alerta/WalletNaoConectada";
import WalletConectada from "@/Components/Notificacoes/Exito/WalletConectada";
import ConectarWalletPrimeiro from "@/Components/Notificacoes/Informacoes/ConectarWalletPrimeiro";

export default function FormParceiros() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen inset-0 bg-[url('/images/FormParceirosBg.png')] bg-cover bg-center backdrop-filter backdrop-blur-md">
      <FormRebanho />
    </div>
  );
}
