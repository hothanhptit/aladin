import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import StaffDetails from "../components/StaffDetails";
import { Button, Input } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const Staffs = ({ users }) => {
  // const [APIData, setAPIData] = useState(users);
  // const [filteredResults, setFilteredResults] = useState(APIData);
  // const [searchInput, setSearchInput] = useState("");

  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue);
  //   if (searchInput !== "") {
  //     const filteredData = APIData.filter((item) => {
  //       return Object.values(item)
  //         .join("")
  //         .toLowerCase()
  //         .includes(searchInput.toLowerCase());
  //     });
  //     setFilteredResults(filteredData);
  //   } else {
  //     setFilteredResults(APIData);
  //   }
  // };

  //
  // const [searchTerm, setSearchTerm] = useState("");
  // //   const onSearch = (value) => console.log(value);
  // const [localData, setLocalData] = useState(data);
  // useEffect(
  //   () => [
  //     // fetvh data
  //     // console.log(searchTerm, localData),
  //   ],
  //   [searchTerm]
  // );
  // const filteredData = (searchValue) => {
  //   setSearchTerm(
  //     searchValue
  //       .normalize("NFD")
  //       .replace(/[\u0300-\u036f]/g, "")
  //       .replace(/đ/g, "d")
  //       .replace(/Đ/g, "D")
  //       .replace(/\s\s+/g, " ")
  //       .trim()
  //       .toLocaleLowerCase()
  //   );
  //   // console.log(searchTerm, localData)
  //   if (searchTerm === "") {
  //     const searchValue = data?.filter((val) => {
  //       val.name
  //         .normalize("NFD")
  //         .replace(/[\u0300-\u036f]/g, "")
  //         .replace(/đ/g, "d")
  //         .replace(/Đ/g, "D")
  //         .toLocaleLowerCase()
  //         .trim()
  //         .includes(searchTerm);
  //       return val;
  //     });
  //     console.log(searchValue);
  //     setLocalData(searchValue);
  //   } else {
  //     setLocalData(data);
  //   }
  // };

  return (
    <div className="staffs">
      <div className="staffs-control">
        <Input
          suffix={suffix}
          type="text"
          placeholder="Search name..."
          onChange={(e) => searchItems(e.target.value)}
        />

        <Button type="primary" className="staffs-add">
          Add employee
        </Button>
      </div>
      <div className="staffs-info">
        <StaffDetails data={users} />
        {console.log(users)}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/employee");
  const users = await res.json();

  return {
    props: {
      users,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
export default Staffs;
