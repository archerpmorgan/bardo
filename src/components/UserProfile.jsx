import { useState, useEffect } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectUserProfile, selectFetchComplete
} from '../redux/slices/userProfileSlice';
import {
  selectAuth
} from '../redux/slices/authSlice';

export default function UserProfile() {

  const auth = useSelector(selectAuth);
  const userProfile = useSelector(selectUserProfile);
  const fetchComplete = useSelector(selectFetchComplete);

  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };

  // eventual styling till be to have everything be editable where it is displayed
  // perhaps with a hover or a tooltip icon
  return (
    <Paper>
      <Typography>Profile Data</Typography>
      <Typography>Displaying currently known user profile data</Typography>
      <Typography>email: {auth.email}</Typography>
      <Typography>userId: {auth.userId}</Typography>
      {fetchComplete ?
        <>
          <Typography>photo: {userProfile.photo}</Typography>
          <Typography>username: {userProfile.username}</Typography>
          <Typography>defaultBookendOpenText: {userProfile.defaultBookendOpenText}</Typography>
          <Typography>defaultBookendCloseText: {userProfile.defaultBookendCloseText}</Typography>
        </> : <></>}
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



