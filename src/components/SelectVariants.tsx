import { Dispatch, SetStateAction } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { SelectValue } from '../types';

interface SelectVariantsProps {
  value: SelectValue;
  setValue: Dispatch<SetStateAction<SelectValue>>;
}

const SelectVariants = ({ value, setValue }: SelectVariantsProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as SelectValue);
  };

  return (
    <Box sx={{ minWidth: 170 }}>
      <FormControl fullWidth>
        <InputLabel id='groupByLabel'>Group by</InputLabel>
        <Select
          labelId='groupByLabel'
          id='groupBy'
          value={value}
          label='Group by'
          onChange={handleChange}
        >
          <MenuItem defaultChecked value={'startDate'}>
            Appointment Day
          </MenuItem>
          <MenuItem value={'clinicianName'}>Clinician Name</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectVariants;
