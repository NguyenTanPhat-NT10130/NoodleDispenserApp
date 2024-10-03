import React from 'react';
import { View, Image, Text,ViewStyle, StyleSheet, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useCustomFonts } from '../hooks/useCustomFonts';
interface LogoHeaderProps {
  title: string;
  headerStyle?: ViewStyle;
  logoStyle?: object;
  titleStyle?: object;
}

const LogoHeader: React.FC<LogoHeaderProps> = ({ title, headerStyle, logoStyle, titleStyle }) => {
  return (
    <View style={[styles.header, headerStyle]}>
      <Image
        source={require('../../assets/images/logo.png')}
        resizeMode="contain"
        style={[styles.logo, logoStyle]}
      />
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: wp('27%'),
        height: hp('20%'),
        top: hp('6%'),
    },
    title: {
        color: '#C71A1A',
        fontSize: 34,
        lineHeight: 130,
        bottom: hp('0%'),
        fontFamily: 'SVNNexaRustSlabBlackShadow',
    },
});

export default LogoHeader;
