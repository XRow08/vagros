import ModalComprarCotas from "./ModalComprarCotas";
import ModalConectarCarteira from "./ModalConectarCarteira";
import ModalEditarPerfil from "./ModalEditarPerfil";
import ModalRetirarGanhos from "./ModalRetirarGanhos";
import { useModalStore } from "@/stores/modalStore";
import { Modal } from "./Modal";

const Modals = () => {
  const {
    setShowModalRetirarGanhos,
    showModalRetirarGanhos,
    setShowModalWallet,
    showModalWallet,
    setShowModalComprarCotas,
    showModalComprarCotas,
    setShowModalEditarPerfil,
    showModalEditarPerfil,
  } = useModalStore();

  return (
    <>
      <Modal
        title={`showModalRetirarGanhos`}
        show={showModalRetirarGanhos}
        onClose={() => setShowModalRetirarGanhos(false)}
        children={<ModalRetirarGanhos />}
      />

      <Modal
        title={`showModalEditarPerfil`}
        show={showModalEditarPerfil}
        onClose={() => setShowModalEditarPerfil(false)}
        children={<ModalEditarPerfil />}
      />

      <Modal
        title={`showModalComprarCotas`}
        show={showModalComprarCotas}
        onClose={() => setShowModalComprarCotas(false)}
        children={<ModalComprarCotas />}
      />

      <Modal
        title={`showModalWallet`}
        show={showModalWallet}
        onClose={() => setShowModalWallet(false)}
        children={<ModalConectarCarteira />}
      />
    </>
  );
};

export default Modals;
