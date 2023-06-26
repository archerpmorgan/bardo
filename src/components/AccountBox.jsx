import { Button, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectAuth
} from '../redux/slices/authSlice';

export default function AccountBox() {

  const auth = useSelector(selectAuth);
  console.log(auth);

  const navigate = useNavigate();
  const loggedInLabel = auth.loggedIn ? <Typography>you are logged in with ID: {auth.userId}</Typography> : <Typography>not logged in</Typography>

  return (
    <Card sx={{ width: "1000", height: "1000" }}>
      {loggedInLabel}
      <CardContent>
        {auth.loggedIn ?
          <>
            <Button onClick={() => { navigate("/login") }}>Log out</Button>
            <Button onClick={() => { navigate("/user") }}>Profile</Button>
          </>
          :
          <>
            <Button onClick={() => { console.log(auth)}}>print auth state</Button>
            <Button onClick={() => { navigate("/login") }}>Log in</Button>
            <Button disabled onClick={() => { navigate("/user") }}>Profile</Button>
          </>
        }
      </CardContent>
    </Card >
  );



}