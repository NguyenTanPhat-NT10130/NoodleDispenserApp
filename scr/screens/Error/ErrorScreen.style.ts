import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    error_text: {
        color: '#980000',
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        lineHeight: 22
    },
    again_btn:{
        backgroundColor: '#D86643',
        borderRadius: 7,
        width: wp('37%'),
        height: hp('4%'),
        alignItems: 'center',
        top: hp('2%')

    },
    again_text: {
        fontFamily: 'Nunito-Bold',
        fontSize: 15,
        lineHeight: 30,
        color: '#FFFFFF',
    },
    error_img: {
        width: wp('30%'),
        height: hp('45%'),
        bottom: hp('8%')
    },
    icon_box:
    {
        flexDirection: 'row',
        bottom: hp('21%'),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'white'

    },
    icon:{
        width: wp('13%'),
        height: hp('8%'),
    },
    icon_text:{
        fontSize: 20,
        lineHeight: 65.47,
        fontFamily: 'Nunito-Bold',
        color: '#AE0808',
        paddingLeft: 12
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: hp('11.5%'),
        // backgroundColor: 'green',
        width: wp('55%'),
        height: hp('18%'), // 23
        left: wp('8%')
    },
    scan_img:{
        width: wp('30%'),
        
    },
    arrow_img:{
        width: wp('15%'),
        left: wp('15%')

    }, 
})

export default styles