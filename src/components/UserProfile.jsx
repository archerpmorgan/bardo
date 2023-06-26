import { useState } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { useNavigation } from 'react-router-dom';


export default function UserProfile() {

  const homeHandler = () => {
    navigate("/landing");
  };

  return (
    <Paper>
      <Typography>Displaying currently known user profile data</Typography>
      <HomeButton onPress={homeHandler} text="HOME" />
    </Paper>
  );
}

const HomeButton = ({ onPress, text }) => {
  return (
    <Button onClick={onPress}>
      {text}
    </Button>
  );
};



