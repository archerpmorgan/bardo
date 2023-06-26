import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  userId: null
};


// note: there is state mutating logic in these reducers, which is only made possible by the abstraction created by the toolkit
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // action: {type = userProfile/updateName}
    setLogin: (state, action) => {
      state.loggedIn = action.payload.loggedIn;
      state.userId = action.payload.userId;
    },
    setLogout: (state) => {
      state.loggedIn = false;
      state.userId = null;
    }
  }
});

export const { setLogin, setLogout } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
