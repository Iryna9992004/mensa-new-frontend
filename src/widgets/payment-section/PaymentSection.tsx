import SectionWrapper from '@/shared/ui/SectionWrapper';
import PaymentCard from './ui/PaymentCard';
import { Box } from '@mui/material';

import picture1 from '../../../public/assets/langing/pictures/1.jpg';
import picture2 from '../../../public/assets/langing/pictures/2.jpg';
import picture3 from '../../../public/assets/langing/pictures/3.jpg';

const paymentCards = [
  {
    image: picture1,
    alt: 'payment',
    number: '1',
    description: `Карта Приватбанку. 100% передоплата на карту Приватбанку. У цьому
        випадку ви не оплачуєте комісію за накладений платіж. Післяплата. Ви
        можете оплатити замовлення при отриманні на пошті (накладений платіж).
        Ця послуга коштує дорожче звичайного відправлення, тому що Ви додатково
        сплачуєте комісію за повернення грошових коштів відправнику (20 грн. +
        2% від суми замовлення).`,
  },
  {
    image: picture2,
    alt: 'delivery',
    number: '2',
    description: `Карта Приватбанку. 100% передоплата на карту Приватбанку. У цьому
        випадку ви не оплачуєте комісію за накладений платіж. Післяплата. Ви
        можете оплатити замовлення при отриманні на пошті (накладений платіж).
        Ця послуга коштує дорожче звичайного відправлення, тому що Ви додатково
        сплачуєте комісію за повернення грошових коштів відправнику (20 грн. +
        2% від суми замовлення).`,
  },
  {
    image: picture3,
    alt: 'deliver',
    number: '3',
    description: `Карта Приватбанку. 100% передоплата на карту Приватбанку. У цьому
        випадку ви не оплачуєте комісію за накладений платіж. Післяплата. Ви
        можете оплатити замовлення при отриманні на пошті (накладений платіж).
        Ця послуга коштує дорожче звичайного відправлення, тому що Ви додатково
        сплачуєте комісію за повернення грошових коштів відправнику (20 грн. +
        2% від суми замовлення).`,
  },
];

const PaymentSection = () => {
  return (
    <SectionWrapper>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
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
