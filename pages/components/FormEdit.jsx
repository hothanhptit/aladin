// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
// import Cookies from "js-cookie";
import axios from "axios";
import { Store } from "../../util/store";
// import moment from "moment";
// import { UploadOutlined } from "@ant-design/icons";
import moment from "moment";

const DATE_FORMAT = "DD/MM/YYYY";

export default async function FormEdit() {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [userDetails, setUserDetails] = useState({});

  const fetchInfo = await axios.get();
  

  useEffect(async () => {
    const userDetails = await axios.get(
      "https://api.cloudinary.com/v1_1/thanhh8nt/image/upload"
    );
    console.log(userDetails);
  }, []);

  const [file, setFile] = useState(null);
  // const [resUrl, setResUrl] = useState("");
  // eslint-disable-next-line no-unused-vars

  // const { state, dispatch } = useContext(Store);
  // const { userInfo } = state;
  // console.log(state.userInfo.username)
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
    // const username = Cookies.get("userInfo")
    // console.log(username)
    // const username = await axios.get

    // setResUrl(returnFromCloudinary.data.url);
    const formatJoined = moment(
      new Date(values.joined)._d,
      moment.ISO_8601
    ).format("L");
    const formatDob = moment(new Date(values.dob._d), moment.ISO_8601).format(
      "L"
    );
    console.log(formatDob);
    setUserDetails({
      name: values.name,
      username: "userInfo.username",
      img: returnFromCloudinary.data.url,
      joined: formatJoined,
      phonenumber: values.phone,
      email: "abc",
      dob: formatDob,
    });
    // console.log(updateUser);
    await axios
      .post("/api/employee", userDetails)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      //   onValuesChange={onFormLayoutChange}
      size="default"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item
        // name="avatar"
        label="Avatar"
        valuePropName="fileList"
        // getValueFromEvent={normFile}
        extra="Upload avatar here"
      >
        <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </Form.Item>
      {/* <Form.Item label="Gender">
        <Select>
          <Select.Option value="demo">Male</Select.Option>
          <Select.Option value="demo">Female</Select.Option>
          <Select.Option value="demo">Others</Select.Option>
        </Select>
      </Form.Item> */}
      <Form.Item name="dob" label="Date Of Birth">
        <DatePicker format={DATE_FORMAT} />
      </Form.Item>
      <Form.Item name="joined" label="Join date">
        <DatePicker format={DATE_FORMAT} />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Phone Number">
        <Input />
      </Form.Item>
      <Form.Item label="Send">
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
}
