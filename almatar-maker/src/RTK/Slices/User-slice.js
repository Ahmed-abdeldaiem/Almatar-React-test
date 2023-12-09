import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'login-user',
  initialState: { value: '' },
  reducers: {
    setloginAccess: (state,action) => {
     return action.payload;
    },
  
  },
});

export const { setloginAccess } = userSlice.actions;
export default userSlice.reducer;
