import { Box, Typography } from "@mui/material";

import picture1 from "../../../public/assets/langing/about/creativity.jpg";
import picture2 from "../../../public/assets/langing/about/pleasure.jpg";
import picture3 from "../../../public/assets/langing/about/quality.jpg";
import AboutImage from "./ui/AboutImage";
import BlockSeparator from "./ui/BlockSeparator";

const AboutSection = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
      <Box
        sx={{
          pt: { xs: "3rem", sm: "3rem", md: "3rem", lg: "4rem" },
          pl: { xs: "3rem", sm: 0, md: "6rem", lg: "7rem" },
          pr: { xs: "3rem", sm: 0, md: "6rem", lg: "7rem" },
        }}
      >
        <Typography component="div" sx={{ textAlign: "center", color: 'gray', mb: '2rem' }}>
          Різьблені свічки ручної роботи, які можуть стати оригінальним
          подарунком на Новий рік, Різдво, День Святого Валентина, День
          народження, Весілля, Хрестини, День вчителя. Свічка виготовляється з
          високоякісного харчового парафіну П-2, який не шкідливий для здоров`я.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          }}
        >
          <AboutImage image={picture1} alt="creativity" />
          <AboutImage image={picture2} alt="pleasure" />
          <AboutImage image={picture3} alt="quality" />
        </Box>
      </Box>

      <BlockSeparator />
    </Box>
  );
};
export default AboutSection;
