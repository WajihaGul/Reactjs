import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextArea from  './Components/TextArea';
import About from './Components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
const  [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  });
  setTimeout(()=>{
    setAlert(null)
  },3000);
}
  

return (
<>
<Navbar title="My Website" about="About Us" home="HomePage"   />
<Alert alert={alert}/>
<TextArea  showAlert={showAlert}/>
<About/>
</>
  );
}

export default App;