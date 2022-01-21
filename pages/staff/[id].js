import React, { useState } from "react";
import axios from "axios";
// import styles from "../../styles/user.module.css";
import { Avatar, Button, DatePicker, Form, Input } from "antd";
import styles from "../components/FormAdd.module.css";
import moment from "moment";
import Image from "next/image";

const Employee = ({ employee }) => {
  const [file, setFile] = useState(null);
  // const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  // const { state, dispatch } = useContext(Store);
  // const { userInfo } = state;
  // const [prevUserInfo, setPrevUserInfo] = useState([]);
  // const [avatar, setAvatar] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .post("/api/employee/edit", { employeeID: userInfo?.employeeID })
  //       .then((res) => {
  //         setPrevUserInfo(res.data);
  //         // console.log(prevUserInfo)
  //       });
  //   };
  //   fetchData();
  //   setAvatar(prevUserInfo.img);
  //   // eslint-disable-next-line no-undef
  //   // Promise.all([fetchData(), setAvatar(prevUserInfo.img)]);
  // }, []);
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
      username: employee.username,
      img: returnFromCloudinary.data.url,
      joined: values.joined,
      phonenumber: values.phone,
      email: values.email,
      dob: values.dob,
    };
    await axios
      .put("/api/employee/edit", updateUser)
      .then(function (response) {
        console.log(response);
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
            { name: ["name"], value: employee.name },
            { name: ["email"], value: employee.email },
            // { name: ["avatar"], value: prevUserInfo.img },
            { name: ["phone"], value: employee.phonenumber },
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
          <Form.Item>
            <div className={styles.avatar}>
              <Avatar
                src={employee.img}
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
            <DatePicker defaultValue={moment(employee.dob)} />
          </Form.Item>
          <Form.Item
            name="joined"
            label="Join date"
            rules={[{ required: true }]}
          >
            <DatePicker defaultValue={moment(employee.joined)} />
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
          <div className={styles.editTitle}>
            You do not have permission to edit here.
          </div>
          <Form.Item label="Send">
            <Button htmlType="submit" disabled>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Employee;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/employee/${params.id}`
  );
  return {
    props: {
      employee: res.data,
    },
  };
};
