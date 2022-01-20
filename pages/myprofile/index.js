import { useRouter } from "next/router";
import { useContext } from "react";
import { Store } from "../../util/store";

const Myprofile = () => {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  if (userInfo?.employeeID) {
    router.push("/myprofile/edit");
  } else if (userInfo) {
    router.push("/myprofile/add");
  }
  // useEffect(() => {
  //   console.log("updated")
  // },[state])
  return (
    <div>
      {console.log(userInfo)}
      {!userInfo ? <span className="un-available">Not available</span> : null}
    </div>
  );
};
export default Myprofile;
