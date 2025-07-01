import SectionWrapper from "@/shared/ui/SectionWrapper";
import PaymentCard from "./ui/PaymentCard";
import { Box } from "@mui/material";

const PaymentSection = () => {
  return (
    <SectionWrapper>
      <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 4}}>
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
      </Box>
    </SectionWrapper>
  );
};

export default PaymentSection;
