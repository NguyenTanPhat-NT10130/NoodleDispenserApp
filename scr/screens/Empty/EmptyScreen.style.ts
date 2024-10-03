import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    empty_wrap:{
        justifyContent:'center',
        alignItems: 'center',
        height: hp('78%'),
        bottom: hp('27%')
    },
    empty_text:{
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        lineHeight: 30,
        color: '#A09A9A',
        paddingHorizontal: wp('6%')
    },
    highlight_text: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        color: '#FFFFFF'
    },
    empty_img:{
        width: wp('100%'),
        height: hp('20%'),
        top: hp('5%')
    }
})

export default styles