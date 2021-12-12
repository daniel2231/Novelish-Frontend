import { Button } from "antd";

export default function UploadBtn(props) {
  return (
    <Button
      {...props}
      type="primary"
      icon="upload"
      style={{
        margin: "0 8px",
        backgroundColor: "#1890ff",
        borderColor: "#1890ff",
        color: "#fff",
      }}
    />
  );
}
