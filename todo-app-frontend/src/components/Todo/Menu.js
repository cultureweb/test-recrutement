import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton } from '@material-ui/core';

const Menu = ({ handleClick }) => {
  return (
    <IconButton onClick={handleClick}>
      <AddCircleOutlineIcon />
    </IconButton>
  );
};

export default Menu;
