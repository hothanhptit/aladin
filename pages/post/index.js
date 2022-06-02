import React, { useState } from "react";
import axios from "axios";
// import styles from "../../styles/user.module.css";
import { Avatar, Button, DatePicker, Form, Input } from "antd";
import styles from "../components/FormAdd.module.css";
import moment from "moment";
import Image from "next/image";
import { useRef } from "react/cjs/react.production.min";

const Post = () => {
  // const testPost = useRef();

  const post = {
    name: 'aaaaaaaaaaaa',
  };
  axios
    .post("/api/posts", post)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div>
      test
      <input type="text"></input>
    </div>
  );
};
export default Post;

// export const getServerSideProps = async ({ params }) => {
//   const res = await axios.get(
//     `http://localhost:3001/api/employee/${params.id}`
//   );
//   return {
//     props: {
//       employee: res.data,
//     },
//   };
// };
