import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { pictures } from './constants/pictures';
import { instagramPictures } from './constants/instagram-pictures';

const Footer = () => {
  return (
    <Box
      sx={{
        background: '#F5F5F5',
        pt: '2rem',
        pb: '4rem',
        pl: '5rem',
        pr: '5rem',
      }}
    >
      <Grid container columnSpacing={4}>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          sx={{ pb: '2rem', borderBottom: '1px solid lightgray' }}
        >
          <Typography
            component="h3"
            variant="h3"
            sx={{ color: 'gray', fontWeight: '600', mb: '2rem' }}
          >
            Mensa Candle
          </Typography>
          <Typography component="span" variant="body1" sx={{ color: 'gray' }}>
            097 383 88 66 – Марина(для переписки є вайбер) ; локація – Львів.
            Термін виконання замовлення 3-4 дні з урахуванням ваших побажань
            щодо кольорової гами. Відправка по всій Україні Нова пошта,
            укрпошта.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography component="h3" sx={{ fontWeight: 300 }}>
                  PICTURES
                </Typography>
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  {pictures.map((item) => (
                    <Image
                      key={item.alt}
                      src={item.picture}
                      alt={item.alt}
                      height="75"
                      width="120"
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
              sx={{
                display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography component="h3" sx={{ fontWeight: 300 }}>
                  INSTAGRAM
                </Typography>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    rowGap: '1px',
                    columnGap: '1px',
                    width: 'fit-content',
                  }}
                >
                  {instagramPictures.map((item) => (
                    <Image
                      key={item.alt}
                      src={item.picture}
                      alt={item.alt}
                      height={50}
                      width={70}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
