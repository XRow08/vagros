import ModalComprarCotas from "../ModalComprarCotas";
import ModalConectarCarteira from "../ModalConectarCarteira";
import ModalEditarPerfil from "../ModalEditarPerfil";
import ModalRetirarGanhos from "../ModalRetirarGanhos";
import { Modal } from "./Modal";
import { useModalStore } from "@/stores/modalStore";

const Modals = () => {
  const { setShowModalRetirarGanhos, showModalRetirarGanhos } = useModalStore()
  const { setShowModalEditarPerfil, showModalEditarPerfil } = useModalStore()
  const { setShowModalComprarCotas, showModalComprarCotas } = useModalStore()
  const { setShowModalWallet, showModalWallet } = useModalStore()



  return (
    <>
      <Modal title={`Mint`}
        show={showModalRetirarGanhos? showModalRetirarGanhos : showModalEditarPerfil? showModalEditarPerfil : showModalComprarCotas? showModalComprarCotas : showModalWallet? showModalWallet : false}
        onClose={() => setShowModalRetirarGanhos(false)}
      >
        {showModalRetirarGanhos?(<ModalRetirarGanhos></ModalRetirarGanhos>) : showModalEditarPerfil? (<ModalEditarPerfil/>) : showModalComprarCotas? (<ModalComprarCotas/>) : showModalWallet? (<ModalConectarCarteira/>) : ""}
        
      </Modal >
    </>
  );
};

export default Modals;
