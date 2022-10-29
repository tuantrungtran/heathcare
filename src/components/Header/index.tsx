import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logo from "../../images/logo.svg";
import iconMemo from "../../images/icon_memo.svg";
import iconChallenge from "../../images/icon_challenge.svg";
import iconInfo from "../../images/icon_info.svg";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Hamburger from "hamburger-react";
import { AUTH } from "../../utils/contants";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem(AUTH);

  return (
    <div className="header">
      <Container className="d-flex align-items-center">
        <div className="branch">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="d-flex justify-content-end">
          <div className="d-flex align-items-center nav-link">
            <Link to="/my-page">
              <img src={iconMemo} alt="" />
              自分の記録
            </Link>
            <Link to="/my-record">
              <img src={iconChallenge} alt="" />
              チャレンジ
            </Link>
            <Link to="">
              <img src={iconInfo} alt="" />
              お知らせ
            </Link>
          </div>
          <Dropdown>
            <Dropdown.Toggle>
              <Hamburger color="#FF963C" hideOutline={true} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">自分の記録</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">体重グラフ</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">目標</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">選択中のコース</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">コラム一覧</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">設定</Dropdown.Item>
              <Dropdown.Divider />
              {token ? (
                <Dropdown.Item
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}>
                  Logout
                </Dropdown.Item>
              ) : (
                <Dropdown.Item
                  onClick={() => {
                    navigate("/login");
                  }}>
                  Login
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </div>
  );
}

export default Header;
