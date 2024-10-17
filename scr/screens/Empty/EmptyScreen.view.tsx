import React, { useState, useEffect } from "react"
import { View, Text, Image } from "react-native"
import Background from "../../components/Background";
import LogoHeader from "../../components/LogoHeader";
import ContentWrapper from "../../components/ContentWrapper";
import CustomButton from "../../components/CustomButton";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigation';
import styles from "./EmptyScreen.style";
type EmptyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Done'>;

type Props = {
    navigation: EmptyScreenNavigationProp;
};
const EmptyScreen: React.FC<Props> = ({navigation}) => {
    return (
        <Background>
            <LogoHeader
                title="out of noodles"
                titleStyle={{fontSize: 30}} // just for devi
            />
            <View style={styles.empty_wrap}>
            <Text style={styles.empty_text}>
                There is <Text style={styles.highlight_text}>0</Text> cup of noodles left in the machine. Please fill in to continue.
            </Text>
            <Image
                source={require('../../../assets/images/Empty.png')}
                resizeMode="contain"
                style={styles.empty_img}
            />
            </View>
                <CustomButton
                    text="Back to home"
                    onPress={() => navigation.navigate('Home')}
                />
        </Background>
    )
}

export default EmptyScreen;