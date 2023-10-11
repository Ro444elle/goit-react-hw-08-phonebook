import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import image1 from '../../assets/images/image1.jpg';

export default function HomePage() {
  return (
    <Box>
      <Box>
        <Card>
          <CardMedia
            component="img"
            alt="Phone"
            width="auto"
            height="auto"
            image={image1}
          />
        </Card>
      </Box>
      <Typography variant="h4" align="center">
        Welcome to Home Page!
      </Typography>
    </Box>
  );
}
