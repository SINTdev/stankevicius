import React, { useState, useEffect } from "react";
import ModalWrapper from "../components/ModalWrapper";
import CategoryManagement from "../components/corporate/CategoryManagement";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import ProfileForm from "../components/client/ProfileForm";
import DoubleAuthForm from "../components/client/DoubleAuthForm";
import VerifyOTP from "../auth/VerifyOTP";

export default function ModalHandler({
  config,
  reset,
  session,
  setter,
  updateSessionData,
  fetchCategories,
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
            // if (
            //   !session?.personal?.is2FA &&
            //   session?.personal?.secret2FA !== "" &&
            //   config?.security
            // ) {
            //   setter("otp");
            // } else {
            //   reset();
            // }
            reset();
          }}
          big={!config?.security}
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
                // if (
                //   !session?.personal?.is2FA &&
                //   session?.personal?.secret2FA !== ""
                // ) {
                //   setter("otp");
                // } else {
                //   reset();
                // }
                reset();
              }}
              onEnable={() => {
                setModal({
                  isOpen: true,
                  content:
                    "Double authentication is successfully enabled. Make sure to scan the QR Code.",
                  onYes: () => {
                    setModal(EMPTY_MODAL);
                  },
                  isCancel: false,
                });
              }}
              is2FA={session?.personal?.is2FA}
              user_id={session?.personal?.id}
              email={session?.personal?.email}
              session={session}
              updateSessionData={updateSessionData}
              hideError={config?.otp || false}
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
              refreshCategories={fetchCategories}
            />
          )}
        </ModalWrapper>
        {/* {config?.otp && (
          <ModalWrapper
            isOpen={true}
            onClose={() => {
              if (
                !session?.personal?.is2FA &&
                session?.personal?.secret2FA !== "" &&
                config?.security
              ) {
                setter("otp");
              } else {
                reset();
              }
            }}
            big
          >
            <VerifyOTP
              validate={true}
              user_id={session?.personal?.id}
              email={session?.personal?.email}
              updateSessionData={updateSessionData}
              onCancel={() => {
                reset();
              }}
            />
          </ModalWrapper>
        )} */}
      </>
    );
  }

  return null;
}
