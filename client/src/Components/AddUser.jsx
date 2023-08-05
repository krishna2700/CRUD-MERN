import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    console.log("Before API Call:", user);
    await addUser(user);
    console.log("After API Call:", user);
    setUser(defaultValue);
  };

  return (
    <div>
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="name"
            value={user.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            value={user.username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={user.email}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={user.phone}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => addUserDetails()}>
            Add User
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default AddUser;
