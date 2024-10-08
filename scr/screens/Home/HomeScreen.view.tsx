import React, { useState, useEffect } from "react"
import { View, ImageBackground, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native"
import styles from "./HomeScreen.style"
import Background from "../../components/Background";
import LogoHeader from "../../components/LogoHeader";
import ContentWrapper from "../../components/ContentWrapper";
import { Video, ResizeMode } from 'expo-av';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigation';
import { fetchUserData } from "../../redux/slices/userSlice";
import { setNoodlesLeft } from "../../redux/slices/noodlesSlice";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store/store';
import { FIRESTORE } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from 'firebase/firestore'; 
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};


const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch: AppDispatch = useDispatch();
    const handleSubmit = async () => {
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
      
    return (
        <Background>
            <LogoHeader title="WELCOME" />
            <ContentWrapper>
                <Image
                    source={require('../../../assets/images/lighting.png')}
                    resizeMode="contain"
                    style={styles.image}
                />
                <View style={styles.introduce_box}>
                    <Video
                        source={require('../../../assets/video/ALTA MEDIA GENERAL PROFILE CORPORATE VIDEO.mp4')}
                        rate={1.0}
                        volume={1.0}
                        isMuted={true}
                        resizeMode={ResizeMode.CONTAIN}
                        shouldPlay
                        isLooping
                        style={styles.video}
                    />
                </View>
            </ContentWrapper>
            <View style={styles.icon_box}>
                <Image
                    source={require('../../../assets/images/Scan.png')}
                    resizeMode="contain"
                    style={styles.icon}
                />
                <Text style={styles.icon_text}>Follow the arrow to scan card</Text>
            </View>
            {/* <View style={styles.bottom}>
                <Image
                    source={require('../../../assets/images/Scan_IMG.png')}
                    resizeMode="contain"
                    style={styles.scan_img}
                />
                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/images/Arrow.png')}
                        resizeMode="contain"
                        style={styles.arrow_img}
                    />
                </TouchableOpacity>
            </View> */}
            <View style={styles.input_form}>
                <Text style={styles.label}>Full name:</Text>
                <TextInput
                    placeholder="Enter your first and last name"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="white"
                    style={styles.input}
                />
                <Text style={styles.label}>Phone number:</Text>
                <TextInput
                    placeholder="Enter phone number"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="numeric"
                    placeholderTextColor="white"
                    style={styles.input}
                />
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.submit}
                >
                    <Text style={styles.submit_text}>SUBMIT</Text>
                </TouchableOpacity>
            </View>

        </Background>
    )
}

export default HomeScreen;

