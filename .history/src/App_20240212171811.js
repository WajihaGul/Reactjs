import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextArea from './Components/TextArea';

function App() {
  const [alert, setAlert] = useState(null);

  // Function to update the alert state
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  return (
    <>
      <Navbar title="My Website" about="About Us" home="HomePage" />
      <Alert alert={alert} />
      <TextArea />
    </>
  );
}

export default App;
