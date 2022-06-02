import React from "react";
import axios from "axios";
// import styles from "../../styles/user.module.css";

const Post = () => {
  // const testPost = useRef();

  const post = {
    name: 'aaaaaaaaaaaa',
  };
  axios
    .post("https://blog-two-umber.vercel.app/api/posts", post)
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
