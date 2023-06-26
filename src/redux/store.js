import { configureStore} from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import userProfileReducer from './slices/userProfileSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    userProfile: userProfileReducer,
  },
})

store.subscribe(() => console.log('Redux change'));

export default store;