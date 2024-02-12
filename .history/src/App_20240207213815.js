import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';

function App() {
  return (
<>
<Navbar title="My Website" about="About Us" home="HomePage" mode={mode}   />
<About/>
</>
  );
}

export default App;
