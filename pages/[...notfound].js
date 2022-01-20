import { Button, Result } from "antd";
import Link from "next/link";

const Error = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link href="/">
            <a>
              <Button type="primary">Back Home</Button>
            </a>
          </Link>
        }
      />
      ,
    </div>
  );
};

export default Error;
