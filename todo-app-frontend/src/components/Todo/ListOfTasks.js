import React, { useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

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
        </ListItem>
      ))}
    </List>
  );
};

export default ListOfTasks;
