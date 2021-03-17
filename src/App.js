import './index.css';
import {Searchbar} from "./components"
function App() {
  return (
    <div className="App">
      <h1>Inventory</h1>
      
      <Searchbar/>
      <div id="table-like">
        <div id="table-like title">
          <span>ID</span>
          <span>Vehicle</span>
          <span>Type</span>
          <span>Fuel</span>
          <span>Color</span>          
        </div>
        <div id="table-like ">
          <span>1</span>
          <span>BMW</span>
          <span>Sedan</span>
          <span>Gasline</span>
          <span>Blue</span>
          <div className="flex-container">
            <div><button>Edit</button></div>
            <div><button>Delete</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
