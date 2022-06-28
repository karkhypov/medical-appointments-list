import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SelectVariants = () => {
  const [variant, setVariant] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setVariant(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 170 }}>
      <FormControl fullWidth>
        <InputLabel id='groupByLabel'>Group by</InputLabel>
        <Select
          labelId='groupByLabel'
          id='groupBy'
          value={variant}
          label='Group by'
          onChange={handleChange}
        >
          <MenuItem value={''}>None</MenuItem>
          <MenuItem value={'appointmentDay'}>Appointment Day</MenuItem>
          <MenuItem value={'clinicianName'}>Clinician Name</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectVariants;
