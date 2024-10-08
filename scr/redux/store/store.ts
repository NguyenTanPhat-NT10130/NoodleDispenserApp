import { configureStore } from '@reduxjs/toolkit';
import fontReducer from '../slices/fontSlice';
import noodlesReducer from '../slices/noodlesSlice';
import userReducer from '../slices/userSlice';
const store = configureStore({
  reducer: {
    fonts: fontReducer,
    noodles: noodlesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Định nghĩa kiểu AppDispatch từ store
export type AppDispatch = typeof store.dispatch;

export default store;
