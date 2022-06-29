import { useEffect, useState } from 'react';

import { getDate, getDuration, getTime, sortByDate, groupBy } from './utils';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import SelectVariants from './components/SelectVariants';
import CreateCardModal from './components/CreateCardModal';
import CardGroup from './components/CardGroup';
import AppointmentCard from './components/AppointmentCard';

import Data from './data.json';

interface Patient {
  id: string;
  name: string;
}

interface AppointmentCardData {
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

export type SelectValue = 'startDate' | 'clinicianName';

const App = () => {
  const [data, setData] = useState<AppointmentCardData[]>(Data);
  const [appointmentCards, setAppointmentCards] =
    useState<GroupedAppointmentCards | null>(null);
  const [groupByVariant, setGroupByVariant] = useState<SelectValue>('startDate');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const grouped = groupBy([groupByVariant]);
    data && setAppointmentCards(grouped(data) as GroupedAppointmentCards);
  }, [data, groupByVariant]);

  const removeCard = (id: string) => {
    setData(data.filter((card: AppointmentCardData) => card.id !== id));
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
                  }: AppointmentCardData) => {
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
