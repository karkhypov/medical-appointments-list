import { Dispatch, SetStateAction } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectVariantsProps<T> {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
}

const SelectVariants = <T extends string>({
  value,
  setValue,
}: SelectVariantsProps<T>) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as T);
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
