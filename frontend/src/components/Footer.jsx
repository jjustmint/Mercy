import React from 'react'
import { Box, Typography,Link } from '@mui/material'
import photo from "../assets/instagram.svg"
import photo2 from "../assets/youtube.svg"

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3D405B",
        height: "311px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <a href="https://www.instagram.com/_jjustmint/?hl=th">
          <img src={photo} height="30px" />
        </a>
        <a href="https://youtu.be/V_t6rD6Pelo">
          <img src={photo2} height="30px" />
        </a>
      </Box>
      <Typography>Privacy Policy</Typography>
      <Typography>
        Copyright 2023 © All rights Reserved. Design by Mint
      </Typography>
    </Box>
  );
}

export default Footer