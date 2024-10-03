import { useFonts } from 'expo-font';

export const useCustomFonts = (): boolean => {
  const [fontsLoaded] = useFonts({
    'SVNNexaRustSlabBlackShadow': require('../../assets/fonts/SVN-Nexa_Rust_Slab_Black_Shadow.ttf'),
    'NunitoRegular': require('../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
    'timeNew': require('../../assets/fonts/times new roman.ttf'),
  });

  return fontsLoaded;  // Kiểu trả về là boolean
};
