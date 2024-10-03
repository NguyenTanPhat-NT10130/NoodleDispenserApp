import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store/store';
import { getNoodles } from '../../redux/slices/noodlesSlice';

export const useInformationLogic = () => {
  const noodlesLeft = useSelector((state: RootState) => state.noodles.noodlesLeft);
  const images = useSelector((state: RootState) => state.noodles.images);

  const dispatch: AppDispatch = useDispatch();

  const handleGetNoodles = () => {
    if (noodlesLeft > 0) {
      dispatch(getNoodles()); // Gọi hàm getNoodles để cập nhật trạng thái
    }
    
  };

  return {
    noodlesLeft,
    images,
    handleGetNoodles,
  };
};
