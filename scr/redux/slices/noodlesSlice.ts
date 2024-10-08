import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Mảng chứa các đường dẫn ảnh tĩnh cho cốc mì (cup images)
const cupImages = [
  require('../../../assets/images/cup1.png'),
  require('../../../assets/images/cup2.png'),
  require('../../../assets/images/cup3.png'),
  require('../../../assets/images/cup0.png'), // Ảnh khi hết mì (cup0)
];

interface NoodlesState {
  noodlesLeft: number;
  images: { cupImage: any, pickImage: any }[]; // Chứa cả cupImage và pickImage
}

const initialState: NoodlesState = {
  noodlesLeft: 3,
  images: [
    { cupImage: cupImages[0], pickImage: require('../../../assets/images/pick.png') },
    { cupImage: cupImages[1], pickImage: require('../../../assets/images/pick.png') },
    { cupImage: cupImages[2], pickImage: require('../../../assets/images/pick.png') },
  ],
};

const noodlesSlice = createSlice({
  name: 'noodles',
  initialState,
  reducers: {
    getNoodles: (state) => {
      if (state.noodlesLeft > 0) {
        state.images[state.noodlesLeft - 1] = {
          cupImage: cupImages[3], // Cập nhật thành cup0 khi hết mì
          pickImage: cupImages[3],
        };
        state.noodlesLeft -= 1;
      }
    },
    setNoodlesLeft: (state, action: PayloadAction<number>) => {
      state.noodlesLeft = action.payload;
      // Reset lại images dựa trên noodlesLeft mới
      state.images = state.images.map((image, index) => {
        if (index < state.noodlesLeft) {
          return {
            cupImage: cupImages[index], // Lấy ảnh cốc mì tương ứng từ mảng tĩnh
            pickImage: require('../../../assets/images/pick.png'), // Hình ảnh pick tương ứng
          };
        } else {
          return {
            cupImage: cupImages[3], // Hết mì thì dùng cup0
            pickImage: cupImages[3], // Hình ảnh pick khi hết mì
          };
        }
      });
    },
  },
});

export const { getNoodles, setNoodlesLeft } = noodlesSlice.actions;
export default noodlesSlice.reducer;
