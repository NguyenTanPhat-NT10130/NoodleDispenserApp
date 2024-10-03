import React, { useState, useEffect } from "react"
import { View, ImageBackground, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Background from "../../components/Background";
import LogoHeader from "../../components/LogoHeader";
import CustomButton from "../../components/CustomButton";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigation';
import styles from "./DoneScreen.style";

type DoneScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Done'>;

type Props = {
    navigation: DoneScreenNavigationProp;
};

const DoneScreen: React.FC<Props> = ({navigation}) => {
    return (
        <Background>
            <View style={{bottom: hp('2%')}}>
                <LogoHeader
                    title="DONE"
                />
            </View>
            <View style={styles.done_container}>
                <Image
                    source={require('../../../assets/images/done.png')}
                    resizeMode="contain"
                    style={styles.done_img}
                />
                <View style={styles.favorite_box}>
                    <Text style={styles.favorite_text}>Enjoy your noodles</Text>
                    <Image
                        source={require('../../../assets/images/favourite.png')}
                        resizeMode="contain"
                        style={styles.favorite_img}
                    />
                </View>
            </View>
            <View style={styles.btn_box}>
                <CustomButton
                    text="Back to home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.bottom_box}>
                <Text style={styles.bottom_text}>Get them below</Text>
                <Image
                    source={require('../../../assets/images/arrow_down.png')}
                    resizeMode="contain"
                    style={styles.bottom_img}
                />
            </View>
        </Background>
    )
}

export default DoneScreen;