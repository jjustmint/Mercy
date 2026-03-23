import { Grid, Typography, Button } from "@mui/material";
const PetCard = ({ data }) => {
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
          borderRadius: "20px"
        }}
      >
        <Grid item xs={6}>
          <img
            style={{
              width: "200px",
              height: "200px",
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
              fontFamily: "sans-serif",
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
          justifyContent={"center"}
          md={3}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Button
            sx={{
              height: "30px",
              m: "12px",
              mr: "-12px",
              backgroundColor: "#E07A5F", "&:hover": {
                backgroundColor: "#3D405B",
              },
              color: "#F4F1DE",
              fontFamily: "sans-serif",
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
              fontFamily: "sans-serif",
              fontSize: "14px",
              color: "#3D405B",
              fontWeight: "semi-bold",
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
}

export default PetCard;