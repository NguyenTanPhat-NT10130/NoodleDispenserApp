import React from "react"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        height: hp('23%'),
        transform: [{ rotate: '-90deg' }],
        top: hp('21.7%'),
        right: wp('2%')
    },
    introduce_box:{
        borderRadius: 7,
        borderWidth: 1.5,
        width: wp('44%'), // 44
        height: hp('38.5%'), // 38.5
        alignItems: 'center',
        overflow: 'hidden',
        bottom: hp('11.6%')
        
    },
    video:{
        width: wp('100%'), 
        height: hp('24.9%'), // 24.9
        transform: [{ rotate: '-90deg' }],
        top: hp('6%')
    },
    icon_box:
    {
        flexDirection: 'row',
        bottom: hp('14%'),
        justifyContent: 'center',
        alignItems: 'center'

    },
    icon:{
        width: wp('13%'),
        height: hp('10%'),
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
        height: hp('23%'),
        left: wp('8%')
    },
    scan_img:{
        width: wp('30%'),
        
    },
    arrow_img:{
        width: wp('15%'),
        left: wp('15%')

    }, 
    input_form:{
        // backgroundColor: 'white',
        bottom: hp('10%'),
        justifyContent: 'center',
    },
    label: {
        color: 'white',
    },
    input:{
        borderRadius: 8,
        borderWidth: 1.5,
        width: wp('60%'),
        height: hp('6%'),
        borderColor: 'yellow',
        paddingLeft: 10,
        color: 'white',
        marginBottom: 15,
        backgroundColor: '#028968'
    },
    submit: {
        backgroundColor: '#028968',
        borderRadius: 10,
        // borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('40%'),
        height: hp('4%'),
        alignSelf: 'center',
    },
    submit_text: {
        color: 'white'
    }
})

export default styles