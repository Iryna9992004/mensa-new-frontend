import { Box } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const SectionWrapper = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        minHeight: '100vh',
        pt: { xs: '3rem', sm: '3rem', md: '3rem', lg: '4rem' },
        pb: { xs: '3rem', sm: '3rem', md: '3rem', lg: '4rem' },
        pl: { xs: '3rem', sm: 0, md: '6rem', lg: '7rem' },
        pr: { xs: '3rem', sm: 0, md: '6rem', lg: '7rem' },
      }}
    >
      {children}
    </Box>
  );
};

export default SectionWrapper;
