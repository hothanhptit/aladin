import React from "react";
import { Button, Space, Table, SearchOutlined, Input, Highlighter } from "antd";
import { useState } from "react";
import Link from "next/link";
const StaffDetails = ({ data }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  // const params = dat
  // console.log(data[1]._id);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      //   ...getColumnSearchProps('name'),
    },
    {
      title: "Avatar",
      dataIndex: "img",
      key: "img",
      render: (avatar) => (
        <img src={avatar} alt="avatar" className="staff-avatar" />
      ),
    },
    {
      title: "Join date",
      dataIndex: "joined",
      key: "joined",
    },
    {
      title: "Phone Number",
      dataIndex: "phonenumber",
      key: "phone",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Date Of Birth",
      key: "dob",
      dataIndex: "dob",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link href={`/staffs/${data._id} }`} passHref>
            <Button type="primary" onClick>
              Edit
            </Button>
          </Link>
          <Button type="danger">Delete</Button>
        </Space>
      ),
    },
  ];
  return (
    <div className="staff-details">
      <Table
        columns={columns}
        dataSource={data}
        align="center"
        size="large"
      ></Table>
      {console.log(data)}
    </div>
  );
};

export default StaffDetails;
