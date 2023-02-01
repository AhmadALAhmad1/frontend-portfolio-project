import './App.css';
// import Home from './components/Home';
import { AdminView } from './Components/AdminView/AdminView';
import {Header} from './Components/Header/Header'

function App() {
  return (
    <div className="App">
    <Header></Header>
    <AdminView></AdminView>

    </div>
  );
}

export default App;
