import styles from "../styles/Login.module.css";
import { Form, Input, Button } from "antd";
import axios from "axios";
// import Image from "next/image";
const Login = () => {
  const onFinish = async (values) => {
    const username = values.username;
    const password = values.password;
    try {
      // eslint-disable-next-line no-unused-vars
      const { data } = await axios.post("/api/user/login", {
        username,
        password,
      });
      alert("Login Successed")
    } catch (error) {
      alert("Login Failed", error);
    }
    // console.log(username, password);
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
        // initialValues={{ remember: true }}
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
          <Input />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          {/* <Checkbox>Remember me</Checkbox> */}
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li>AladinTech</li>
          <li></li>
          <li></li>
          <li>HaoHan</li>
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
