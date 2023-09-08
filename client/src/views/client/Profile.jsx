import React, { useContext, useState } from "react";
import { CORPORATE_DASHBOARD_MENU, USER_DASHBOARD_MENU } from "../../CONSTANT";
import ModalWrapper from "../../components/ModalWrapper";
import DashboardOptions from "../../components/client/DashboardOptions";
import ProfileForm from "../../components/client/ProfileForm";
import UserData from "../../contexts/UserData";
import { useNavigate } from "react-router-dom";

export default function Profile(props) {
  let navigate = useNavigate();
  const { session, setSession, updateSessionData } = useContext(UserData);

  const [modal, setModal] = useState(true);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-0 md:p-4">
        <DashboardOptions name={session?.personal?.fullName} />
        {/* Content down */}
        <ModalWrapper
          isOpen={modal}
          onClose={() => {
            setModal(!modal);
          }}
          overlay
          big
        >
          <ProfileForm
            onCancel={() => {
              navigate(`/${session?.personal?.is_staff ? "corporate":"client"}`);
            }}
            data={session?.personal}
            updateSessionData={updateSessionData}
          />
        </ModalWrapper>
      </div>
    </div>
  );
}
