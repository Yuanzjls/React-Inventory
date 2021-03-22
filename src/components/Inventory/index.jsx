import Item from "./item.jsx"
import {createSelector} from "reselect" // unused import, can be removed
import {useState} from "react"
import {selectInventory} from "../../features/inventorySlice" // unused import, can be removed
import { connect } from 'react-redux' // unused import, can be removed

export default function Inventory(props){
    const itemsPerPage = 5, length = props.inventoryList.length;
    const [page, setPage] = useState(0);
    const pages = length / itemsPerPage;
    const buttons = [];

    for (let i=0; i<pages; i++) {
        buttons.push(<button key={i} onClick={()=>setPage(i)}>{i+1}&nbsp;&nbsp;</button>);
    }
    if (page>0 && page >= pages) {
        setPage(page-1);
    }
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
            {props.inventoryList.filter((value, index)=>
                index>=itemsPerPage*page && index<itemsPerPage*(page+1) // this filter logic can be moved into a function
            ).map(inventory=>{
                    return (<Item key={inventory.ID} value={inventory}/>);
                })}

            <div>
                {buttons}

            </div>

        </div>
    );
}
