import React from "react";

const UserData = React.createContext({
  session: {
    access_token: "",
    personal: {
      email: "",
      fullName: "",
      countryCode: "",
      phoneNumber: "",
      companyName: "",
      companyURL: "",
      is_staff: false,
    },
    isLoaded: false,
    isLoggedIn: false,
  },
  setSession: () => {},
  updateSessionData: () => {},
});

export default UserData;
