import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextArea from  './Components/TextArea';

function App() {
  return (
<>
<Alert alert={alert}/>
<Navbar title="My Website" about="About Us" home="HomePage"   />
<TextArea/>

</>
  );
}

export default App;