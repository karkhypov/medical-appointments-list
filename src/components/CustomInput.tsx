import { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

interface CustomInputProps {
  label: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, ...otherProps }, ref) => {
    return (
      <TextField
        inputRef={ref}
        margin='normal'
        required
        fullWidth
        id={label}
        label={label}
        autoComplete={label}
        {...otherProps}
      />
    );
  }
);

export default CustomInput;
