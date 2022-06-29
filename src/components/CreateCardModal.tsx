import { Dispatch, SetStateAction } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface CreateCardModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateCardModal = ({ open, setOpen }: CreateCardModalProps) => {
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='create-appointment'
        aria-describedby='create-appointment'
      >
        <Box sx={style}>
          <Typography id='create-appointment' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='create-appointment' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default CreateCardModal;