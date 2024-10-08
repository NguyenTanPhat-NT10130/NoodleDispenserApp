import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    info_container: {
        height: hp('44%'),
        width: wp('33%'),
        overflow: 'visible',
        bottom: hp('17%')
    },
    info_wrap: {
        height: hp('17.3%')
    },
    info_border: {
        width: wp('31%'),
        height: hp('41.5%'),
        right: hp('0.2%')
    },
    info_img: {
        height: hp('16%'),
        width: wp('100%'),
        transform: [{ rotate: '-90deg' }],
        top: hp('10%'),
        left: wp('1%')
    },
    info_box: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom: hp('15%'),

    },
    info_content: {
        backgroundColor: 'transparent',
        transform: [{ rotate: '-90deg' }],
        width: wp('100%'),
    },
    info_row: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    avatar_img: {
        right: hp('1.8%')
    },
    info_text: {
        color: '#880B0B',
        fontFamily: 'Nunito-Bold',
        fontSize: 16.2,
        lineHeight: 26.1,
        flex: 1,
        textAlign: 'left'

    },
    info_value: {
        paddingRight: 55,
        fontSize: 13,
        fontFamily: 'Nunito-Bold',
        color: '#880B0B',
        flex: 1,
        textAlign: 'left'
    },
    bottom_container:{
        width: wp('100%'),
        bottom: hp('30%')
    },
    cup_noodles_container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        top: hp('2%')
        
    },
    cup_noodles_box: {
        width: wp('100%'),
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cup_noodles_img: {
        width: wp('22%'),
        height: hp('22%'),
    },
    pick_cup_noodles_img: {
        width: wp('26%'),
        height: hp('26%'),
        position: 'absolute',
    },
    new_pick_cup_noodles_img:{
        width: wp('22%'),
        height: hp('15%'),
        position: 'absolute',
    },
    new_cup_noodles_img:{
        width: wp('22%'),
        height: hp('18%'),
    },
    unavailable_text: {
        color: '#A09A9A',
        fontFamily: 'Paytone One',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        bottom: hp('1%')

    },
    bottom_box: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        top: hp('1%')
    },
    bottom_text: {
        fontFamily: 'Paytone One',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 36,
        color: '#9C6666',
        paddingTop: 3
    },
    highlight_text: {
        fontFamily: 'Paytone One',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 36,
        color: '#D91313',
        paddingRight: 4
    },
})

export default styles