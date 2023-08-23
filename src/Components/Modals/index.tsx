import ModalConectarCarteira from "../ModalConectarCarteira";
import { Modal } from "./Modal";
import { useModalStore } from "@/stores/modalStore";

const Modals = () => {
  const { setShowModalWallet, showModalWallet } = useModalStore()

  return (
    <>
      <Modal title={`Mint`}
        show={showModalWallet}
        onClose={() => setShowModalWallet(false)}
      >
        <ModalConectarCarteira />
      </Modal >
    </>
  );
};

export default Modals;
