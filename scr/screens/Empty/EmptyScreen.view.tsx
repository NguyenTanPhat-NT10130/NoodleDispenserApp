import React, { useState, useEffect } from "react"
import { View, Text, Image } from "react-native"
import Background from "../../components/Background";
import LogoHeader from "../../components/LogoHeader";
import ContentWrapper from "../../components/ContentWrapper";
import CustomButton from "../../components/CustomButton";
import styles from "./EmptyScreen.style";

const EmptyScreen: React.FC = () => {
    return (
        <Background>
            <LogoHeader
                title="out of noodles"
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
        </Background>
    )
}

export default EmptyScreen;