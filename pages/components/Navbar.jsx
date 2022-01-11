import { Button, Menu } from "antd";
import { useState } from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import Modal from "antd/lib/modal/Modal";
// import Login from "./Login";

const { SubMenu } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("");
  const handleClick = (e) => {
    console.log(e);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
            />{" "}
            <Link href="/">
              <a>AladinTech</a>
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
          <Link href={"/staffs"}>
            <a>Staffs</a>
          </Link>
        </div>
        <div className="right-menu">
          <div>
            <button className="login-btn" onClick={showModal}>
              <Link href="login">Login</Link>
            </button>
            <button className="sign-up-btn">
              <Link href="login">Sign up</Link>
            </button>
          </div>
        </div>
      </div>
      {/* <hr/> */}
    </div>
  );
};

export default Navbar;
