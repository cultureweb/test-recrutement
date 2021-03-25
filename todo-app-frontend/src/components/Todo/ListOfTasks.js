import React, { useState } from 'react';
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Snackbar,
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListOfTasks = ({ tasks, setTasks }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCheck = (event, id) => {
    setChecked(event.target.checked);
    setTasks((prevState) =>
      prevState.map((obj) =>
        obj.id === id
          ? { id: obj.id, description: obj.description, done: !obj.done }
          : obj
      )
    );
  };

  const handleDelete = (event, id) => {
    setTasks((prevState) => prevState.filter((item) => item.id !== id));
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <List className={classes.root}>
      {tasks.map((t, index) => (
        <ListItem
          key={index}
          role={undefined}
          dense
          button
          onChange={(event) => handleCheck(event, t.id)}
        >
          <Checkbox edge="start" checked={t.done} />
          <ListItemText>{t.description}</ListItemText>
          <IconButton
            aria-label="delete"
            onClick={(event) => handleDelete(event, t.id)}
          >
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                This task has been removed!
              </Alert>
            </Snackbar>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ListOfTasks;
