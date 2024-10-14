import { useEffect } from 'react';
import { Alert } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store/store';
import { getNoodles, setNoodlesLeft } from '../../redux/slices/noodlesSlice';
import { fetchUserData } from '../../redux/slices/userSlice';
import { FIRESTORE } from '../../firebase/firebaseConfig';
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
      dispatch(fetchUserData(phoneNumber.toString())).then((action: any) => {
        if (action.payload && action.payload.userData) {
          // Sau khi fetch thành công, cập nhật noodlesLeft vào store
          dispatch(setNoodlesLeft(action.payload.userData.noodlesLeft));
        }
      });
    }
  }, [dispatch, phoneNumber, userData]);

  console.log("User data:", userData);
  return userData;  // Chỉ trả về dữ liệu người dùng để hiển thị, không cần xử lý noodlesLeft ở đây
};

// Hàm cập nhật số mì của người dùng
export const updateNoodlesLeft = async (docId: string, newNoodlesLeft: number) => {
  try {
      const userRef = doc(FIRESTORE, 'users', docId);  // Sử dụng docId thay vì phoneNumber

      console.log("Updating noodlesLeft for document ID:", docId);  // Kiểm tra docId trước khi cập nhật

      // Cập nhật trực tiếp noodlesLeft mà không cần kiểm tra getDoc
      await updateDoc(userRef, {
          noodlesLeft: newNoodlesLeft,
      });

      console.log("Successfully updated noodlesLeft to:", newNoodlesLeft);
  } catch (error) {
      console.log("Error while updating noodlesLeft:", error);
      Alert.alert('Error', 'Unable to update noodles. Please try again later.');
  }
};

// Hàm xử lý logic khi người dùng nhấn vào nút "Press"
export const handlePress = async (noodlesLeft: number, userData: any, dispatch: any, navigation: any) => {
  if (userData) {
    if (noodlesLeft > 0) {
      const newNoodlesLeft = noodlesLeft - 1;

      // Cập nhật số mì còn lại vào Firestore
      await updateNoodlesLeft(userData.docId, newNoodlesLeft);

      // Dispatch action để cập nhật số mì còn lại trong Redux store
      dispatch(setNoodlesLeft(newNoodlesLeft));

      // Điều hướng đến trang "Done" sau khi cập nhật xong
      navigation.navigate('Done');
    } else {
      // Nếu số lượng mì đã hết, điều hướng đến trang "Empty"
      console.log("No noodles left! Navigating to Empty screen.");
      Alert.alert('No noodles left', 'You have no noodles left this month.');
      navigation.navigate('Empty');
    }
  }
};