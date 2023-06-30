import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import AccountBox from './AccountBox';

const Landing = () => {

  const navigate = useNavigate();

  return (
    <>
      <AccountBox></AccountBox>
      <Card sx={{ width: "1000", height: "1000" }}>
        <CardContent>
          <Button onClick={() => { navigate("/interaction") }}>Begin Interaction</Button>
        </CardContent>
        <Typography>Test?</Typography>
        <Checkbox defaultChecked={true} onClick={() => { setTest(!test) }}></Checkbox>
      </Card >
    </>
  );
}

export default Landing;