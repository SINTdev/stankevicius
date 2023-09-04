import React, { useContext, useState } from "react";
import { USER_DASHBOARD_MENU } from "../../CONSTANT";
import ModalWrapper from "../../components/ModalWrapper";
import DashboardOptions from "../../components/client/DashboardOptions";
import DoubleAuthForm from "../../components/client/DoubleAuthForm";
import UserData from "../../contexts/UserData";

export default function Security(props) {
  const { session, setSession } = useContext(UserData);

  const [modal, setModal] = useState(true);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-0 md:p-4">
        <DashboardOptions
          name={session?.personal?.fullName}
          menus={USER_DASHBOARD_MENU}
        />
        {/* Content down */}
        <ModalWrapper
          isOpen={modal}
          onClose={() => {
            setModal(!modal);
          }}
          overlay
        >
          <DoubleAuthForm
            setModalSetting={() => {}}
            updateSessionData={() => {}}
          />
        </ModalWrapper>
      </div>
    </div>
  );
}
