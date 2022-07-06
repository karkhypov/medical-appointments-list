import { useState, useLayoutEffect } from 'react';
import { isValid } from 'date-fns';

import { getDate, sortByAppointmentDate, sortByClinicianName, groupBy } from './utils';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import SelectVariants from './components/SelectVariants';
import CardGroup from './components/CardGroup';
import AppointmentCard from './components/AppointmentCard';
import ModalLayout from './components/ModalLayout';
import CreateAppointmentForm from './components/CreateAppointmentFrom';

import Data from './data.json';

interface Patient {
  id: string;
  name: string;
}

export interface AppointmentCardData {
  id: string;
  startDate: string;
  endDate: string;
  clinicianName: string;
  patient: Patient;
  status: string;
}

interface GroupedAppointmentCards {
  [key: string]: AppointmentCardData[];
}

type SelectValue = 'startDate' | 'clinicianName';

const App = () => {
  const data = Data;
  const [appointmentCards, setAppointmentCards] =
    useState<GroupedAppointmentCards | null>(null);
  const [groupByVariant, setGroupByVariant] = useState<SelectValue>('startDate');
  const [openModal, setOpenModal] = useState(false);

  useLayoutEffect(() => {
    const grouped = groupBy([groupByVariant]);
    const sorted =
      groupByVariant === 'startDate'
        ? sortByAppointmentDate(data)
        : sortByClinicianName(data);
    const result = grouped(sorted);

    setAppointmentCards(result as GroupedAppointmentCards);
  }, [data, groupByVariant]);

  const removeCard = (title: string) => (id: string) => {
    setAppointmentCards((prevState) => {
      const result = {
        ...prevState,
        [title]: prevState?.[title].filter((card: AppointmentCardData) => card.id !== id),
      } as GroupedAppointmentCards;

      if (result[title].length === 0) delete result[title];

      return result;
    });
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
        Object.entries(appointmentCards as GroupedAppointmentCards).map(
          ([title, cards]) => {
            const cardGroupTitle =
              groupByVariant === 'startDate' && isValid(new Date(title))
                ? getDate(title)
                : title;

            return (
              <CardGroup key={title} title={cardGroupTitle}>
                {sortByAppointmentDate(cards).map((card: AppointmentCardData) => {
                  return (
                    <AppointmentCard
                      key={card.id}
                      card={card}
                      handleClick={removeCard(title)}
                    />
                  );
                })}
              </CardGroup>
            );
          }
        )}

      <ModalLayout open={openModal} setOpen={setOpenModal}>
        <CreateAppointmentForm />
      </ModalLayout>
    </Container>
  );
};

export default App;
