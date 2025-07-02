import SectionWrapper from '@/shared/ui/SectionWrapper';
import PaymentCard from './ui/PaymentCard';
import { Box } from '@mui/material';
import { paymentCards } from './constants/payment-cards';

const PaymentSection = () => {
  return (
    <SectionWrapper>
      <Box id="delivery" sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        {paymentCards.map((item) => (
          <PaymentCard
            key={item.alt}
            image={item.image}
            alt={item.alt}
            number={item.number}
            description={item.description}
          />
        ))}
      </Box>
    </SectionWrapper>
  );
};

export default PaymentSection;
