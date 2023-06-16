import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Bookend from './Bookend';
// import Call from './Call';
import { Button, Paper, Typography } from '@mui/material';


export default function InteractionContainer({ setBackHome }) {

  //what is the data that my InteractionContainer needs to know at any given time?
  //  PhaseId: Which phase are we on?
  const [phaseId, setPhaseId] = useState(0);
  //  SessionId: What is the current session id (for data correlation later)?
  const [sessionId, setSessionId] = useState(uuidv4());
  console.log('New InteractionContainer: sessionId: ' + sessionId);

  const backToHomeSreen = () => {
    // someday save interaction state
    setBackHome(false);
  };

  const backHandler = () => {
    phaseId > 0 ? setPhaseId(phaseId - 1) : backToHomeSreen();
  };

  const nextHandler = () => {
    phaseId < 6 ? setPhaseId(phaseId + 1) : backToHomeSreen();
  };

  const getInnerComponent = (phaseId, sessionId) => {
    switch (phaseId) {
      case 0:
        return <Bookend />;
      case 1:
        return <></>
      // return <Call />
      default:
        return <Typography>Phase {phaseId} Session {sessionId}</Typography>;
    }
  }

  const phaseDesciptions = [
    "Bookend open",
    "Data Gathering - Evaluation 1",
    "Call 1",
    "Data Gathering - Questionaire",
    "Prayer",
    "Action",
    "Bookend close",
    "Data Gathering - Evaluation 2"
  ]

  return (
    <Paper>
      <BackButton onPress={backHandler} text="<= BACK" />
      <Typography>Interaction Container Phase {phaseId}: {phaseDesciptions[phaseId]}</Typography>
      {getInnerComponent(phaseId, sessionId)}
      <NextButton onPress={nextHandler} text="NEXT =>" />
    </Paper>
  );
}

const NextButton = ({ onPress, text }) => {
  return (
    <Button onClick={onPress}>
      {text}
    </Button>
  );
};

const BackButton = ({ onPress, text }) => {
  return (
    <Button onClick={onPress}>
      {text}
    </Button>
  );
};


