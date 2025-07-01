import AboutSection from "@/widgets/about-section/AboutSection";
import CatalogSection from "@/widgets/catalog-section/CatalogSection";
import Footer from "@/widgets/footer/Footer";
import NavBar from "@/widgets/navbar/NavBar";
import PaymentSection from "@/widgets/payment-section/PaymentSection";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ height: "fit-content" }}>
      <Box sx={{ height: "100vh", width: "100vw" }}>
        <NavBar />
        <Box
          component="section"
          sx={{
            background: "#F77FBE",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontWeight: 500, color: "white", textAlign: "center" }}
          >
            MENSA CANDLES
          </Typography>
        </Box>
      </Box>
      <AboutSection />
      <CatalogSection />
      <PaymentSection />
      <Footer />
    </Box>
  );
}
