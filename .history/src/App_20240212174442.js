import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextArea from  './Components/TextArea';
import { useState } from 'react';


function App() {
const  [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  const setTimeout(()=>{
    setAlert(null);
  },3000);
}

return (
<>
<Navbar title="My Website" about="About Us" home="HomePage"   />
<Alert alert={alert}/>
<TextArea  showAlert={showAlert}/>

</>
  );
}

export default App;