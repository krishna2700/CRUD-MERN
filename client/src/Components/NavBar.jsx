import { AppBar, Toolbar, styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;
const NavBar = () => {
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">Krishna's CRUD APP</Tabs>
          <Tabs to="alluser">All User</Tabs>
          <Tabs to="/adduser">Add User</Tabs>
        </Toolbar>
      </Header>
    </div>
  );
};

export default NavBar;
