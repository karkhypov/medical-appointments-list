import { useForm } from 'react-hook-form';

import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker, TimePicker } from '@mui/lab';

import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomInput from './CustomInput';
import { useState } from 'react';

interface FormInputs {
  patient: string;
  clinician: string;
  startDate: string;
  active: boolean;
}

const CreateAppointmentForm = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [duration, setDuration] = useState<Date | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    alert(JSON.stringify(data));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Create New Appointment
          </Typography>
          <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <CustomInput label='Patient' {...register('patient')} />
            <CustomInput label='Clinician' {...register('clinician')} />

            <DatePicker
              label='Start Date'
              renderInput={(params) => (
                <TextField {...params} fullWidth margin='normal' required />
              )}
              value={date}
              onChange={(newValue) => setDate(newValue)}
            />

            <TimePicker
              label='Duration'
              renderInput={(params) => (
                <TextField {...params} fullWidth margin='normal' required />
              )}
              value={duration}
              onChange={(newValue) => setDuration(newValue)}
            />

            <FormControlLabel
              control={<Checkbox value='active' color='primary' />}
              label='Active'
              {...register('active')}
            />

            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3 }}>
              Create Appointment
            </Button>
          </Box>
        </Box>
      </Container>
    </LocalizationProvider>
  );
};

export default CreateAppointmentForm;
