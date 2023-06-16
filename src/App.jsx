import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import InteractionContainer from './components/InteractionContainer';
import './App.css';

function App() {

  const [beginClicked, setBeginClicked] = useState(false);
  const [test, setTest] = useState(true);

  const handleBeginInteraction = () => {
    console.log('Begin Interaction');
    setBeginClicked(true);
  }

  return (
    beginClicked ?
      <InteractionContainer setBackHome={setBeginClicked} />
      :
      <Card sx={{ width: "1000", height: "1000"}}>
        <CardContent>
          <Button onClick={handleBeginInteraction}>Begin Interaction</Button>
        </CardContent>
        <Typography>Test?</Typography>
        <Checkbox defaultChecked={true} onClick={() => { setTest(!test) }}></Checkbox>
      </Card >
  );
}

export default App

