import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import bird from "../assets/bird.png";
import { Image } from "mui-image";
import animal from "../assets/animal.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MercyFound = () => {
  return (
    <div>
      <Navbar />
      <Box display="flex" justifyContent="center">
        <Stack maxWidth="1200px" margin="40px">
          <Grid container direction="row" spacing={2} pt={2} mt={6}>
            <Grid item display="flex" justifyContent="start" xs={6}>
              <Typography
                sx={{
                  fontSize: { xs: "40px", md: "60px" },
                  fontFamily: "cursive",
                  color: "#3D405B",
                }}
              >
                Mercy Foundation
              </Typography>
            </Grid>
            <Grid item display="flex" justifyContent="end" xs={6}>
              <Image src={bird} alt="bird" sx={{ maxWidth: "200px" }} />
            </Grid>
            <Grid item display="flex" justifyContent="start" xs={12}>
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "22px" },
                  fontFamily: "cursive",
                  color: "#3D405B",
                  maxWidth: { md: "800px" },
                }}
              >
                Adoption is a wonderful way to change and even save a life. When
                adopting an animal from Mercy. you are not only helping to give
                that animal a second chance at happiness but supporting our work
                in the process. Here at Mercy, we strive to sterilize and treat
                as many animals as possible. Sadly, it is not always possible to
                return them to their homes once they have recovered. Abandoned
                sickly puppies and kittens found on our doorstep, hospitalized
                animals with no home left to return to or dogs that have been
                rejected by their pack quickly fill up our kennel space leaving
                us unable to complete pre- and post-sterilization care for our
                sterilization program.
              </Typography>
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="end"
              alignContent="end"
              xs={12}
            >
              <Image src={animal} alt="animal" sx={{ maxWidth: "800px" }} />
            </Grid>
          </Grid>
        </Stack>
      </Box>
      <Footer />
    </div>
  );
};

export default MercyFound;
