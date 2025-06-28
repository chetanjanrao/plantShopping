import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    
  },
  reducers: {
    addItem: (state, action) => {
     const product = action.payload;
      const existing = state.items.find(item => item.name === product.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
     state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(item => item.name === product.name);
      if (existing) {
        existing.quantity -= 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;