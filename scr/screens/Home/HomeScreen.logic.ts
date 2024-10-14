import { Alert } from 'react-native';
import { fetchUserData } from "../../redux/slices/userSlice";
import { setNoodlesLeft } from "../../redux/slices/noodlesSlice";

export const handleSubmit = async (phone: string, dispatch: any, navigation: any) => {
    if (phone) {
      try {
        // Gọi hàm fetchUserData và lấy dữ liệu trực tiếp
        const response = await dispatch(fetchUserData(phone)).unwrap();  // unwrap để lấy dữ liệu gốc
        
        if (response && response.userData) {  // Đảm bảo response có chứa userData
          const { userData } = response;  // Lấy userData từ response
          // Cập nhật số mì của người dùng vào Redux
          dispatch(setNoodlesLeft(userData.noodlesLeft));  // Cập nhật noodlesLeft từ userData
          
          // Sau khi cập nhật Redux, điều hướng đến màn hình Information
          navigation.navigate('Information', { phoneNumber: phone });
        } else {
          console.log('User does not exist or does not have noodle data.');
          // Hiển thị thông báo lỗi khi không tìm thấy người dùng hoặc không có dữ liệu mì
          Alert.alert('Lỗi', 'Số điện thoại không tồn tại hoặc không có dữ liệu mì.');
        }
      } catch (error) {
        console.log('Error while retrieving user information:', error);
        // Xử lý lỗi lấy thông tin từ Firestore
        Alert.alert('Lỗi', 'Không thể lấy thông tin người dùng. Vui lòng thử lại sau.');
      }
    } else {
      // Xử lý khi không có số điện thoại nhập vào
      Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại.');
    }
  }; 