import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../components/ItemSlice';

export default configureStore({
  reducer: {
    items_: itemReducer,
  },
});