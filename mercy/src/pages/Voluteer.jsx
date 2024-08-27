import React from "react";
import { Box, Stack, Typography, Grid} from "@mui/material";
import photo from "../assets/Document.jpg";
import photo2 from "../assets/image-asset.jpeg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Voluteer = () => {
  return (
    <div>
      <Navbar />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack maxWidth="1200px" margin="40px">
          <Grid container direction="row" spacing={2} pt={2} mt={6}>
            <Grid item xs={12} md={6}>
              <Box
                mr={4}
                sx={{
                  maxWidth: "1024px",
                  minWidth: "300px",
                }}
              >
                <Typography
                  mb={4}
                  style={{
                    fontFamily: "cursive",
                    // fontWeight: "bold",
                    fontSize: "60px",
                    color: "#3D405B",
                  }}
                >
                  Why voluteer?
                </Typography>
                <Typography
                  sx={{
                    alignItems: "center",
                    fontFamily: "cursive",
                    fontSize: "20px",
                    color: "#3D405B",
                    marginBottom: "80px",
                  }}
                >
                  Our Animal Rescue Volunteer Program is a life-changing
                  opportunity to make a difference in the lives of stray animals
                  in need while soaking up authentic Thai culture in one of
                  Thailand's must-visit destinations. This is your chance to be
                  part of a program that aims to dramatically improve the lives
                  of animals in Thailand and tackle the issues at the root of
                  the country's stray animal epidemic. Join more than 300
                  volunteers who have made a difference in the lives of stray
                  animals with Mercy
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: { md: "center", xs: "center" },
                marginTop: { md: 10, xs: 0 },
                marginBottom: { xs: 10 },
              }}
            >
              <img
                src={photo}
                style={{
                  borderRadius: "10px",
                  minWidth: "300px",
                  maxWidth: "400px",
                  maxHeight: "300px",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                mb={4}
                style={{
                  fontFamily: "cursive",
                  // fontWeight: "bold",
                  fontSize: "60px",
                  color: "#3D405B",
                  marginBottom: "60px",
                }}
              >
                We need your help
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={photo2}
                  style={{
                    borderRadius: "10px",
                    minWidth: "300px",
                    maxWidth: "400px",
                    borderRadius: "15px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} marginTop={10} mb={16}>
              <Typography
                sx={{
                  alignItems: "center",
                  fontFamily: "cursive",
                  fontSize: "20px",
                  color: "#3D405B",
                }}
              >
                Every day Mercy receives reports of animals in need of our help.
                Injured, abandoned or suffering from illness, these animals are
                in desperate need of food, water or medical treatment. In order
                to continue to make an impact in our community and improve the
                standard of animal welfare for the lost and forgotten animals in
                our region, Rescue P.A.W.S. needs your help. As we strive to
                perform as many sterilizations as possible to end the cycle of
                animal suffering, we are also focused on educating the local
                community and offering assistance to low-income families who may
                not be able to afford medical care for their pets through our
                community outreach program.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Box>
      <Footer />
    </div>
  );
};

export default Voluteer;
