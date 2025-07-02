import AboutSection from '@/widgets/about-section';
import CatalogSection from '@/widgets/catalog-section';
import Footer from '@/widgets/footer';
import Navbar from '@/widgets/navbar';
import PaymentSection from '@/widgets/payment-section';
import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Landing page metadata',
};

export default function Home() {
  return (
    <Box sx={{ height: 'fit-content' }}>
      <Box sx={{ height: '100vh', width: '100vw' }}>
        <Navbar />
        <Box
          component="section"
          sx={{
            background: '#F77FBE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: 500, color: 'white', textAlign: 'center' }}
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
