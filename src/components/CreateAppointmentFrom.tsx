import { Controller, useForm } from 'react-hook-form';

import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DateTimePicker } from '@mui/lab';

import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomInput from './CustomInput';

import { FormInputs } from '../types';

interface CreateAppointmentFormProps {
  onSubmit: (arg0: FormInputs) => void;
}

const CreateAppointmentForm = ({ onSubmit }: CreateAppointmentFormProps) => {
  const { register, handleSubmit, control } = useForm<FormInputs>();

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
            <CustomInput label='Clinician' {...register('clinicianName')} />
            <Controller
              control={control}
              name='startDate'
              defaultValue=''
              render={({ field }) => (
                <DateTimePicker
                  disablePast
                  label='Start Date and Time'
                  onChange={(startData) => field.onChange(startData)}
                  value={field.value || null}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth margin='normal' required />
                  )}
                />
              )}
            />
            <Controller
              control={control}
              name='endDate'
              defaultValue=''
              render={({ field }) => (
                <DateTimePicker
                  label='End Date and Time'
                  onChange={(endDate) => field.onChange(endDate)}
                  value={field.value || null}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth margin='normal' required />
                  )}
                />
              )}
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
