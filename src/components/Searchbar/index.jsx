import "./index.css"
import {searchVehicle} from "../../features/inventorySlice"
import {useState} from "react"
import {useDispatch} from 'react-redux'


function Searchbar(props){
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
   
  const inventoryLength= props.length;
  const noun = inventoryLength>1?"vehicles":"vehicle";

    function submitHandle(e){
      e.preventDefault();
      dispatch(searchVehicle(searchName));
      setSearchName('');
    }

    return (
      <form onSubmit={submitHandle}>                 
        <div>
          <label htmlFor="searchText">Found {inventoryLength} {noun}</label>
          <br></br>
          <div className="flex-container"> 
            <input type="text" id="searchText" placeholder="Enter vehicle name here" 
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