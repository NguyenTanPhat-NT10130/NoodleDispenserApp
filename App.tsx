import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './scr/redux/store/store';
import store from './scr/redux/store/store';
import { loadFonts } from './scr/redux/slices/fontSlice';
import Navigation from './scr/navigation/Navigation';
const FontLoader = () => {
  const dispatch = useDispatch<AppDispatch>(); // Sử dụng AppDispatch
  const fontsLoaded = useSelector((state: RootState) => state.fonts.fontsLoaded);

  useEffect(() => {
    dispatch(loadFonts());
  }, [dispatch]);

  if (!fontsLoaded) {
    return null; // Render loading screen while fonts load
  }

  return <Navigation />; // Render your main components when fonts are ready
};
export default function App() {
  return (
    <Provider store={store}>
      <FontLoader />
    </Provider>
  );
}

