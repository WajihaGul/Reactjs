import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  return (
    <>
      <Navbar title="My Website" about="About Us" home="HomePage" mode={mode} toggleMode={toggleMode} />
      <TextArea mode={mode} />
    </>
  );
}

export default App;
