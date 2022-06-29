import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import SelectVariants from './components/SelectVariants';
import CreateCardModal from './components/CreateCardModal';
import CardGroup from './components/CardGroup';
import AppointmentCard from './components/AppointmentCard';

import { getDate, getDuration, getTime, sortByDate, groupBy } from './utils';

import Data from './data.json';

import { CardDataType } from './utils';
export type SelectValue = 'startDate' | 'clinicianName';

interface appointmentCardsProps {
  [key: string]: CardDataType[];
}

const App = () => {
  const [data, setData] = useState<CardDataType[]>(Data);
  const [appointmentCards, setAppointmentCards] = useState<appointmentCardsProps | null>(
    null
  );
  const [groupByVariant, setGroupByVariant] = useState<SelectValue>('startDate');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const grouped = groupBy([groupByVariant]);
    data && setAppointmentCards(grouped(data) as appointmentCardsProps);
  }, [data, groupByVariant]);

  const removeCard = (id: string) => {
    setData(data.filter((card: CardDataType) => card.id !== id));
  };

  return (
    <Container maxWidth='lg' sx={{ mt: 3, mb: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          mb: 3,
        }}
      >
        <SelectVariants value={groupByVariant} setValue={setGroupByVariant} />
        <Button variant='contained' onClick={() => setOpenModal(true)}>
          New Appointment
        </Button>
      </Box>

      {appointmentCards &&
        Object.entries(appointmentCards as appointmentCardsProps).map(
          ([title, cards]) => {
            const cardGroupTitle =
              groupByVariant === 'startDate' ? getDate(title) : title;

            return (
              <CardGroup title={cardGroupTitle}>
                {sortByDate(cards).map(
                  ({
                    id,
                    patient: { name },
                    clinicianName,
                    startDate,
                    endDate,
                  }: CardDataType) => {
                    return (
                      <AppointmentCard
                        key={id}
                        id={id}
                        patientName={name}
                        clinicianName={clinicianName}
                        startDate={getDate(startDate)}
                        startTime={getTime(startDate)}
                        duration={getDuration(startDate, endDate)}
                        handleClick={removeCard}
                      />
                    );
                  }
                )}
              </CardGroup>
            );
          }
        )}

      <CreateCardModal open={openModal} setOpen={setOpenModal} />
    </Container>
  );
};

export default App;
