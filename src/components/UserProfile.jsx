import { useState } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { useNavigation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectUserProfile
} from '../redux/slices/userProfileSlice';

export default function UserProfile() {

  const userProfile = useSelector(selectUserProfile);
  console.log(userProfile);

  const homeHandler = () => {
    navigate("/landing");
  };

  return (
    <Paper>
      <Typography>Displaying currently known user profile data</Typography>
      <Typography>photo: {userProfile.photo}</Typography>
      <Typography>name: {userProfile.name}</Typography>
      <Typography>email: {userProfile.email}</Typography>
      <Typography>userId: {userProfile.userId}</Typography>
      <Typography>defaultBookendOpenText: {userProfile.defaultBookendOpenText}</Typography>
      <Typography>defaultBookendCloseText: {userProfile.defaultBookendCloseText}</Typography>
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



