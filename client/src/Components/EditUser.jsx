/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUser } from "../service/api";

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
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(defaultValue);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

  useEffect(() => {
    loadUserDetails();
  }, []);

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const editUserDetails = async () => {
    console.log("Before API Call:", user);
    await editUser(user, id);
    console.log("After API Call:", user);
    setUser(defaultValue);
    navigate(`/alluser`);
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
          <InputLabel>userName</InputLabel>
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
          <Button variant="contained" onClick={() => editUserDetails()}>
            Edit User
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default EditUser;
