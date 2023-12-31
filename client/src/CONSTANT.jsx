import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

// export const CONSTANT = {
//   server: "http://127.0.0.1:8000/", // CHANGE WITH YOUR BACKEND LINK (/ is MUST IN END)
//   admin: "http://127.0.0.1:8000/admin", // CHANGE WITH YOUR BACKEND LINK (/ is MUST IN END)
//   client: "http://localhost:5173/", // CHANGE WITH YOUR FRONTEND LINK (/ is MUST IN END)
//   STRIPE_PUBLISHABLE_KEY:
//     "pk_test_51LyNIZJwTuApoB7M37vATaRSDkaldKdAM1MbOrH38IiOkLWoLr0qNwp0sVyT39r9tSTijyIqsOJZu1ttZaIHyPP000J1pvm6XK",
// };

export const CONSTANT = {
  server: "https://stankint.pythonanywhere.com/", // CHANGE WITH YOUR BACKEND LINK (/ is MUST IN END)
  admin: "https://stankint.pythonanywhere.com/admin", // CHANGE WITH YOUR BACKEND LINK (/ is MUST IN END)
  client: "https://stankint.pythonanywhere.com/", // CHANGE WITH YOUR FRONTEND LINK (/ is MUST IN END)
  STRIPE_PUBLISHABLE_KEY:
    "pk_test_51LyNIZJwTuApoB7M37vATaRSDkaldKdAM1MbOrH38IiOkLWoLr0qNwp0sVyT39r9tSTijyIqsOJZu1ttZaIHyPP000J1pvm6XK",
};

export const USER_DASHBOARD_MENU = [
  {
    label: "Trade Management",
    to: "/client",
    isLink: true,
  },
  {
    label: "Add New Trade",
    to: "/addProduct",
    isLink: true,
  },
  {
    label: "Credit",
    to: "/client/credit",
    isLink: true,
  },
  {
    label: "News",
    to: "/news",
    isLink: true,
  },
  {
    label: "Profile",
    to: "profile",
    isLink: false,
  },
  {
    label: "Security",
    to: "security",
    isLink: false,
  },
];

export const CORPORATE_DASHBOARD_MENU = [
  {
    label: "Trade Management",
    to: "/corporate",
    isLink: true,
  },
  {
    label: "Add New Trade",
    to: "/addProduct",
    isLink: true,
  },
  {
    label: "Category Management",
    to: "category",
    isLink: false,
  },
  {
    label: "User Management",
    to: "/corporate/user",
    isLink: true,
  },
  {
    label: "Credit Management",
    to: "/corporate/credit",
    isLink: true,
  },
  {
    label: "News",
    to: "/news",
    isLink: true,
  },
  {
    label: "Profile",
    to: "profile",
    isLink: false,
  },
  {
    label: "Security",
    to: "security",
    isLink: false,
  },
];
export const checkLoginFromLogin = () => {
  return sessionStorage.getItem("loggedin") &&
    JSON.parse(sessionStorage.getItem("loggedin")).data
    ? true
    : false;
};

export const checkLoginFromNonLogin = () => {
  return sessionStorage.getItem("loggedin") &&
    JSON.parse(sessionStorage.getItem("loggedin")).data
    ? false
    : true;
};

export const smoothScrollDown = () => {
  let scrollTarget = 25 * 16; // 5rem * 16px per rem
  window.scrollTo({
    top: scrollTarget,
    behavior: "smooth",
  });
};

export const MenuRelatedLinkItem = ({ label, to }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={`/menu/${to}`}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="cursor-pointer w-fit flex flex-row items-center _font-bold text-left leading-normal tracking-normal text-lg text-black"
    >
      {label}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        strokeWidth={2}
        className={`w-4 h-4 ml-2 ${
          hover && "menu_arrow_animation"
        } transition-all duration-300 ease-in-out relative top-[0px]`}
      >
        <path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" />
      </svg>
    </Link>
  );
};

export const getPageMargins = () => {
  return `@page { margin: 2rem !important; }`;
};

export const getUserData = () => {
  if (
    sessionStorage.getItem("loggedin") &&
    JSON.parse(sessionStorage.getItem("loggedin")).data
  ) {
    // request data
    axios
      .post(CONSTANT.server + "user/", {
        id: JSON.parse(sessionStorage.getItem("loggedin")).data.id,
      })
      .then((responce) => {
        if (responce.status === 200) {
          let res = responce.data;
          sessionStorage.setItem(
            "loggedin",
            JSON.stringify({
              data: res,
            })
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    JSON.parse(sessionStorage.getItem("loggedin")).data ?? {
      id: "",
      email: "",
      setGoal: 0,
      first_name: "",
      last_name: "",
      isInterestedInNumbers: false,
      isInterestedInCounting: false,
      isInterestedInSum: false,
      isInterestedInMultiplication: false,
      isInterestedInDance: false,
    }
  );
};

export const S2B = (s) => {
  return s === "true" ? true : false;
};

export const Loader = (extra = "") => {
  return (
    <div class={`spinner-grow ${extra}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export const setMessage = (text, color) => {
  let error = document.getElementById("error");
  error.innerHTML = text;
  error.classList.add("text-" + color);
  error.style.display = "block";
};

export const resetMessage = () => {
  let error = document.getElementById("error");
  error.innerText = "";
  error.style.display = "none";
  error.classList.remove("text-red-500");
  error.classList.remove("text-green-500");
};

export const isMessage = () => {
  let error = document.getElementById("error");
  if (error.style.display === "none") {
    return false;
  }
  return true;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Set a Cookie
export function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

export function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}
