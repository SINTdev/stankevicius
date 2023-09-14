import React, { useState, useEffect } from "react";
import ModalWrapper from "../components/ModalWrapper";
import CategoryManagement from "../components/corporate/CategoryManagement";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import ProfileForm from "../components/client/ProfileForm";
import DoubleAuthForm from "../components/client/DoubleAuthForm";

export default function ModalHandler({
  config,
  reset,
  session,
  setter,
  updateSessionData,
}) {
  let navigate = useNavigate();
  let EMPTY_MODAL = {
    isOpen: false,
    content: "",
    onYes: () => {},
    isCancel: false,
  };

  const [modal, setModal] = useState(EMPTY_MODAL);
  if (config?.category || config?.profile || config?.security) {
    return (
      <>
        <Modal
          isOpen={modal.isOpen}
          onClose={() => {
            setModal(EMPTY_MODAL);
          }}
          text={modal.content}
          onYes={modal.onYes}
          isCancel={modal.isCancel}
        />
        <ModalWrapper
          isOpen={true}
          onClose={() => {
            reset();
          }}
          big
        >
          {config?.profile && (
            <ProfileForm
              onCancel={() => {
                reset();
              }}
              data={session?.personal}
              updateSessionData={updateSessionData}
            />
          )}
          {config?.security && (
            <DoubleAuthForm
              onCancel={() => {
                reset();
              }}
              is2FA={session?.personal?.is2FA}
              user_id={session?.personal?.id}
              session={session}
              updateSessionData={updateSessionData}
            />
          )}
          {config?.category && (
            <CategoryManagement
              onCancel={() => {
                reset();
              }}
              setModal={setModal}
              modal={modal}
              EMPTY_MODAL={EMPTY_MODAL}
            />
          )}
        </ModalWrapper>
      </>
    );
  }

  return null;
}
