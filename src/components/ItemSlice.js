import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'items_',
  initialState: {
    items: [
        {
          id: 1,
          name: "ITEM-65",
          quantity: "34",
        }, 
         {
          id: 2,
          name: "ITEM-34",
          quantity: "100"
        },
        {
          id: 3,
          name: "ITEM-44",
          quantity: "90"
        },
        {
          id: 4,
          name: "ITEM-55",
          quantity: "85"
        },
        {
          id: 5,
          name: "ITEM-67",
          quantity: "65"
        }
      ],
      users:[
        {
          name: "John",
          password:"john@123",
          role: "user"
        }, 
         {
          name: "James",
          password:"james@123",
          role: "admin"
        },
        {
          name: "Robert",
          password:"robert@123",
          role: "user"
        },
        {
          name: "Michael",
          password:"michael@123",
          role: "admin"
        },
        {
          name: "William",
          password:"william@123",
          role: "user"
        }
      ],
    loading: false,
  },
  reducers: {
    login: (state,action) => {
      state.users = action.payload;
    },
    addItem: ( state, action) => {
       const newItem={
            id: state.items.length + 1,
            name: action.payload.itemName,
            quantity: action.payload.itemQuantity
          }
      state.items.push(newItem)
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item)=>item.id !== action.payload.id)
    },
  },
});

export const { addItem,deleteItem} = slice.actions;

export default slice.reducer;
