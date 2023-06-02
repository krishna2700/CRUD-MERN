import { AppBar, Toolbar, styled } from "@mui/material";
import React from "react";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled("p")`
  font-size: 20px;
  margin-right: 20px;
`;
const NavBar = () => {
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Tabs>Krishna's CRUD APP</Tabs>
          <Tabs>All User</Tabs>
          <Tabs>Add User</Tabs>
        </Toolbar>
      </Header>
    </div>
  );
};

export default NavBar;
