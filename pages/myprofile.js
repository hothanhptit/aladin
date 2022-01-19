import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { Store } from "../util/store";
import FormAdd from "./components/FormAdd";
// import { Spin } from "antd";
import FormEdit from "./components/FormEdit"

const Myprofile = () => {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      // setUsers(user)
      router.push("/myprofile");
    } else {
      router.push("/login");
    }
  }, [userInfo, router]);

  return (
    <div>
      {userInfo ? (
        <FormAdd />
      ) : (
        <div className="spin-container">
          <FormEdit />
        </div>
      )}
    </div>
  );
};
export default Myprofile;
