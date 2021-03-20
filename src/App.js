import './index.css';
import {Searchbar} from "./components";
import {Inventory} from "./components";
import {useSelector} from "react-redux"
import {selectInventory} from"./features/inventorySlice"

function App() {

  const inventoryList = useSelector(selectInventory);  
  return (
    <div className="App">
      <h1>Inventory</h1>
      
      <Searchbar length={inventoryList.length}/>
      <Inventory inventoryList={inventoryList}/>
            
    </div>
  );
}

export default App;
