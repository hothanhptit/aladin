import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Upload,
} from "antd";
// import { UploadOutlined } from "@ant-design/icons";

export default function FormAdd() {
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      //   onValuesChange={onFormLayoutChange}
      size="default"
    >
      <Form.Item label="Name">
        <Input />
      </Form.Item>

      {/* avartar */}
      {/* <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="longgggggggggggggggggggggggggggggggggg"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item> */}
      <Form.Item label="Gender">
        <Select>
          <Select.Option value="demo">Male</Select.Option>
          <Select.Option value="demo">Female</Select.Option>
          <Select.Option value="demo">Others</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Date Of Birth">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Join date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Phone Number">
        <Input />
      </Form.Item>
      <Form.Item label="send-btn">
        <Button>SEND</Button>
      </Form.Item>
    </Form>
  );
}
