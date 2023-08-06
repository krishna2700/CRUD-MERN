/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const openSnackbar = () => {
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  const validateForm = useCallback(() => {
    const { name, username, email, phone } = user;
    return name && username && validateEmail(email) && validatePhone(phone);
  });

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailPattern.test(email);
    setEmailError(!isValid);
    return isValid;
  };

  const validatePhone = (phone) => {
    const phonePattern = /^\d{10}$/;
    const isValid = phonePattern.test(phone);
    setPhoneError(!isValid);
    return isValid;
  };

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (name === "email") {
      validateEmail(value);
    } else if (name === "phone") {
      validatePhone(value);
    }
  };

  const onBlurValidation = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      validateEmail(value);
    } else if (name === "phone") {
      validatePhone(value);
    }
    setIsFormValid(validateForm());
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [user, validateForm]);

  const addUserDetails = async () => {
    console.log("Before API Call:", user);
    await addUser(user);
    console.log("After API Call:", user);
    setUser(defaultValue);
    setIsFormValid(false);
    openSnackbar();
    navigate(`/alluser`);
    closeSnackbar();
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
            onBlur={(e) => onBlurValidation(e)}
            name="email"
            value={user.email}
            error={emailError}
          />
          {emailError && (
            <FormHelperText error>Email is not valid</FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            onBlur={(e) => onBlurValidation(e)}
            name="phone"
            value={user.phone}
            error={phoneError}
            inputProps={{ maxLength: 10 }}
          />
          {phoneError && (
            <FormHelperText error>Phone number is not valid</FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <Button
            variant="contained"
            onClick={() => addUserDetails()}
            disabled={!isFormValid}
          >
            Add User
          </Button>
        </FormControl>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        // onClose={closeSnackbar}
        message="User added successfully!"
      />
    </div>
  );
};

export default AddUser;
