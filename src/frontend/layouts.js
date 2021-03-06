import React, { Component } from "react";
import "./layouts.css";
import { Link } from "@reach/router";
import { Menu, Dropdown, Icon } from "antd";

class FrontendLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">BIDEX&nbsp;BOOKS</Link>
        </div>

        <div>
          <nav className="menu">
            <div>
              <Dropdown overlay={menu}>
                <Link to="#">
                  <Icon type="book" />
                  Books
                  <Icon type="down" />
                </Link>
              </Dropdown>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/faq">FAQ</Link>
            </div>
            <div>
              <Link to="/sigin" className="signin">
                Sign in
              </Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/books/top">Top Books</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/books/naija">Naija Books</Link>
    </Menu.Item>
  </Menu>
);

export default FrontendLayout;
