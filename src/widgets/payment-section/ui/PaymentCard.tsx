import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  alt: string;
  number: string;
  description: string;
}

const PaymentCard = ({image, alt, number, description}: Props) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Image src={image} alt={alt} style={{width: '100%', height: '100%', minWidth: 250}}/>
        <Box
          sx={{
            bgcolor: "#A6DFD3",
            height: 60,
            width: 60,
            position: "absolute",
            bottom: 20,
            left: -20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            {number}
          </Typography>
        </Box>
      </Box>
      <Typography component="span" sx={{ color: "gray" }}>
        {description}
      </Typography>
    </Box>
  );
};

export default PaymentCard;
