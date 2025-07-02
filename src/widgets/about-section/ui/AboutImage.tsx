import { Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  image: StaticImageData;
  alt: string;
};

const AboutImage = ({ alt, image }: Props) => {
  return (
    <Box sx={{ width: { xs: '100%', sm: '100%', md: '33%', lg: '30%' } }}>
      <Image src={image} alt={alt} style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

export default AboutImage;
