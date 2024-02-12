import './App.css';
import Navbar from './Components/Navbar';

import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
     
    }
  }
return (
<>
<Navbar title="My Website" about="About Us" home="HomePage" mode={mode} toggleMode={toggleMode}   />
<TextArea/>
</>
  );
}

export default App;
