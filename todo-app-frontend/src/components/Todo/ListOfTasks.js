import React, { useState } from 'react';
import { IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Toast from '../UI/Toast';
import CustomModal from '../UI/CustomModal';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListOfTasks = ({ tasks, setTasks, setTask }) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleCheck = (event, id) => {
    setChecked(event.target.checked);
    setTasks((prevState) =>
      prevState.map((obj) =>
        obj.id === id
          ? {
              id: obj.id,
              title: obj.title,
              done: !obj.done,
              createdAt: event.target.checked ? new Date() : null,
            }
          : obj
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prevState) => prevState.filter((item) => item.id !== id));
    setOpenToast(true);
  };

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenToast(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e, title) => {
    e.preventDefault();
    setTasks((prevState) =>
      prevState.map((obj) =>
        obj.title === title
          ? {
              id: obj.id,
              title: e.target.value,
              done: obj.done,
              createdAt: obj.createdAt,
            }
          : obj
      )
    );
  };

  const updateTask = () => {
    setOpenModal(false);
  };

  return (
    <List className={classes.root}>
      {tasks
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((t, index) => (
          <ListItem key={index} role={undefined} dense>
            <Checkbox
              edge="start"
              checked={t.done}
              // checked={checked}
              onChange={(event) => handleCheck(event, t.id)}
            />
            <ListItemText>{t.title}</ListItemText>
            <IconButton aria-label="delete" onClick={() => handleDelete(t.id)}>
              <Toast
                text="This task has been removed!"
                handleCloseToast={handleCloseToast}
                openToast={openToast}
                setOpenToast={setOpenToast}
              />

              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="edit" onClick={() => handleOpenModal()}>
              <EditIcon />
            </IconButton>
            {/* <p>{t.done ? t.createdAt.toLocaleString() : 'in progress'}</p> */}
            <p>{t.createdAt ? t.createdAt.toLocaleString() : 'in progress'}</p>
            <CustomModal
              handleCloseModal={handleCloseModal}
              openModal={openModal}
              title={t.title}
              handleChange={handleChange}
              updateTask={updateTask}
            />
          </ListItem>
        ))}
    </List>
  );
};

export default ListOfTasks;
