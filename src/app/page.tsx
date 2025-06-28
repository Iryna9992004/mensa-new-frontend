import GoodCard from "@/features/good-card/GoodCard";
import NavBar from "@/shared/ui/NavBar";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ height: "fit-content" }}>
      <Box sx={{ height: "100vh", width: "100vw" }}>
        <NavBar />
        <Box
          component="section"
          sx={{
            background: "#FF69B4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 500, color: "white" }}>
            MENSA CANDLES
          </Typography>
        </Box>
      </Box>

      <Box sx={{ height: "100vh", width: "100vw" }}>
        <GoodCard />
      </Box>
    </Box>
  );
}
