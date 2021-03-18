import {createSlice, createStore} from '@reduxjs/toolkit';


export const inventorySlice = createStore({
    name: "inventory",
    initialState: 
        [
            {
                ID:1,
                Vehicle: "BMW 3",
                Type: "Sedan",
                Fuel: "Gasoline",
                Color: "Blue",
            },
            {
                ID:2,
                Vehicle: "Tesla Model 3",
                Type: "Sedan",
                Fuel: "Electric",
                Color: "White",
            },
            {
                ID:3,
                Vehicle: "Honda Civic",
                Type: "Sedan",
                Fuel: "Gasoline",
                Color: "Black",
            },
            {
                ID:4,
                Vehicle: "Toyata RAV4",
                Type: "SUV",
                Fuel: "Hybrid",
                Color: "Black",
            },
            {
                ID:5,
                Vehicle: "Ford F-150",
                Type: "SUV",
                Fuel: "Gasoline",
                Color: "White",
            }
        ],
    reducers: {
        getvalue: state=>state,
    }
});

export const selectInventory = state=>state.inventroy;

export default inventorySlice.reducers;