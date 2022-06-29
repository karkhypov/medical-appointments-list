import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface AppointmentCardProps {
  id: string;
  patientName: string;
  clinicianName: string;
  startDate: string;
  startTime: string;
  duration: {
    time: string;
    greaterThanHour: boolean;
  };
  handleClick: (arg0: string) => void;
}

const AppointmentCard = ({
  id,
  patientName,
  clinicianName,
  startDate,
  startTime,
  duration,
  handleClick,
}: AppointmentCardProps) => {
  return (
    <Card sx={{ minWidth: 275, m: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Patient
        </Typography>
        <Typography variant='h5' component='div'>
          {patientName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Clinician: {clinicianName}
        </Typography>
        <Typography variant='body2'>
          Start Date: {startDate} {startTime}
        </Typography>
        <Typography variant='body2'>
          Duration:{' '}
          {duration.greaterThanHour ? (
            <span style={{ color: 'red' }}> {duration.time}</span>
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
