import {Link} from "react-router-dom";
import React from "react";
import {Menu} from "antd";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/about/">About</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/todolist/">TodoList</Link>
          {/*<Link to="/users/">Users</Link>*/}
        </Menu.Item>
        {/*      <SubMenu title="SubMenu">
        <Menu.Item>SubMenuItem</Menu.Item>
      </SubMenu>*/}
      </Menu>
    </div>

    /*<nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
      </ul>
    </nav>*/
  );
};

export default Navigation;
