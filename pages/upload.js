import styled from "styled-components";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import React, { useState } from "react";
import { Upload, message, Form, Input, InputNumber, Button } from "antd";

const MainDiv = styled.div`
  padding: 100px 50px;
`;

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export default function UploadPage() {
  const onFinish = (values) => {
    console.log(values);
  };

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <>
      <Navbar />

      <MainDiv>
        <h1>Upload your book</h1>

        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 3 && "+ Upload"}
        </Upload>

        <br />
        <br />
        <br />
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "age"]}
            label="Age"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </MainDiv>
    </>
  );
}
