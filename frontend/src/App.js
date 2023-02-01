import './App.css';
// import Home from './components/Home';
import { AdminView } from './Components/AdminView/AdminView';
import {Header} from './Components/Header/Header'
import { Languages } from './Components/Languages/Languages';
function App() {
  return (
    <div className="App">
    <Header></Header>
    <Languages></Languages>


    <AdminView></AdminView>

    </div>
  );
}

export default App;
