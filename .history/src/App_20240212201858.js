import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextArea from  './Components/TextArea';
import About from './Components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
<Router>
  <Navbar title="My Website" about="About Us" home="HomePage"   />
  <Alert alert={alert}/>
         <Routes>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextArea  showAlert={showAlert}/>
          </Route>
          </Routes>
</Router>
</>
  );
}

export default App;