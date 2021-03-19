import {createSlice, createStore} from '@reduxjs/toolkit';
import faker from "faker"

export const inventorySlice = createSlice({
    name: "inventory",
    initialState: 
        Array.from(Array(10).keys()).map(item=>({
            ID:item+1,
            Vehicle: faker.vehicle.vehicle(),
            Type: faker.vehicle.type(),
            Fuel: faker.vehicle.fuel(),
            Color: faker.vehicle.color(),
        })),        
    reducers: {
        searchVehicle: (state, action)=>state.inventory.filter((item)=>
            item.Vehicle.include(action.payload)),
    }
});

export const {searchVehicle} = inventorySlice.actions;

export const selectInventory = state=>{
    return state.inventory};

export default inventorySlice.reducer;