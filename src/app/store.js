import {configureStore} from '@reduxjs/toolkit';
import inventoryReducer from '../features/inventorySlice'

export default configureStore({
    reducer:{
        inventory:inventoryReducer,
    },
});

