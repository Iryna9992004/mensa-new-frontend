import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

import picture1 from "../../../public/assets/langing/pictures/1.jpg";
import picture2 from "../../../public/assets/langing/pictures/2.jpg";
import picture3 from "../../../public/assets/langing/pictures/3.jpg";

import instaPhoto1 from "../../../public/assets/langing/instagram/1 (1).jpg";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#F5F5F5",
        pt: "2rem",
        pb: "4rem",
        pl: "5rem",
        pr: "5rem",
      }}
    >
      <Grid container columnSpacing={4}>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          sx={{ pb: "2rem", borderBottom: "1px solid lightgray" }}
        >
          <Typography
            component="h3"
            variant="h3"
            sx={{ color: "gray", fontWeight: "600", mb: "2rem" }}
          >
            Mensa Candle
          </Typography>
          <Typography component="span" variant="body1" sx={{ color: "gray" }}>
            097 383 88 66 – Марина(для переписки є вайбер) ; локація – Львів.
            Термін виконання замовлення 3-4 дні з урахуванням ваших побажань
            щодо кольорової гами. Відправка по всій Україні Нова пошта,
            укрпошта.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Typography component="h3" sx={{ fontWeight: 300 }}>
                  PICTURES
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <Image
                    src={picture1}
                    alt="present1"
                    height="75"
                    width="120"
                  />
                  <Image
                    src={picture2}
                    alt="present2"
                    height="75"
                    width="120"
                  />
                  <Image
                    src={picture3}
                    alt="present3"
                    height="75"
                    width="120"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
              sx={{ display: { xs: "none", sm: "none", md: 'block', lg: 'block' } }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Typography component="h3" sx={{ fontWeight: 300 }}>
                  INSTAGRAM
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    rowGap: "1px",
                    columnGap: "1px",
                    width: "fit-content",
                  }}
                >
                  <Image
                    src={instaPhoto1}
                    alt="insta photo 1"
                    height={50}
                    width={70}
                  />
                  <Image
                    src={instaPhoto1}
                    alt="insta photo 1"
                    height={50}
                    width={70}
                  />
                  <Image
                    src={instaPhoto1}
                    alt="insta photo 1"
                    height={50}
                    width={70}
                  />
                  <Image
                    src={instaPhoto1}
                    alt="insta photo 1"
                    height={50}
                    width={70}
                  />
                  <Image
                    src={instaPhoto1}
                    alt="insta photo 1"
                    height={50}
                    width={70}
                  />
                  <Image
                    src={instaPhoto1}
                    alt="insta photo 1"
                    height={50}
                    width={70}
                  />
                  <Image
                    src={instaPhoto1}
                    alt="insta photo 1"
                    height={50}
                    width={70}
                  />
                  <Image
                    src={instaPhoto1}
                    alt="insta photo 1"
                    height={50}
                    width={70}
                  />
                  <Image
                    src={instaPhoto1}
                    alt="insta photo 1"
                    height={50}
                    width={70}
                  />
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
