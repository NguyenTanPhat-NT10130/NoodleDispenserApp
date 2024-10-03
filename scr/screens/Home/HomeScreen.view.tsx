import React, { useState, useEffect } from "react"
import { View, ImageBackground, Text, Image, TouchableOpacity, TextInput, ActivityIndicator } from "react-native"
import styles from "./HomeScreen.style"
import Background from "../../components/Background";
import LogoHeader from "../../components/LogoHeader";
import ContentWrapper from "../../components/ContentWrapper";
import { Video, ResizeMode } from 'expo-av';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigation';
import { useFonts } from 'expo-font';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};


const HomeScreen: React.FC<Props> = ({ navigation }) => {
    // const [fontsLoaded] = useFonts({
    //     'SVNNexaRustSlabBlackShadow': require('../../../assets/fonts/SVN-Nexa_Rust_Slab_Black_Shadow.ttf'),
    //     'NunitoRegular': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
    //     'timeNew': require('../../../assets/fonts/times new roman.ttf'),
    //   });

    //   if (!fontsLoaded) {
    //     return <ActivityIndicator size="large" color="#0000ff" />; // Hiển thị màn hình loading nếu font chưa tải xong
    //   }
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
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
                <Text style={styles.label}>Họ Tên:</Text>
                <TextInput
                    placeholder="Nhập họ và tên"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="white"
                    style={styles.input}
                />
                <Text style={styles.label}>Số điện thoại:</Text>
                <TextInput
                    placeholder="Nhập số điện thoại"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="numeric"
                    placeholderTextColor="white"
                    style={styles.input}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Information')}
                    style={styles.submit}
                >
                    <Text style={styles.submit_text}>SUBMIT</Text>
                </TouchableOpacity>
            </View>

        </Background>
    )
}

export default HomeScreen;

