import './index.css';
import {Searchbar} from "./components";
import {Inventory} from "./components";

function App() {
  return (
    <div className="App">
      <h1>Inventory</h1>
      
      <Searchbar/>
      <Inventory/>
            
    </div>
  );
}

export default App;
