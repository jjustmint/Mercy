import React from "react";
import { Box, Grid, Typography, Stack, Button } from "@mui/material";
import DogData from "../dog.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
              fontFamily: "cursive",
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
                <Grid
                  item
                  className="Card"
                  md={6}
                  key={data.id}
                  sx={{
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Grid
                    container
                    justifyContent="left"
                    alignContent="center"
                    position="relative"
                    sx={{
                      backgroundColor: "#81B29A",
                      width: { md: "500px", xs: "208px" },
                    }}
                  >
                    <Grid item xs={6}>
                      <img
                        style={{
                          minHeight: "150px",
                          minWidth: "40px",
                          maxWidth: "200px",
                          maxHeight: "100px",
                          objectFit: "cover",
                          borderRadius: "10px",
                          margin: "4%",
                        }}
                        src={data.img}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Typography
                        sx={{
                          fontFamily: "cursive",
                          fontSize: "22px",
                          color: "#3D405B",
                          fontWeight: "bold",
                          display: "flex",
                          justifyContent: { md: "start", xs: "center" },
                          marginTop: { md: "16px" },
                        }}
                      >
                        {data.name}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      md={3}
                      sx={{
                        display: { xs: "none", md: "flex" },
                      }}
                    >
                      <Button
                        sx={{
                          height: "30px",
                          m: "12px",
                          backgroundColor: "#E07A5F",
                          color: "#F4F1DE",
                          fontFamily: "cursive",
                          textTransform: "lowercase",
                        }}
                      >
                        Adopt
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={3}
                      sx={{
                        display: { xs: "none", md: "flex" },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "cursive",
                          fontSize: "14px",
                          color: "#3D405B",
                          fontWeight: "bold",
                          position: "absolute",
                          left: "250px",
                          top: "60px",
                        }}
                      >
                        Age: {data.age}
                        <br />
                        Gender: {data.gender}
                        <br />
                        Type: {data.type}
                        <br />
                        Breed: {data.breed}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
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
