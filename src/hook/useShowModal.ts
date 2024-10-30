import { useState } from "react";

const useShowModal = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (show = false) => setShowModal(show);
  const onHide = () => {
    setShowModal(false);
  };
  const onShow = () => {
    setShowModal(true);
  };

  return { showModal, toggleModal, onHide, onShow };
};

export default useShowModal;
