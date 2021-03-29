import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

const Toast = ({ text, handleCloseToast, openToast }) => {
  return (
    <Snackbar
      open={openToast}
      autoHideDuration={1000}
      onClose={handleCloseToast}
    >
      <Alert onClose={handleCloseToast} severity="success">
        {text}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
