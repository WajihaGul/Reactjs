import logo from './logo.svg';
import './App.css';
import TextArea from './Components/TextArea';
import Navbar from './Components/Navbar';

function App() {
  return (
 <>
<Navbar title="My Website" about="About Us" home="HomePage" />
<TextArea />
 </>
  );
}

export default App;
