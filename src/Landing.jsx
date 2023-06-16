import React, { Button, Text } from 'react';
import TestCheckBox from './components/TestCheckBox';

const Landing = ({ setBeginClicked }) => {

  const handleBeginInteraction = () => {
    console.log('Begin Interaction');
    setBeginClicked(true);
  }

  return (
    // <div style={styles.container}>
      <Text>Hello Archer!</Text>
      /* <Button title='Begin Interaction' onPress={handleBeginInteraction} />
      {<TestCheckBox title='Test?' checked={true} onChange={() => { }} />}
    </div> */
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Landing;