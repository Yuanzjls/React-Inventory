import {setEdit, setVehicle, deleteVehicle} from "../../features/inventorySlice";
import {useDispatch} from "react-redux";
import {useState} from "react";
import "./index.css"
export default function Item(props){
    const dispatch = useDispatch();
    const [state, setState] = useState({
        "Vehicle":props.value.Vehicle,
        "Type":props.value.Type,
        "Fuel":props.value.Fuel,
        "Color":props.value.Color,
    });

    const [newState, setNewState] = useState({
        "Vehicle":props.value.Vehicle,
        "Type":props.value.Type,
        "Fuel":props.value.Fuel,
        "Color":props.value.Color,
    });
    function handleValueChange(e){
        setNewState({...newState, [e.target.name]:e.target.value});
    }
    if (props.value['isEdit']===false) {
        return (<div className="flex-container flex-content" >
                    <div className="flex-item">{props.value["ID"]}</div>
                            <div className="flex-item">{state["Vehicle"]}</div>    
                            <div className="flex-item">{state["Type"]}</div>
                            <div className="flex-item">{state["Fuel"]}</div>
                            <div className="flex-item">{state["Color"]}</div>                    
                            <div className="flex-item">
                            <button type="button" onClick={()=>{
                                dispatch(setEdit({ID: props.value["ID"]}));
                            }}>Edit</button>
                        </div>
                        <div className="flex-item" onClick={()=>dispatch(deleteVehicle({ID: props.value["ID"]}))}>
                            <button type="button">Delete</button>       
                        </div>     
        </div>)
    }
    else {
        return (<div className="flex-container flex-content" >
                <div className="flex-item">{props.value["ID"]}</div>  
                <div className="flex-item">
                    <input type="text" value={newState["Vehicle"]} name="Vehicle" onChange={(e)=>{
                            handleValueChange(e);
                        }}/>
                </div>    
                <div className="flex-item">
                    <input type="text" value={newState["Type"]} name="Type" onChange={(e)=>{
                            handleValueChange(e);
                        }}/>
                </div>
                <div className="flex-item">
                    <input type="text" value={newState["Fuel"]} name="Fuel" onChange={(e)=>{
                            handleValueChange(e);}}/>
                </div>
                <div className="flex-item">
                    <input type="text" value={newState["Color"]} name="Color" onChange={(e)=>{
                            handleValueChange(e);}}/>
                </div>                    
                <div className="flex-item">
                <button type="button" onClick={()=>{
                    setState(newState);
                    dispatch(setVehicle({...newState, ID: props.value["ID"]}));
                }}>Confirm</button>
            </div>
            <div className="flex-item">
                <button type="button" onClick={()=>{
                    dispatch(setEdit({ID: props.value["ID"]}));
                }}>Cancel</button>       
            </div>      
            </div>
            );
    }
}