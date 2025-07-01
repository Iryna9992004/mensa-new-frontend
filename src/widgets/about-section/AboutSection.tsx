import SectionWrapper from "@/shared/ui/SectionWrapper";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import picture1 from "../../../public/assets/langing/about/creativity.jpg";
import picture2 from "../../../public/assets/langing/about/pleasure.jpg";
import picture3 from "../../../public/assets/langing/about/quality.jpg";

const AboutSection = () => {
  return (
    <SectionWrapper>
      <Box>
        <Typography component="span" sx={{ textAlign: "center" }}>
          Різьблені свічки ручної роботи, які можуть стати оригінальним
          подарунком на Новий рік, Різдво, День Святого Валентина, День
          народження, Весілля, Хрестини, День вчителя. Свічка виготовляється з
          високоякісного харчового парафіну П-2, який не шкідливий для здоров`я.
        </Typography>

        <Box>
          <Image src={picture1} alt="creativity" />
          <Image src={picture2} alt="pleasure" />
          <Image src={picture3} alt="quality" />
        </Box>
      </Box>
    </SectionWrapper>
  );
};
export default AboutSection;
