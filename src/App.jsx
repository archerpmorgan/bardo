import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import InteractionContainer from './components/InteractionContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const [beginClicked, setBeginClicked] = useState(false);
  const [test, setTest] = useState(true);

  const handleBeginInteraction = () => {
    console.log('Begin Interaction');
    setBeginClicked(true);
  }

  return (

    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          beginClicked ?
            <InteractionContainer setBackHome={setBeginClicked} />
            :
            <Card sx={{ width: "1000", height: "1000" }}>
              <CardContent>
                <Button onClick={handleBeginInteraction}>Begin Interaction</Button>
              </CardContent>
              <Typography>Test?</Typography>
              <Checkbox defaultChecked={true} onClick={() => { setTest(!test) }}></Checkbox>
            </Card >
        } />
      </Routes>
    </Router>
  );
}

export default App

