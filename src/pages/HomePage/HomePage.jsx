import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function HomePage() {
  return (
    <ImageList
      sx={{ width: '500', height: 450 }}
      variant="woven"
      cols={3}
      gap={8}
    >
      {itemData.map(item => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
];
// const imageUrl = `${process.env.PUBLIC_URL}/assets/images/phone.jpg`;
// return (
//   <Box>
//     <Box>
//       <Card>
//         <CardMedia
//           component="img"
//           alt="Phone"
//           width="auto"
//           height="auto"
//           image={imageUrl}
//         />
//       </Card>
//     </Box>
//     <Typography variant="h4" align="center">
//       Welcome to Home Page!
//     </Typography>
//   </Box>
// );
