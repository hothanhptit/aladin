import React, { useState, useEffect, useContext } from "react";
import { Form, Input, Button, DatePicker, Avatar } from "antd";
import axios from "axios";
import styles from "../components/FormAdd.module.css";
import { Store } from "../../util/store";
import moment from "moment";
import { useAlert } from "react-alert";
import Image from "next/image";

const DATE_FORMAT = "DD/MM/YYYY";

export default function FormEdit() {
  const alert = useAlert();
  const [file, setFile] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [prevUserInfo, setPrevUserInfo] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .post("/api/employee/edit", { employeeID: userInfo?.employeeID })
        .then((res) => {
          setPrevUserInfo(res.data);
          // console.log(prevUserInfo)
        });
    };
    fetchData();
    setAvatar(prevUserInfo.img);
    // eslint-disable-next-line no-undef
    // Promise.all([fetchData(), setAvatar(prevUserInfo.img)]);
  }, [prevUserInfo.img]);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = async (values) => {
    const sendData = new FormData();
    sendData.append("file", file);
    sendData.append("upload_preset", "xdgpobh2");
    const returnFromCloudinary = await axios.post(
      "https://api.cloudinary.com/v1_1/thanhh8nt/image/upload",
      sendData
    );
    // setAvatar(returnFromCloudinary.body.url);
    // const formatJoined = moment(new Date(values.joined)._d, moment.ISO_8601).format("L");
    // const formatDob = moment(new Date(values.dob._d), moment.ISO_8601).format("L");
    const updateUser = {
      name: values.name,
      username: userInfo.username,
      img: returnFromCloudinary?.data.url ? prevUserInfo.img : null,
      joined: values.joined,
      phonenumber: values.phone,
      email: values.email,
      dob: values.dob,
    };
    await axios
      .put("/api/employee/edit", updateUser)
      .then(function (response) {
        console.log(response);
        alert.show("Edit Successed!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className={styles.addTitle}>
        <Image src="/Employee_U.png" alt="bg-add" width={1600} height={300} />
        <p className={styles.addTitleText}>Edit infomation</p>
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
          fields={[
            { name: ["name"], value: prevUserInfo.name },
            { name: ["email"], value: prevUserInfo.email },
            // { name: ["avatar"], value: prevUserInfo.img },
            { name: ["phone"], value: prevUserInfo.phonenumber },
          ]}
        >
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input value="{prevUserInfo.name}" />
          </Form.Item>
          <Form.Item
            label="Avatar"
            valuePropName="fileList"
            extra="Upload avatar here"
            rules={[{ required: true }]}
          >
            <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </Form.Item>
          {prevUserInfo ? (
            <Form.Item>
              <div className={styles.avatar}>
                <Avatar
                  src={prevUserInfo.img}
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
          {/* {avatar ? (
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
          ) : null} */}
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
            <DatePicker
              defaultValue={moment(prevUserInfo.dob)}
              format={DATE_FORMAT}
            />
          </Form.Item>
          <Form.Item
            name="joined"
            label="Join date"
            rules={[{ required: true }]}
          >
            <DatePicker
              defaultValue={moment(prevUserInfo.joined)}
              format={DATE_FORMAT}
            />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input value={prevUserInfo.email} />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true }]}
          >
            <Input value={prevUserInfo.phonenumber} />
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
