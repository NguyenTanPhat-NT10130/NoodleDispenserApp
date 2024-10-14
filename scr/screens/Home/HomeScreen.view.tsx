import React, { useState, useEffect } from "react"
import { View, ImageBackground, Text, Image, TouchableOpacity, TextInput, Alert, Modal } from "react-native"
import styles from "./HomeScreen.style"
import Background from "../../components/Background";
import LogoHeader from "../../components/LogoHeader";
import ContentWrapper from "../../components/ContentWrapper";
import { Video, ResizeMode } from 'expo-av';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store/store';
import { handleSubmit } from "./HomeScreen.logic";
import QRCodeScanner from "../QRCodeScanner/QRCodeScanner.view";
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};


const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch: AppDispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const handleOpenScanner = () => {
        setModalVisible(true);
    };

    const handleCloseScanner = () => {
        setModalVisible(false);
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
                <TouchableOpacity onPress={handleOpenScanner}>
                    <Image
                        source={require('../../../assets/images/Scan.png')}
                        resizeMode="contain"
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.icon_text}>Follow the arrow to scan card</Text>
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={handleCloseScanner}  // Đóng modal khi nhấn nút back
                >
                    {/* QRCodeScanner nhận props để đóng modal sau khi quét mã */}
                    <QRCodeScanner onClose={handleCloseScanner} />
                </Modal>
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
                    // onPress={handleSubmit}
                    onPress={() => handleSubmit(phone, dispatch, navigation)}
                    style={styles.submit}
                >
                    <Text style={styles.submit_text}>SUBMIT</Text>
                </TouchableOpacity>
            </View>

        </Background>
    )
}

export default HomeScreen;

