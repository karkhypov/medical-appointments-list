import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import SelectVariants from './components/SelectVariants';
import AppointmentCard from './components/AppointmentCard';

import { getDate, getDuration, getTime, sortByDate, groupBy } from './utils';

import Data from './data.json';

const App = () => {
  const [initialData, setInitialData] = useState(Data);

  const groupByClinicianName = groupBy(['clinicianName']);
  const groupByStartDate = groupBy(['startDate']);
  console.log(groupByClinicianName(Data));
  console.log(groupByStartDate(Data));

  return (
    <Container maxWidth='lg' sx={{ mt: '25px', mb: '25px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          mb: '25px',
        }}
      >
        <SelectVariants />
        <Button variant='contained'>New Appointment</Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {sortByDate(initialData).map(
          ({ id, patient: { name }, clinicianName, startDate, endDate }) => {
            return (
              <AppointmentCard
                key={id}
                patientName={name}
                clinicianName={clinicianName}
                startDate={getDate(startDate)}
                startTime={getTime(startDate)}
                duration={getDuration(startDate, endDate)}
              />
            );
          }
        )}
      </Box>
    </Container>
  );
};

export default App;
