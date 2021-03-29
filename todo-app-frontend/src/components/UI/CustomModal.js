import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

const CustomModal = ({
  handleCloseModal,
  openModal,
  title,
  updateTask,
  handleChange,
}) => {
  return (
    <>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <TextField
            value={title}
            autoFocus
            margin="dense"
            id="name"
            onChange={(e) => handleChange(e, title)}
            type="text"
            fullWidth
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={updateTask} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomModal;
