import { Dispatch, SetStateAction } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CreateAppointmentForm from './CreateAppointmentFrom';

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

interface ModalLayoutProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalLayout = ({ open, setOpen }: ModalLayoutProps) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='create-appointment'
      aria-describedby='create-appointment'
    >
      <Box sx={style}>
        <CreateAppointmentForm />
      </Box>
    </Modal>
  );
};

export default ModalLayout;
