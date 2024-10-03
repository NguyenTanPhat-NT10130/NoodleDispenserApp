import { createSlice } from '@reduxjs/toolkit';

interface NoodlesState {
  noodlesLeft: number;
  images: { cupImage: any, pickImage: any }[]; // Chứa cả cupImage và pickImage
}

const initialState: NoodlesState = {
  noodlesLeft: 3,
  images: [
    { cupImage: require('../../../assets/images/cup1.png'), pickImage: require('../../../assets/images/pick.png') },
    { cupImage: require('../../../assets/images/cup2.png'), pickImage: require('../../../assets/images/pick.png') },
    { cupImage: require('../../../assets/images/cup3.png'), pickImage: require('../../../assets/images/pick.png') },
  ],
};

const noodlesSlice = createSlice({
  name: 'noodles',
  initialState,
  reducers: {
    getNoodles: (state) => {
      if (state.noodlesLeft > 0) {
        state.images[state.noodlesLeft - 1] = {
          cupImage: require('../../../assets/images/cup0.png'),
          pickImage: require('../../../assets/images/cup0.png'), 
        };
        state.noodlesLeft -= 1;
      }
    },
  },
});

export const { getNoodles } = noodlesSlice.actions;
export default noodlesSlice.reducer;
