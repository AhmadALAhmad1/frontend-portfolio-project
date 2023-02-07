import './App.css';
// import Home from './components/Home';
import { AdminView } from './Components/AdminView/AdminView';
import {Header} from './Components/Header/Header'
import { Languages } from './Components/Languages/Languages';
import { MyWork } from './Components/MyWork/MyWork';
import { Contact } from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
    <Header></Header>
    <Languages></Languages>
    <MyWork></MyWork>
    {/* <Contact></Contact> */}
    {/* <AdminView></AdminView> */}

    </div>
  );
}

export default App;
