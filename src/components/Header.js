import React from "react";
import { Input, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./main.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { Search } = Input;
  const onSearch = (value) => {
    console.log(value);
  };
  const home = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="main-header">
        <div className="logo" onClick={home}>
          <h1>e-Shop</h1>
        </div>
        <div  className="search">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            style={{ width: 300 }}
          />
        </div>
        <div className="cart">
          <ShoppingCartOutlined style={{ fontSize: 35, color: "#52c41a" }} />
        </div>
      </div>
    </>
  );
};

export default Header;
