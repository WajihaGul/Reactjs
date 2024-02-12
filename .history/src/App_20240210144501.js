import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Alert from './Components/Alert';
import TextArea from  './Components/TextArea';

function App() {
  return (
<>
<Navbar title="My Website" about="About Us" home="HomePage"   />
<Textarea mode={mode}  onChange={handleChange} value={value}/>
<Alert alert={alert}/>
</>
  );
}

export default App;