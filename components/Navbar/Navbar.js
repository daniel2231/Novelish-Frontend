import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined, HomeOutlined, UploadOutlined, UserOutlined} from "@ant-design/icons";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #0f0f0f;
  display: absolute;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const MenuBtn = styled(Button)`
  margin-left: 20px;
`;

const Menu = styled.div`
  float: right;
`;

const InnerDivNav = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  .logo {
    display: flex;
    align-items: center;
    a {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
    }
  }
`;

const StyledA = styled.a`
  display: block;
  font-size: 16px;
  padding: 10px 0;
`

function Navbar(props) {
  const [visible, setVisible] = useState(false);

  return (
    <Nav className="menuBar">
      <InnerDivNav>
        <div className="logo">
          <a href="">Novelish</a>
        </div>
        <Menu>
          {props.page === "main" ? (
            <Button ghost href="/login">
              Login / Sign Up
            </Button>
          ) : (
            <>
              <MenuBtn ghost onClick={() => setVisible(true)}>
                <MenuOutlined />
              </MenuBtn>
              <Drawer
                title="Menu"
                placement="right"
                closable={false}
                onClose={() => setVisible(false)}
                visible={visible}
              >
                <Link href="/main">
                  <StyledA><HomeOutlined /> Home</StyledA>
                </Link>
                <Link href="/upload">
                  <StyledA><UploadOutlined /> Upload</StyledA>
                </Link>
                <Link href="/account">
                  <StyledA><UserOutlined /> My Account</StyledA>
                </Link>
              </Drawer>
            </>
          )}
        </Menu>
      </InnerDivNav>
    </Nav>
  );
}

export default Navbar;
