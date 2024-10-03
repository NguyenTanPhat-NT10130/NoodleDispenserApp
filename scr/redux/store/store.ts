import { configureStore } from '@reduxjs/toolkit';
import fontReducer from '../slices/fontSlice';
import noodlesReducer from '../slices/noodlesSlice';
const store = configureStore({
  reducer: {
    fonts: fontReducer,
    noodles: noodlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Định nghĩa kiểu AppDispatch từ store
export type AppDispatch = typeof store.dispatch;

export default store;
