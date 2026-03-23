import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import DogData from "../dog.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PetCard from "../components/PetCard"

const AdoptPet = () => {
  return (
    <div>
      <Navbar />
      <Box
        className="AvaliableCard"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          margin={10}
          sx={{
            width: { md: "1024px", xs: "900px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: "24px",
              color: "#3D405B",
            }}
          >
            Looking for a house ...
          </Typography>
          <Grid container direction="row" spacing={3} mt={5}>
            {DogData.map((data) => {
              return (
                <PetCard data={data}/>
              );
            })}
          </Grid>
        </Stack>
      </Box>
      <Footer />
    </div>
  );
};

export default AdoptPet;
