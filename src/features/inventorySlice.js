import {createSlice} from '@reduxjs/toolkit';
import faker from "faker"

export const inventorySlice = createSlice({
    name: "inventory",
    initialState: {
        value:Array.from(Array(30).keys()).map(item=>({
            ID: item+1,
            Vehicle: faker.vehicle.vehicle(),
            Type: faker.vehicle.type(),
            Fuel: faker.vehicle.fuel(),
            Color: faker.vehicle.color(),
        })),
        filter:"",
    },        
    reducers: {
        searchVehicle: (state, action)=>{
            return {...state, filter:action.payload};
        },
        setVehicle:(state, action)=>{
            return {...state, value: state.value.map(item=>{
                if (item.ID===action.payload.ID){
                    return {...action.payload};
                } 
                return item;
            })};
        },
        deleteVehicle:(state, action)=>{
            return {...state, value: state.value.filter(item=>item.ID!==action.payload.ID)}
        }
    }
});

export const {searchVehicle, setVehicle, deleteVehicle} = inventorySlice.actions;

export const selectInventory = state=> state.inventory.value.filter(item=>item["Vehicle"].includes(state.inventory.filter));

export default inventorySlice.reducer;