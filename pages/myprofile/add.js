import React, { useContext, useState } from "react";
import { Form, Input, Button, DatePicker, Avatar } from "antd";
// import Cookies from "js-cookie";
import axios from "axios";
// import moment from "moment";
import styles from "../components/FormAdd.module.css";
import { Store } from "../../util/store";
import { useAlert } from "react-alert";
import Image from "next/image";

const DATE_FORMAT = "DD/MM/YYYY";

export default function FormAdd() {
  const alert = useAlert();
  const [file, setFile] = useState(null);
  // const [resUrl, setResUrl] = useState("");
  // eslint-disable-next-line no-unused-vars
  // const router = useRouter();
  // const redirect = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [avatar, setAvatar] = useState("");

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = async (values) => {
    // dispatch({
    //   type: "USER_LOGIN",
    //   payload: { ...userInfo, username: usernameFromCookie },
    // });
    const sendData = new FormData();
    sendData.append("file", file);
    sendData.append("upload_preset", "xdgpobh2");
    const returnFromCloudinary = await axios.post(
      "https://api.cloudinary.com/v1_1/thanhh8nt/image/upload",
      sendData
    );
    setAvatar(returnFromCloudinary.data.url);
    // const formatJoined = moment(new Date(values.joined)._d, moment.ISO_8601).format("L");
    // const formatDob = moment(new Date(values.dob._d), moment.ISO_8601).format("L");
    const updateUser = {
      name: values.name,
      username: userInfo.username,
      img: returnFromCloudinary.data.url,
      joined: values.joined,
      phonenumber: values.phone,
      email: values.email,
      dob: values.dob,
    };
    await axios
      .post("/api/employee", updateUser)
      .then(function (response) {
        console.log(response);
        const updateUserInfo = userInfo;
        updateUserInfo.employeeID = response.data._id;
        dispatch({ action: "USER_ADD", updateUserInfo });
        alert.show("Add info successed!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className={styles.addTitle}>
        <Image src="/Employee_U.png" alt="bg-add" width={1600} height={300} />
        <p className={styles.addTitleText}>Add infomation</p>
      </div>
      <div className={styles.formAdd}>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          size="default"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >

          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Avatar"
            valuePropName="fileList"
            extra="Upload avatar here"
            rules={[{ required: true }]}
          >
            <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </Form.Item>
          {avatar ? (
            <Form.Item>
              <div className={styles.avatar}>
                <Avatar
                  src={avatar}
                  alt="avatar"
                  size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 80,
                    xxl: 100,
                  }}
                  // width={150}
                  // height={150}
                  styles={{ width: 64 }}
                />
              </div>
            </Form.Item>
          ) : null}
          {/* <Form.Item label="Gender">
        <Select>
        <Select.Option value="demo">Male</Select.Option>
        <Select.Option value="demo">Female</Select.Option>
        <Select.Option value="demo">Others</Select.Option>
        </Select>
      </Form.Item> */}
          <Form.Item
            name="dob"
            label="Date Of Birth"
            rules={[{ required: true }]}
          >
            <DatePicker format={DATE_FORMAT} />
          </Form.Item>
          <Form.Item
            name="joined"
            label="Join date"
            rules={[{ required: true }]}
          >
            <DatePicker format={DATE_FORMAT} />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Send">
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
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
}
