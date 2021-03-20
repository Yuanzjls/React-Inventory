import {selectInventory} from "../../features/inventorySlice";
import {useSelector, useDispatch} from "react-redux";
import Item from "./item.jsx"
export default function Inventory(props){    
    
    return (
        <div>
            <div className="flex-container">
                <div className="flex-item">ID</div>
                <div className="flex-item">Vehicle</div>
                <div className="flex-item">Type</div>
                <div className="flex-item">Fuel</div>
                <div className="flex-item">Color</div>      
                <div className="flex-item"></div>
                <div className="flex-item"></div>      
            </div>
            {props.inventoryList.value.filter(item=>
                item["Vehicle"].includes(props.inventoryList.filter)
            ).map(inventory=>{                
                    return (<Item key={inventory.ID} value={inventory}/>);
                })}
  
        </div>
    );

}