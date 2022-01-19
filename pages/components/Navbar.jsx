// import { Button, Menu } from "antd";
// import { useState } from "react";
// import {
//   MailOutlined,
//   AppstoreOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { Store } from "../../util/store";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
// import Modal from "antd/lib/modal/Modal";
// import Login from "./Login";

// const { SubMenu } = Menu;

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  function logoutHandler() {
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    router.push("/");
  }
  // const [current, setCurrent] = useState("");
  // const handleClick = (e) => {
  //   console.log(e);
  // };
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };
  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };
  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <div>
      <div className="menu">
        <div className="left-menu">
          <span className="logo">
            <Image
              src="/logo.png"
              alt="Picture of the author"
              width={60}
              height={52}
            />
            <Link href="/">
              <a>HaoHanTeam</a>
            </Link>
          </span>
          <Link href={"/"}>
            <a>Services</a>
          </Link>
          <Link href={"/"}>
            <a>Recruitment</a>
          </Link>
          <Link href={"/"}>
            <a>Contact us</a>
          </Link>
          {userInfo ? (
            <Link href={"/staffs"}>
              <a>Staffs</a>
            </Link>
          ) : null}
        </div>
        <div className="right-menu">
          {userInfo ? (
            <div>
              <button className="login-btn">
                <Link href="/myprofile">
                  <a>Hi, {userInfo.username}</a>
                  {/* <a>Hi</a> */}
                </Link>
              </button>
              <button className="sign-up-btn" onClick={logoutHandler}>
                <Link href="/">Logout</Link>
              </button>
            </div>
          ) : (
            <div>
              <button className="login-btn">
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </button>
              <button className="sign-up-btn">
                <Link href="/register">
                  <a>Sign up</a>
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
