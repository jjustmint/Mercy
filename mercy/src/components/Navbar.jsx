import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";

import Logo from "../assets/Logo.png";
import Profile from "../assets/profile.svg"

const Navbar = () => {
  
  return (
    <Stack>
      <Stack
        className="TopNav"
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{
          backgroundColor: "#3D405B",
          height: "147px",
          fontSize: { xs: 10 },
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
        >
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              style={{
                width: "140px",
                height: "140px",
              }}
            />
          </Link>
        </Box>
        <Box>
          <Link to="/register" style={{ flexDirection: "" }}>
            <img
              src={Profile}
              alt="Profile"
              style={{
                width: "30px",
                height: "30px",
              }}
            />
          </Link>
        </Box>
      </Stack>
      <Stack
        className="BotNav"
        direction="row"
        justifyContent="center"
        sx={{
          backgroundColor: "#e07a5f",
          height: "68px",
          gap: { md: 10, xs: 0 },
          fontSize: { xs: 16 },
        }}
      >
        <div class="dropdown">
          <button
            class="dropbtn"
            style={{
              textDecoration: "none",
              fontFamily: "cursive",
              color: "#F4F1DE",
              fontWeight: "bold",
            }}
          >
            ADOPT & DONATE
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/AdoptPet">Adopting Pets</a>
            <a href="/MercyFound">Mercy Foundation</a>
            <a href="/Donation">Donation</a>
          </div>
        </div>
        <div class="dropdown">
          <button
            class="dropbtn"
            style={{
              textDecoration: "none",
              fontFamily: "cursive",
              color: "#F4F1DE",
              fontWeight: "bold",
            }}
          >
            DOGS
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/Dog">Dog Adoption</a>
            <a href="/DogBreeds">Dog Breeds</a>
          </div>
        </div>
        <div class="dropdown">
          <button
            class="dropbtn"
            style={{
              textDecoration: "none",
              fontFamily: "cursive",
              color: "#F4F1DE",
              fontWeight: "bold",
            }}
          >
            CATS
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/Cat">Cat Adoption</a>
            <a href="/CatBreeds">Cat Breeds</a>
          </div>
        </div>
        <Link
          to="/Other"
          style={{
            textDecoration: "none",
            fontFamily: "cursive",
            color: "#F4F1DE",
            margin: "22px",
            fontWeight: "bold",
          }}
        >
          OTHER TYPES
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
