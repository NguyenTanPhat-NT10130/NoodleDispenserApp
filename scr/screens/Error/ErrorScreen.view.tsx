import React, { useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import Background from "../../components/Background";
import LogoHeader from "../../components/LogoHeader";
import styles from "./ErrorScreen.style";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigation';
type ErrorScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Error'>;
type Props = {
    navigation: ErrorScreenNavigationProp;
};
const ErrorScreen: React.FC<Props> = ({navigation}) => {
    return(
        <Background>
            <LogoHeader
                title="Error"
            />
            <Text style={styles.error_text}>Can not recongnize your ID card.</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Home')}
                style={styles.again_btn}
            >
                <Text style={styles.again_text}>Please scan again.</Text>
            </TouchableOpacity>
            <Image 
               source={require('../../../assets/images/Error.png')} 
               resizeMode="contain"
               style={styles.error_img}
            />
            <View style={styles.icon_box}>
                <Image
                    source={require('../../../assets/images/Scan.png')}
                    resizeMode="contain"
                    style={styles.icon}
                />
                <Text style={styles.icon_text}>Follow the arrow to scan card</Text>
            </View>
            <View style={styles.bottom}>
                <Image
                    source={require('../../../assets/images/Scan_IMG.png')}
                    resizeMode="contain"
                    style={styles.scan_img}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >
                    <Image
                        source={require('../../../assets/images/Arrow.png')}
                        resizeMode="contain"
                        style={styles.arrow_img}
                    />
                </TouchableOpacity>
            </View>
        </Background>
    )
}

export default ErrorScreen;