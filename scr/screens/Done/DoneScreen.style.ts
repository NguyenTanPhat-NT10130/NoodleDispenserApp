import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    done_container:{
        justifyContent: 'center',
        alignItems: 'center',
        bottom: hp('14%')
    },
    done_img:{
        width: wp('56%'),
        height: hp('54%'),
    },
    favorite_box:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // height: hp('7%'),
        // backgroundColor: 'yellow',
        bottom: hp('12%')
    },
    favorite_text:{
        fontFamily: 'Paytone One',
        fontSize: 30,
        fontWeight: '400',
        color: '#C71A1A',
        textAlign: 'center',
        paddingRight: 8
    },
    favorite_img:{
        width: wp('7%'),
        height: hp('5%'),
        top: hp('0.5%') 
    },
    btn_box:{
        top: hp('9.2%')
    },
    bottom_box:{
        justifyContent: 'center',
        alignItems: 'center',
        bottom: hp('9%'),
    },
    bottom_text: {
        fontFamily: 'Mplus 1p',
        fontSize: 18,
        color: '#F8C135',
    },
    bottom_img: {
        width: wp('5%'),
        height: hp('5%')
    },
})

export default styles