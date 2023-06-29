import './App.css';
import ModalButton from './components/ModalButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectBasicExample from './components/Select';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Todorender from './components/Todorender';


function App() {
  return (
    <div className="Container">
      <Header />
      <div className="App">
        <ModalButton />
        <SelectBasicExample />
      </div>
      <AddTask />
      {/* <Todorender/>  */}

    </div>

  );
}

export default App;
