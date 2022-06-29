import { PropsWithChildren } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface CardGroupProps {
  title: string;
}

const CardGroup = ({ title, children }: PropsWithChildren<CardGroupProps>) => {
  return (
    <Box border={1} sx={{ p: 1, mb: 3 }}>
      <Typography variant='h5'>{title}</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CardGroup;
