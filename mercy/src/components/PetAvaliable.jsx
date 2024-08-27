import React from 'react'
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const PetAvaliable = (data) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={data.img}
        alt="404 not found"
      />
      <CardContent>
        {data.name}
        <Typography variant="body2" color="text.secondary">
          {data.info}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PetAvaliable