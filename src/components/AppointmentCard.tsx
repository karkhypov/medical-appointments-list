import { getDate, getTime, getDuration } from '../utils';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { AppointmentCardData } from '../App';

interface AppointmentCardProps {
  card: AppointmentCardData;
  handleClick: (arg0: string) => void;
}

const AppointmentCard = ({ card, handleClick }: AppointmentCardProps) => {
  const { id, patient, clinicianName, startDate, endDate } = card;
  const date = getDate(startDate);
  const time = getTime(startDate);
  const duration = getDuration(startDate, endDate);

  return (
    <Card sx={{ minWidth: 275, m: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Patient
        </Typography>
        <Typography variant='h5' component='div'>
          {patient.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Clinician: {clinicianName}
        </Typography>
        <Typography variant='body2'>
          Start Date: {date} {time}
        </Typography>
        <Typography variant='body2'>
          Duration:{' '}
          {duration.greaterThanHour ? (
            <Typography variant='body2' component='span' style={{ color: 'red' }}>
              {' '}
              {duration.time}
            </Typography>
          ) : (
            duration.time
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => handleClick(id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default AppointmentCard;
