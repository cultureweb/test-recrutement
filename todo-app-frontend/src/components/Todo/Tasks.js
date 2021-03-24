import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Tasks = () => {
  const classes = useStyles();

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: tasks.length,
      description: task,
    };

    setTasks((prevState) => [...prevState, newTask]);
    setTask('');
  };

  return (
    <>
      <h1>tasks</h1>
      <form
        onSubmit={addTask}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={task}
          id="standard-basic"
          label="Type and Enter to add a task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </form>
    </>
  );
};
export default Tasks;
