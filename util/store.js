import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
// const userIf = JSON.parse(localStorage.getItem("userInfo"));
// console.log(userIf)

// async function fetchData() {
//   const { data } = await axios.post("/api/user/login", {
//     username,
//     password,
//   });
// }
const initialState = {
  userInfo: Cookies.get("userInfo") ? Cookies.get("userInfo") : null,
  // localStorage.getItem("userInfo")
  //   ? JSON.parse(localStorage.getItem("userInfo"))
  //   : null,

  // use localstorage ?
  // userUpdated: false,
  // userDetails: null
};

function reducer(state, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };
    case "USER_LOGOUT":
      return { ...state, userInfo: null };
    // case "UPDATE_USER_INFO":
    //     return {...state, userDetails: action.payload}
    case "USER_ADD":
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
