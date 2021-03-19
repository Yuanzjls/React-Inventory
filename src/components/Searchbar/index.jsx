import "./index.css"
import {searchVehicle} from "../../features/inventorySlice"
function Searchbar(){

  const [searchName, setSearchName] = useState('');

    function submitHandle(e){
      e.preventDefault();

      setSearchName('');
    }


    return (
      <form onSubmit={submitHandle}>                 
        <div>
          <label htmlFor="searchtext">Found 50 Vehicles</label>
          <br></br>
          <div className="flex-container"> 
            <input type="text" id="searchtext" placeholder="Enter vechicle name here" 
            value={searchName} onChange={e=>{setSearchName(e.target.value);}}/>       
            <div>
            <button type="submit">Search</button>
            </div>
          </div>
        </div>
      </form>
    );
}

export default Searchbar;