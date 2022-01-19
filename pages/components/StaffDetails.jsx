import React from "react";
// eslint-disable-next-line no-unused-vars
import { Button, Space, Table, SearchOutlined, Input, Highlighter, Avatar } from "antd";
// import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";

// const date = moment("2022-01-12T15:04:35.280+00:00", [moment.ISO_8601, 'DDMMYYYY']).format('L');
const StaffDetails = ({ data }) => {
  // const [searchText, setSearchText] = useState("");
  // const [searchedColumn, setSearchedColumn] = useState("");
  // const params = dat
  // console.log(data[1]._id);
  function handleEdit() {}
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
          styles={{width: 64}}
        />
      ),
    },
    {
      title: "Join date",
      dataIndex: "joined",
      key: "joined",
      // render: (text) => {
      //     <span>
      //       {text}
      //       aa
      //       {moment(text, [moment.ISO_8601, "DDMMYYYY"]).format("L")}
      //     </span>;
      // },
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
      dataIndex: "_id",
      render: (text) => (
        <Space size="middle">
          <Link href={decodeURIComponent(`/staff/${text}`)} passHref>
            <Button type="primary" onClick={handleEdit}>
              View
            </Button>
          </Link>
          <Button type="danger" disabled>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div className="staff-details">
      {data ? (
        <Table
          columns={columns}
          dataSource={data}
          align="center"
          size="large"
        ></Table>
      ) : null}
      {/* {console.log(date)} */}
    </div>
  );
};

export default StaffDetails;
