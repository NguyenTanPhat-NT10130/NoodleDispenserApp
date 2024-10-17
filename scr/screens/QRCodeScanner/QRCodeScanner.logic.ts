// QRCodeScanner.logic.ts
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { fetchUserDataById } from '../../redux/slices/userSlice';
import { setNoodlesLeft } from '../../redux/slices/noodlesSlice';
import { AppDispatch } from '../../redux/store/store';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigation';
import { Camera } from 'expo-camera/legacy';
import { CameraType } from 'expo-camera/legacy';
type QRCodeScannerNavigationProp = StackNavigationProp<RootStackParamList, 'QRCodeScanner'>;

export const useQRCodeScannerLogic = (onClose: () => void) => {
  const navigation = useNavigation<QRCodeScannerNavigationProp>();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [scanTimeout, setScanTimeout] = useState<NodeJS.Timeout | null>(null);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const getCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getCameraPermission();
  }, []);

  useEffect(() => {
    // Khi người dùng bắt đầu quét mã, thiết lập timer 5 giây
    const timer = setTimeout(() => {
      console.log("Timeout: QR code could not be scanned within the specified time.");
      onClose(); // Đóng modal hoặc xử lý việc kết thúc quét
      navigation.navigate('Error'); // Điều hướng sang trang Error sau timeout
    }, 5000); // 5000ms = 5 giây

    // Lưu trữ timer để có thể hủy nếu quét thành công
    setScanTimeout(timer);

    // Hủy timer nếu component bị hủy hoặc mã được quét
    return () => clearTimeout(timer);
  }, []);

  const handleQRCodeScan = (qrData: string) => {
    const expectedLength = 3; // Độ dài mong muốn của mã QR

    console.log("Scanned QR Data:", qrData);

    // Kiểm tra nếu mã QR không hợp lệ
    if (!qrData || !isValidQRCodeFormat(qrData, expectedLength)) {
      // Điều hướng sang trang Error nếu mã không hợp lệ
      onClose(); // Đóng modal
      clearTimeout(scanTimeout); // Hủy timer vì đã xử lý
      navigation.navigate('Error');
      return;
    }

    // Nếu mã hợp lệ, tiếp tục lấy dữ liệu từ Firebase
    dispatch(fetchUserDataById(qrData)).then((action: any) => {
      console.log("Action Payload:", action.payload);

      // Kiểm tra nếu fetch thành công và dữ liệu người dùng có tồn tại
      if (action.payload && action.payload.userData) {
        const { userData } = action.payload;

        // Nếu có dữ liệu userData và noodlesLeft, cập nhật noodlesLeft vào Redux store
        if (userData.noodlesLeft !== undefined) {
          dispatch(setNoodlesLeft(userData.noodlesLeft));
        }

        // Điều hướng sang trang Information với thông tin userData
        onClose();
        navigation.navigate('Information', {
          phoneNumber: userData.phoneNumber,
          userData: userData
        });
      } else {
        // Nếu không lấy được dữ liệu người dùng, điều hướng sang trang Error
        onClose();
        navigation.navigate('Error');
      }
    });
  };

  // Hàm kiểm tra độ dài và tính hợp lệ của mã QR
  const isValidQRCodeFormat = (qrData: string, expectedLength: number) => {
    // Kiểm tra nếu độ dài mã QR đủ yêu cầu và thêm điều kiện kiểm tra tính hợp lệ khác nếu cần
    return qrData.length >= expectedLength && /^[a-zA-Z0-9]+$/.test(qrData);  // Chỉ chấp nhận các ký tự alphanumeric
  };

  return {
    hasPermission,
    scanned,
    setScanned,
    handleQRCodeScan,
  };
};
