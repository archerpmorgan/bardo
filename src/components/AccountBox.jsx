import { Button, Typography, Card, CardContent } from '@mui/material';
import { useNavigate, useNavigationType } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  selectAuth
} from '../redux/slices/authSlice';
import {
  selectUserProfile, getUserProfileAsync, selectLoadingStatus, selectFetchComplete
} from '../redux/slices/userProfileSlice';

export default function AccountBox() {

  const auth = useSelector(selectAuth);
  const userProfile = useSelector(selectUserProfile);
  const isLoading = useSelector(selectLoadingStatus);
  const isFetchComplete = useSelector(selectFetchComplete);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("useEffect ran")
  //   if (auth.loggedIn && !isFetchComplete && !isLoading) {
  //     console.log("we're logged in -- fetching user")
  //     dispatch(getUserProfileAsync());
  //   }
  // }, [dispatch])

  const loggedInLabel = auth.loggedIn ? <Typography>you are logged in with ID: {auth.userId}</Typography> : <Typography>not logged in</Typography>
  const profileDataLabel = isFetchComplete ? <Typography>Data Fetched</Typography>
    : <Typography>Loading</Typography>

  return (
    <Card sx={{ width: "1000", height: "1000" }}>
      {loggedInLabel}
      {profileDataLabel}
      <CardContent>
        {auth.loggedIn ?
          <>
            <Button onClick={() => { navigate("/login") }}>Log out</Button>
            <Button onClick={() => { navigate("/user") }}>Profile</Button>
          </>
          :
          <>
            <Button onClick={() => { console.log(auth) }}>print auth state</Button>
            <Button onClick={() => { navigate("/login") }}>Log in</Button>
            <Button disabled onClick={() => { navigate("/user") }}>Profile</Button>
          </>
        }
      </CardContent>
    </Card >
  );
}