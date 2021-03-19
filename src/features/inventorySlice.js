import {createSlice, createStore} from '@reduxjs/toolkit';
import faker from "faker"

export const inventorySlice = createSlice({
    name: "inventory",
    initialState: {
        value:Array.from(Array(10).keys()).map(item=>({
            ID: item+1,
            Vehicle: faker.vehicle.vehicle(),
            Type: faker.vehicle.type(),
            Fuel: faker.vehicle.fuel(),
            Color: faker.vehicle.color(),
            isEdit: false,
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
                    return {...action.payload, isEdit:!item.isEdit};
                } 
                return item;
            })};
        },
        setEdit:(state, action)=>{
            return {...state, value: state.value.map(item=>{
                if (item.ID===action.payload.ID){
                    return {...item, isEdit:!item.isEdit};
                } 
                return item;
            })};
        },
        deleteVehicle:(state, action)=>{
            return {...state, value: state.value.filter(item=>item.ID!==action.payload.ID)}
        }
    }
});

export const {searchVehicle, setEdit, setVehicle, deleteVehicle} = inventorySlice.actions;

export const selectInventory = state=> state.inventory;

export default inventorySlice.reducer;