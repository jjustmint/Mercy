import { Box, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Axios from "../../AxiosInstance";
import { AxiosError } from "axios";
import Logo from "../assets/Logo.png"

const Login = ({
  handleClose = () => {},
  setIsLogin = () => {},
  setStatus = () => {},
  setUser = () => {},
}) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [usernameOrEmailError, setUsernameOrEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async () => {
    // TODO: Implement login
    // 1. validate form
    if (!validateForm()) return;
    try {
      // 2. call API to login
      const response = await Axios.post("http://localhost:8001/Login", {
        user: usernameOrEmail,
        password: password,
      });
      // 3. if success, close modal, and update user information.
      if (response.data.success) {
        setUser({
          user: response.data.data.user,
          email: response.data.data.email,
        });
        handleClose();
        setStatus({
          msg: response.data.msg,
          severity: "success",
        });
      }
    } catch (e) {
      setUsernameOrEmail("");
      setPassword("");
      // check if e are AxiosError
      if (e instanceof AxiosError) {
        // check if e.response exist
        if (e.response)
          return setStatus({
            msg: e.response.data.error,
            severity: "error",
          });
      }
      // if e is not AxiosError or response doesn't exist, return error message
      return setStatus({ msg: e.message, severity: "error" });
    }
  };
  // 4. if fail, show error message, and reset text fields value
  const validateForm = () => {
    let isValid = true;
    if (!usernameOrEmail) {
      setUsernameOrEmailError("Username or email is required");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }
    return isValid;
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        fontFamily: "cursive",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          p: 5,
          backgroundColor: "#3D405B",
          marginTop: "40px",
          borderRadius: "40px",
        }}
      >
        <img src={Logo} width="200px" />
        <TextField
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          fullWidth
          error={usernameOrEmailError !== ""}
          helperText={usernameOrEmailError}
          label="Username or Email"
          placeholder="Type your username or email"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          error={passwordError !== ""}
          helperText={passwordError}
          label="Password"
          type="password"
          placeholder="Type your password"
        />
        <Link
          to="/register"
          color="#999999"
          style={{
            alignSelf: "end",
            cursor: "pointer",
            textDecoration: "none",
            color: "#F4F1DE",
          }}
          onClick={() => setIsLogin(false)}
        >
          No account?
        </Link>
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: ".25rem",
            fontSize: "1.5rem",
            fontFamily: "cursive",
            backgroundColor: "#F2CC8F",
            borderRadius: "8px",
            border: "none",

            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0%",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </Box>
    </Box>
  );
};

export default Login;
