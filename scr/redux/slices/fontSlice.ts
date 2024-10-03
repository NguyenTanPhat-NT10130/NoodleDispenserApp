import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as Font from 'expo-font';

export const loadFonts = createAsyncThunk('fonts/loadFonts', async () => {
  await Font.loadAsync({
    'SVNNexaRustSlabBlackShadow': require('../../../assets/fonts/SVN-Nexa_Rust_Slab_Black_Shadow.ttf'),
    'Nunito-Bold': require('../../../assets/fonts/Nunito/static/Nunito-ExtraBold.ttf'),
    'timeNew': require('../../../assets/fonts/times new roman.ttf'),
    'Paytone One': require('../../../assets/fonts/PaytoneOne-Regular.ttf'),
    'Mplus 1p' : require('../../../assets/fonts/M_PLUS_1p/MPLUS1p-ExtraBold.ttf')
  });
  return true;
});

const fontSlice = createSlice({
  name: 'fonts',
  initialState: {
    fontsLoaded: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadFonts.fulfilled, (state) => {
      state.fontsLoaded = true;
    });
  },
});

export default fontSlice.reducer;
