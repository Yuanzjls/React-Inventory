import {setEdit, setVehicle, deleteVehicle} from "../../features/inventorySlice";
import {useDispatch} from "react-redux";
import {useState} from "react";
import "./index.css"
export default function Item(props){
    const dispatch = useDispatch();

    // No need to use state here
    // You can just read the value from your redux store, and render the values in the UI
    // To edit, make a copy of your current value from the redux store.
    // If changes needs to be saved, then dispatch the new value
    // If changes doesn't need to be saved, then don't dispatch the new value and resume the UI state with the copied value
    // So in the end, the only local state you need is isEditing
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

    // this can be simplified as
    // return props.value['isEdit'] ? (<div>...</div>) : (<div>...</div>);
    // In fact, the following two UIs can be merged into one.
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