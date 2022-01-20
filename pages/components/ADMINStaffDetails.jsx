import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Button, Space, Table, Avatar, Input } from "antd";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useAlert } from "react-alert";
import moment from "moment";
import styles from "../../styles/Staffs.module.css";

const ADMINStaffDetails = ({ data }) => {
  const alert = useAlert();
  // const [listUser, setListUser] = useState(data);
  const [filteredResults, setFilteredResults] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(
      e.target.value
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .replace(/\s\s+/g, " ")
        .trim()
        .toLocaleLowerCase()
    );
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const searchValue = data?.filter(function (val) {
        return val.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/đ/g, "d")
          .replace(/Đ/g, "D")
          .toLocaleLowerCase()
          .trim()
          .includes(searchTerm);
      });
      setFilteredResults(searchValue);
    } else {
      setFilteredResults(data);
    }
  }, [searchTerm, data]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
          styles={{ width: 64 }}
        />
      ),
    },
    {
      title: "Join date",
      dataIndex: "joined",
      key: "joined",
      render: (text) => {
        return <span>{moment(text).format("DD/MM/YYYY").toString()}</span>;
      },
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
      render: (text) => {
        return <span>{moment(text).format("DD/MM/YYYY").toString()}</span>;
      },
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "_id",
      render: (text) => (
        <Space size="middle">
          <Link href={decodeURIComponent(`/staff/${text}`)} passHref>
            <Button type="primary">View</Button>
          </Link>
          <Button
            type="danger"
            onClick={async () => {
              await axios
                .delete(decodeURIComponent(`/api/employee/${text}`), {
                  id: text,
                })
                .then((res) => {
                  console.log(res);
                  alert.show("Delete Successed!");
                  setFilteredResults((listUser) => {
                    return listUser.filter((user, _id) => {
                      return _id !== text;
                    });
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div>
        <div className={styles.staffsControl}>
          <Input
            // suffix={suffix}
            type="text"
            placeholder="Search name..."
            // eslint-disable-next-line no-undef
            onChange={(e) => handleChange(e)}
          />
          <Button type="primary" className={styles.staffsAdd}>
            Add employee
          </Button>
        </div>
      </div>
      <div className="staff-details">
        {data ? (
          <Table
            columns={columns}
            dataSource={filteredResults}
            align="center"
            size="large"
          ></Table>
        ) : null}
      </div>
    </div>
  );
};

export default ADMINStaffDetails;
