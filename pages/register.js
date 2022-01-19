import styles from "../styles/Login.module.css";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { Store } from "../util/store";
import { useRouter } from "next/router";
import { useContext } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();
  const redirect = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  if (userInfo) {
    router.push("/");
  }
  const onFinish = async (values) => {
    const username = values.username;
    const password = values.password;
    const cpassword = values.cpassword;
    if (password === cpassword) {
      try {
        const { data } = await axios.post("/api/user/register", {
          username,
          password,
        });
        dispatch({ type: "USER_LOGIN", payload: data });
        Cookies.set("userInfo", data);
        router.push(redirect || "/");
        localStorage.setItem("username", username);
      } catch (error) {
        alert("Username already taken!", error);
      }
    } else {
      alert("Register failed, check your confirm password!");
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
        <Form.Item
          label="Password"
          name="cpassword"
          rules={[{ required: true, message: "Please confirm your password!" }]}
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
