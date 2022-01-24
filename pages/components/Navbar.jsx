// import { Button, Menu } from "antd";
// import { useState } from "react";
// import {
//   MailOutlined,
//   AppstoreOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
import Link from "next/link";
import { useContext } from "react";
import { Store } from "../../util/store";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import {
  AuditOutlined,
  CodeOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  PhoneOutlined,
  TeamOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  function logoutHandler() {
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    router.push("/");
    localStorage.clear("userInfo");
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
  // const userIf = {};
  // try {
  //   var userIf = localStorage.getItem("userInfo");
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div>
      <div className={styles.menu}>
        <div className={styles.leftMenu}>
          {/* <span className="logo">
            <Image
              src="/logo.png"
              alt="Picture of the author"
              width={60}
              height={52}
            />
          </span> */}
          <Link href={"/"}>
            <a>
              <span
                className={router.pathname == "/" ? styles.active : styles.icon}
              >
                <HomeOutlined />
              </span>
              <span
                className={router.pathname == "/" ? styles.active : styles.text}
              >
                <span>Home</span>
              </span>
            </a>
          </Link>
          <Link href={"/services"}>
          <a>
              <span
                className={router.pathname == "/services" ? styles.active : styles.icon}
              >
                <CodeOutlined />
              </span>
              <span
                className={router.pathname == "/services" ? styles.active : styles.text}
              >
                <span>Services</span>
              </span>
            </a>
          </Link>
          <Link href={"/recruitment"}>
          <a>
              <span
                className={router.pathname == "/recruitment" ? styles.active : styles.icon}
              >
                <AuditOutlined />
              </span>
              <span
                className={router.pathname == "/recruitment" ? styles.active : styles.text}
              >
                <span>Recruitment</span>
              </span>
            </a>
          </Link>
          <Link href={"/contact"}>
          <a>
              <span
                className={router.pathname == "/contact" ? styles.active : styles.icon}
              >
                <PhoneOutlined />
              </span>
              <span
                className={router.pathname == "/contact" ? styles.active : styles.text}
              >
                <span>Contact</span>
              </span>
            </a>
          </Link>
          {userInfo ? (
            <Link href={"/staffs"}>
              <a>
                <span
                  className={
                    router.pathname == "/staffs" ? styles.active : styles.icon
                  }
                >
                  <TeamOutlined />
                </span>
                <span
                  className={
                    router.pathname == "/staffs" ? styles.active : styles.icon
                  }
                >
                  Staffs
                </span>
              </a>
            </Link>
          ) : null}
        </div>
        <div className={styles.rightMenu}>
          {userInfo ? (
            <div>
              <button className={styles.loginBtn}>
                <Link href={"/myprofile"}>
                  <a>
                    <span
                      className={
                        router.pathname == "/myprofile/edit" ||
                        router.pathname == "/myprofile/add"
                          ? styles.active
                          : styles.icon
                      }
                    >
                      <UserOutlined />
                    </span>
                    <span
                      className={
                        router.pathname == "/myprofile/edit" ||
                        router.pathname == "/myprofile/add"
                          ? styles.active
                          : styles.icon
                      }
                    >
                      <span>My profile</span>
                      {/* {userInfo.username}&apos;s profile */}
                    </span>
                  </a>
                </Link>
              </button>
              <button className={styles.loginBtn} onClick={logoutHandler}>
                <Link href={"/"}>
                  <a>
                    <span className={styles.icon}>
                      <LogoutOutlined />
                    </span>
                    <span className={styles.text}>Logout</span>
                  </a>
                </Link>
              </button>
            </div>
          ) : (
            <div>
              <button className={styles.loginBtn}>
              <Link href={"/login"}>
                  <a>
                    <span
                      className={
                        router.pathname == "/login"
                          ? styles.active
                          : styles.icon
                      }
                    >
                      <LoginOutlined />
                    </span>
                    <span
                      className={
                        router.pathname == "/login"
                          ? styles.active
                          : styles.loginBtn
                      }
                    >
                      <span>Login</span>
                    </span>
                  </a>
                </Link>
              </button>
              <button className={styles.loginBtn}>
              <Link href={"/register"}>
                  <a>
                    <span
                      className={
                        router.pathname == "/register"
                          ? styles.active
                          : styles.icon
                      }
                    >
                      <UserAddOutlined />
                    </span>
                    <span
                      className={
                        router.pathname == "/register"
                          ? styles.active
                          : styles.loginBtn
                      }
                    >
                      <span>Register</span>
                    </span>
                  </a>
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <br className={styles.breakLine}/> */}
    </div>
  );
};

export default Navbar;
