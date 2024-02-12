import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextArea from  './Components/TextArea';

function App() {
  return (
<>
<Navbar title="My Website" about="About Us" home="HomePage"   />
<TextArea/>
<Alert alert={alert}/>
</>
  );
}

export default App;