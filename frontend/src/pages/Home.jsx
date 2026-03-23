import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DogData from "../dog.json"
import { Card, CardMedia, CardContent} from "@mui/material";

import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import Cookies from "js-cookie";
import Axios from "../../AxiosInstance";
import { useEffect, useState } from "react";

import dog from "../assets/dog.svg"
import cat from "../assets/cat.svg";
import pet from "../assets/pet.svg";
import shelter from "../assets/shelter.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [ user, setStatus ] = useState(GlobalContext);

  useEffect(() => {
    // TODO: Implement get notes by user's token
    // 1. check if user is logged in
    const userToken = Cookies.get("UserToken");
    if (userToken !== undefined && userToken !== "undefined") {
      // 2. call API to get notes
      Axios.get("http://localhost:8001/Login", {
        headers: { Authorization: `Bearer ${userToken}` },
      }).then((res) => {
        // 3. set notes to state
        console.log(res);
      });
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack maxWidth="1024px" margin={10}>
          <Grid container direction="row" spacing={3} p={3}>
            <Grid
              item
              sm={6}
              md={3}
              sx={{
                display: "flex",
                justifyContent: { md: "center", sm: "end" },
              }}
            >
              <Link
                to="/Dog"
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  display="grid"
                  justifyContent="center"
                  sx={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "#F2CC8F",
                    borderRadius: "15px",
                  }}
                >
                  <Box marginTop="40px">
                    <img src={dog} alt="dog" width="80" height="80" />
                  </Box>
                  <Typography
                    align="center"
                    sx={{
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      fontSize: "24px",
                      color: "#3D405B",
                    }}
                  >
                    Dogs
                  </Typography>
                </Box>
              </Link>
            </Grid>
            <Grid
              item
              sm={6}
              md={3}
              sx={{
                display: "flex",
                justifyContent: { md: "center", sm: "start" },
              }}
            >
              <Link
                to="/Cat"
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  display="grid"
                  justifyContent="center"
                  sx={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "#F2CC8F",
                    borderRadius: "15px",
                  }}
                >
                  <Box marginTop="40px">
                    <img src={cat} alt="cat" width="80" height="80" />
                  </Box>
                  <Typography
                    align="center"
                    sx={{
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      fontSize: "24px",
                      color: "#3D405B",
                    }}
                  >
                    Cats
                  </Typography>
                </Box>
              </Link>
            </Grid>
            <Grid
              item
              sm={6}
              md={3}
              sx={{
                display: "flex",
                justifyContent: { md: "center", sm: "end" },
              }}
            >
              <Link
                to="/Other"
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  display="grid"
                  justifyContent="center"
                  sx={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "#F2CC8F",
                    borderRadius: "15px",
                  }}
                >
                  <Box marginTop="40px">
                    <img src={pet} alt="pet" width="80" height="80" />
                  </Box>
                  <Typography
                    align="center"
                    sx={{
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      fontSize: "24px",
                      color: "#3D405B",
                    }}
                  >
                    Other
                  </Typography>
                </Box>
              </Link>
            </Grid>
            <Grid
              item
              sm={6}
              md={3}
              sx={{
                display: "flex",
                justifyContent: { md: "center", sm: "start" },
              }}
            >
              <Link
                to="/Voluteer"
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  display="grid"
                  justifyContent="center"
                  sx={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "#F2CC8F",
                    borderRadius: "15px",
                  }}
                >
                  <Box marginTop="40px" align="center">
                    <img src={shelter} alt="pet" width="80" height="80" />
                  </Box>
                  <Typography
                    align="center"
                    sx={{
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      fontSize: "24px",
                      color: "#3D405B",
                    }}
                  >
                    Voluteer
                  </Typography>
                </Box>
              </Link>
            </Grid>
          </Grid>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: "30px",
              color: "#3D405B",
              margin: "50px",
            }}
          >
            Pets Available for adoption nearby
          </Typography>
          <Box className="AvaliableCard"
            sx={{
              display: "flex",
              alignSelf: "center",
              height: "330px",
              width: {sm: "500px", md:"990px"},
              display: "flex",
              overflowX: "auto",
              gap: 2,
              padding: "20px",
              borderRadius: "20px"
            }}
          >
              {DogData.map((data) => {
                return (
                  <div
                    key={data.id}
                    sx={{
                      marginTop: "40px",
                      minWidth: 200,
                      flexShrink: 0,
                    }}
                  >
                    <Card
                    sx={{
                      minWidth: 200,
                      flexShrink: 0,
                    }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={data.img}
                        alt="404 not found"
                      />
                      <CardContent
                        sx={{
                          backgroundColor: "#81B29A",
                          fontFamily: "sans-serif",
                          color: "#3D405B"
                        }}
                      >
                        {data.name}
                        <Typography variant="body2" color="text.secondary">
                          {/* {data.info} */}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
          </Box>
        </Stack>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
