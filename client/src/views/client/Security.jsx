import React, { useContext, useEffect, useState } from "react";
import { CONSTANT, USER_DASHBOARD_MENU } from "../../CONSTANT";
import ModalWrapper from "../../components/ModalWrapper";
import DashboardOptions from "../../components/client/DashboardOptions";
import DoubleAuthForm from "../../components/client/DoubleAuthForm";
import UserData from "../../contexts/UserData";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Security(props) {
  let navigate = useNavigate();
  const { session, setSession, updateSessionData } = useContext(UserData);

  const [modal, setModal] = useState(true);

  const fetchURL = async () => {
    await axios
      .get(CONSTANT.server + `authentication/verify2fa/${session.personal?.id}`)
      .then((responce) => {
        setUrl(responce?.data?.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (session.isLoaded && session.isLoggedIn) {
      fetchURL();
    }
  }, [session]);

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
        >
          <DoubleAuthForm
            onCancel={() => {
              navigate(`/${session?.personal?.is_staff ? "corporate":"client"}`);
            }}
            is2FA={session?.personal?.is2FA}
            user_id={session?.personal?.id}
            updateSessionData={updateSessionData}
            url={url}
          />
        </ModalWrapper>
      </div>
    </div>
  );
}
