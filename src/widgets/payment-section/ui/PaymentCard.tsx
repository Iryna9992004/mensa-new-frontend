import { Box, Typography } from "@mui/material";
import Image from "next/image";

import image from "../../../../public/assets/langing/pictures/1.jpg";

const PaymentCard = () => {
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
        <Image src={image} alt="delivery" style={{width: '100%', height: '100%', minWidth: 250}}/>
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
            1
          </Typography>
        </Box>
      </Box>
      <Typography component="span" sx={{ color: "gray" }}>
        Карта Приватбанку. 100% передоплата на карту Приватбанку. У цьому
        випадку ви не оплачуєте комісію за накладений платіж. Післяплата. Ви
        можете оплатити замовлення при отриманні на пошті (накладений платіж).
        Ця послуга коштує дорожче звичайного відправлення, тому що Ви додатково
        сплачуєте комісію за повернення грошових коштів відправнику (20 грн. +
        2% від суми замовлення).
      </Typography>
    </Box>
  );
};

export default PaymentCard;
