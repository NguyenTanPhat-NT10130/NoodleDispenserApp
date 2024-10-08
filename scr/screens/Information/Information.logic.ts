import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store/store';
import { getNoodles, setNoodlesLeft } from '../../redux/slices/noodlesSlice';
import { fetchUserData } from '../../redux/slices/userSlice';
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



export const useUserInformation = (phoneNumber: string) => {
  const dispatch: AppDispatch = useDispatch();

  // Lấy dữ liệu người dùng từ Redux store
  const userData = useSelector((state: RootState) => state.user.userData[phoneNumber]);

  useEffect(() => {
    if (phoneNumber && !userData) {
      console.log("Fetching user data for:", phoneNumber);
      // Dispatch action để fetch dữ liệu từ Firestore dựa trên phoneNumber
      dispatch(fetchUserData(phoneNumber.toString()));
    }
  }, [dispatch, phoneNumber, userData]);

  console.log("User data:", userData);
  return userData;  // Chỉ trả về dữ liệu người dùng để hiển thị, không cần xử lý noodlesLeft ở đây
};

