import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export default function GoodCard() {
  return (
    <Card sx={{ maxWidth: '100%', cursor: 'pointer' }}>
      <CardMedia
        sx={{ height: 150 }}
        image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
        title="green iguana"
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Candle
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          sx={{
            background: '#f76ea1',
            width: '100%',
            '&:hover': {
              background: '#c43b6e',
            },
          }}
          startIcon={<AddIcon />}
          endIcon={
            <Box
              sx={{
                bgcolor: 'white',
                height: 16,
                width: 16,
                borderRadius: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: '#f76ea1', fontSize: '0.9rem' }}>
                3
              </Typography>
            </Box>
          }
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
