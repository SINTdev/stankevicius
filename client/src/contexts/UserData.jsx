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
      offer: false,
      is2FA: false,
      credits: 0,
    },
    isLoaded: false,
    isLoggedIn: false,
  },
  setSession: () => {},
  updateSessionData: () => {},
  configureModal: () => {},
  fetchCategories: () => {},
  changePushProductChange: () => {},
  categories: [],
  pushProductChange: false,
  globalModals: {
    profile: false,
    security: false,
    category: false,
  },
});

export default UserData;
