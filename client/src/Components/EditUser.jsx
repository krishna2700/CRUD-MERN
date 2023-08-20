/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Snackbar,
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

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const openSnackbar = () => {
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addUserDetails = async () => {
    console.log("Before API Call:", user);
    await addUser(user);
    console.log("After API Call:", user);
    setUser(defaultValue);
    openSnackbar();
    closeSnackbar();
  };

  return (
    <div>
      <Container>
        <Typography variant="h4">Edit User</Typography>
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
            inputProps={{ maxLength: 10 }}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => addUserDetails()}>
            Edit User
          </Button>
        </FormControl>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        // onClose={closeSnackbar}
        message="User Edited successfully!"
      />
    </div>
  );
};

export default EditUser;
