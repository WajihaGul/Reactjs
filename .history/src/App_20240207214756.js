import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
//const [mode,switchMode]=useState("light");
return (
<>
<Navbar title="My Website" about="About Us" home="HomePage" mode={mode}   />

</>
  );
}

export default App;
