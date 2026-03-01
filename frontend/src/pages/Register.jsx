import { Box, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AxiosError } from "axios";
import Axios from "../../AxiosInstance";
import Logo from "../assets/Logo.png";

const Register = ({ setIsLogin = () => {}, setStatus = () => {} }) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");

  const handleSubmit = async () => {
    // TODO: Implement login
    // 1. validate form
    if (!validateForm()) return;
    // 2. send request to server
    try {
      const response = await Axios.post("http://localhost:8001/Register", {
        user: username,
        email: email,
        password: password,
      });
      // 3. if successful, change modal to login mode
      if (response.data.success) {
        setIsLogin(true);
        setStatus({ msg: response.data.msg, severity: "success" });
      }
    } catch (e) {
      // 4. if fail, show error message alert, and reset password fields
      setPassword("");
      setRePassword(""); // check if e are AxiosError
      if (e instanceof AxiosError)
        if (e.response)
          // check if e.response exist
          return setStatus({
            msg: e.response.data.error,
            severity: "error",
          }); // if e is not AxiosError or response doesn't exist, return error message
      return setStatus({
        msg: e.message,
        severity: "error",
      });
    }
  };
  const validateForm = () => {
    let isValid = true; // check user
    if (!username) {
      setUsernameError("Username is required");
      isValid = false;
    } // check email
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } // check password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }
    if (!rePassword) {
      setRePasswordError("Confirm password is required");
    }
    if (password !== rePassword) {
      setPasswordError("Password is not match");
      setRePassword("");
      setPassword("");
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          error={usernameError !== ""}
          helperText={usernameError}
          label="Username"
          placeholder="Type your username"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          error={emailError !== ""}
          helperText={emailError}
          label="Email"
          placeholder="Example@email.com"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          error={passwordError !== ""}
          helperText={passwordError}
          type="password"
          label="Password"
          placeholder="Type your password"
        />
        <TextField
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          fullWidth
          error={rePasswordError !== ""}
          helperText={rePasswordError}
          type="password"
          label="Confirm password"
          placeholder="Type your password"
        />
        <Link
          to="/login"
          style={{
            alignSelf: "end",
            cursor: "pointer",
            textDecoration: "none",
            color: "#F4F1DE",
          }}
          // sx={{ alignSelf: "end", cursor: "pointer", }}
        >
          Already have account?
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
          Sign up
        </button>
      </Box>
    </Box>
  );
};
export default Register;
