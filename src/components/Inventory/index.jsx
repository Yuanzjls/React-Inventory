import {selectInventory} from "../../features/inventorySlice";
import {useSelector} from "react-redux";

export default function Inventory(){

    const inventoryList = useSelector(selectInventory);
  
    
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
            {inventoryList.map(inventory=>
                (<div className="flex-container flex-content" >
                    <div className="flex-item">{inventory["ID"]}</div>
                    <div className="flex-item">{inventory["Vehicle"]}</div>    
                    <div className="flex-item">{inventory["Type"]}</div>
                    <div className="flex-item">{inventory["Fuel"]}</div>
                    <div className="flex-item">{inventory["Color"]}</div>                    
                    <div className="flex-item">
                    <button type="submit">Edit</button>
                </div>
                <div className="flex-item">
                    <button type="submit">Delete</button>       
                </div>      
                </div>
                ))}
  
        </div>
    );

}