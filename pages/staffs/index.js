import React, { useContext } from "react";
// import { SearchOutlined } from "@ant-design/icons";
import StaffDetails from "../components/StaffDetails";
import ADMINStaffDetails from "../components/ADMINStaffDetails";
import { Store } from "../../util/store";
import styles from "../../styles/Staffs.module.css";
import axios from "axios";
import Image from "next/image";
// import axios from "axios";

export default function Staffs({ users }) {
  const { state } = useContext(Store);
  const { userInfo } = state;

  return (
    <div className={styles.staffs}>
      <div className={styles.title}>
         <Image src="/staffs-banner.jpg" alt="" width={1600} height={400}/>
      </div>
      {userInfo ? (
        userInfo.isAdmin ? (
          <div className={styles.staffsInfo}>
            <ADMINStaffDetails data={users} />
          </div>
        ) : (
          <div className={styles.staffsInfo}>
            <StaffDetails data={users} />
          </div>
        )
      ) : (
        <div className={styles.unloginMessage}>
          <p>You dont have permission to acess this page. Please login.</p>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  // const res = await axios.get("http://localhost:3001/api/employee");
  // const users = await res.json();
  const res = await axios.get(
    `http://localhost:3001/api/employee`
  );
  return {
    props: {
      users: res.data
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 1, // In seconds
    // fallback: false,
  };
}
