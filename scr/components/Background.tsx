import React from 'react';
import { View, Image, ImageBackground, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type BackgroundProps = {
    children?: React.ReactNode;
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <ImageBackground
            source={require('../../assets/images/bg.png')}
            style={styles.background}
        >
            {children}
        </ImageBackground>
    );
};


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default Background