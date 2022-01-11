import { Modal } from "antd";
import React, { useState } from "react";

const Login = ({ isVisible }) => {
  const [isModalVisible, setIsModalVisible] = useState(isVisible);
  console.log(isVisible);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        keyboard="true"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Login;
