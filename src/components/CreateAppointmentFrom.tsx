import { Controller, useForm } from 'react-hook-form';

import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DateTimePicker } from '@mui/lab';

import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomInput from './CustomInput';

interface FormInputs {
  patient: string;
  clinician: string;
  startDate: string;
  endDate: string;
  status: boolean;
}

const CreateAppointmentForm = () => {
  const { register, handleSubmit, control } = useForm<FormInputs>();

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
            <Controller
              control={control}
              name='startDate'
              defaultValue=''
              render={({ field }) => (
                <DateTimePicker
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
            <FormControlLabel
              control={<Checkbox value='status' color='primary' />}
              label='Active'
              {...register('status')}
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
