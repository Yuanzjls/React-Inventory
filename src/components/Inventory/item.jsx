import {setVehicle, deleteVehicle} from "../../features/inventorySlice";
import {useDispatch} from "react-redux";
import {useState} from "react";
import "./index.css"
export default function Item(props){
    const dispatch = useDispatch();

    const [isEdit, setEdit] = useState(false);

    const [state, setState] = useState({
        "Vehicle":props.value.Vehicle,
        "Type":props.value.Type,
        "Fuel":props.value.Fuel,
        "Color":props.value.Color,
    });

    
    function handleValueChange(e){
        setState({...state, [e.target.name]:e.target.value});
    }
    if (isEdit===false) {
        return (<div className="flex-container flex-content" >
                    <div className="flex-item">{props.value["ID"]}</div>
                            <div className="flex-item">{props.value["Vehicle"]}</div>    
                            <div className="flex-item">{props.value["Type"]}</div>
                            <div className="flex-item">{props.value["Fuel"]}</div>
                            <div className="flex-item">{props.value["Color"]}</div>                    
                            <div className="flex-item">
                            <button type="button" onClick={()=>{
                                setEdit(true);
                                setState({
                                    "Vehicle":props.value.Vehicle,
                                    "Type":props.value.Type,
                                    "Fuel":props.value.Fuel,
                                    "Color":props.value.Color,
                                })
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
                    <input type="text" value={state["Vehicle"]} name="Vehicle" onChange={(e)=>{
                            handleValueChange(e);
                        }}/>
                </div>    
                <div className="flex-item">
                    <input type="text" value={state["Type"]} name="Type" onChange={(e)=>{
                            handleValueChange(e);
                        }}/>
                </div>
                <div className="flex-item">
                    <input type="text" value={state["Fuel"]} name="Fuel" onChange={(e)=>{
                            handleValueChange(e);}}/>
                </div>
                <div className="flex-item">
                    <input type="text" value={state["Color"]} name="Color" onChange={(e)=>{
                            handleValueChange(e);}}/>
                </div>                    
                <div className="flex-item">
                <button type="button" onClick={()=>{
                    dispatch(setVehicle({...state, ID: props.value["ID"]}));
                    setEdit(false);
                }}>Confirm</button>
            </div>
            <div className="flex-item">
                <button type="button" onClick={()=>{
                    setEdit(false);
                }}>Cancel</button>       
            </div>      
            </div>
            );
    }
}