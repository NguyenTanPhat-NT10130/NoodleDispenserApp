import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  imageStyle?: ImageStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress, buttonStyle, textStyle, imageStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btn_wrap, buttonStyle]}>
        <View style={styles.btn}>
          <Image
            source={require('../../assets/images/wavy.png')}
            resizeMode="contain"
            style={[styles.wavy_img, imageStyle]}
          />
          <Text style={[styles.btn_text, textStyle]}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    btn_wrap: {
        bottom: hp('25%'),
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        width: wp('60%'),
        height: hp('5%'),

    },
    btn: {
        borderRadius: 20,
        backgroundColor: '#FFB906',
        width: wp('59%'),
        height: hp('5%'),
        justifyContent:'center',
        alignItems: 'center',
        bottom: hp('0.5%'),
        overflow: 'hidden'
    },
    wavy_img:{
        height: hp('3.5%'),
        width: wp('60%'),
        position:"absolute",
        left: wp('-0.5%'),
        top: hp('1.7%')
    },
    btn_text: {
        fontWeight: '400',
        fontSize: 18,
        color: '#A31616',
        textAlign: 'center',
        position: 'absolute',
        fontFamily: 'Paytone One'
    }
});

export default CustomButton;
