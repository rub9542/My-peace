import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import { ModalHeaderSection, modalStyle } from "./bookAppointmentStyle";
import ModalContent from "./modalContent";

export default function BookAppointmentModal({
  title,
  open,
  onCloseModal,
  children,
}) {
  const [displayMsg, setDisplayMsg] = useState(false);
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);
  return (
    <Modal
      style={modalStyle}
      isOpen={open}
      onRequestClose={onCloseModal}
      ariaHideApp={false}
    >
      <ModalHeaderSection>
        <h2>{!displayMsg ? title : ""}</h2>
        <svg
          className="cursor"
          onClick={onCloseModal}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.1054 17.7694C19.2814 17.9472 19.3802 18.1872 19.3802 18.4374C19.3802 18.6876 19.2814 18.9276 19.1054 19.1054C18.9262 19.2786 18.6867 19.3755 18.4374 19.3755C18.1881 19.3755 17.9486 19.2786 17.7694 19.1054L9.9999 11.3241L2.23037 19.1054C2.05118 19.2786 1.81167 19.3755 1.5624 19.3755C1.31314 19.3755 1.07363 19.2786 0.894434 19.1054C0.718388 18.9276 0.619629 18.6876 0.619629 18.4374C0.619629 18.1872 0.718388 17.9472 0.894434 17.7694L8.67568 9.9999L0.894434 2.23037C0.744937 2.04822 0.668539 1.81697 0.680098 1.58161C0.691657 1.34625 0.790348 1.1236 0.956975 0.956976C1.1236 0.790349 1.34625 0.691658 1.58161 0.680099C1.81697 0.668539 2.04822 0.744938 2.23037 0.894434L9.9999 8.67568L17.7694 0.894434C17.9516 0.744938 18.1828 0.668539 18.4182 0.680099C18.6536 0.691658 18.8762 0.790349 19.0428 0.956976C19.2095 1.1236 19.3081 1.34625 19.3197 1.58161C19.3313 1.81697 19.2549 2.04822 19.1054 2.23037L11.3241 9.9999L19.1054 17.7694Z"
            fill="black"
          />
        </svg>
      </ModalHeaderSection>
      {children || (
        <ModalContent
          handleClose={onCloseModal}
          displayMsg={displayMsg}
          setDisplayMsg={setDisplayMsg}
        />
      )}
    </Modal>
  );
}
