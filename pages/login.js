import styles from "../styles/Login.module.css";

import { Form, Input, Button } from "antd";
import axios from "axios";
// import Image from "next/image";
import { Store } from "../util/store";
import { useRouter } from "next/router";
import { useContext } from "react";
import Cookies from "js-cookie";
import { useAlert } from "react-alert";

const Login = () => {
  const alert = useAlert();
  const router = useRouter();
  const redirect = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  if (userInfo) {
    router.push("/");
    // console.log(userInfo)
  }
  const onFinish = async (values) => {
    const password = values.password;
    const username = values.username;
    try {
      const { data } = await axios.post("/api/user/login", {
        username,
        password,
      });

      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));

      localStorage.setItem("userInfo", JSON.stringify(data));

      const userIf = localStorage.getItem("userInfo");
      console.log("test", JSON.parse(userIf));

      // const test = Cookies.get("userInfo")
      // console.log(test, "asd");
      // console.log(data);
      router.push(redirect || "/");
    } catch (error) {
      console.log(error);
      alert.show("Login failed, username or password incorrect!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.loginform}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        className={styles.context}
      >
        <div className={styles.loginTitle}>Login</div>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
