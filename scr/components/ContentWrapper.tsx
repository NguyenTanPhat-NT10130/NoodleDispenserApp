import React from 'react';
import { View, StyleSheet, ViewStyle, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type ContentWrapperProps = {
    children: React.ReactNode;
    containerStyle?: ViewStyle;
    wrapStyle?: ViewStyle;
    borderStyle?: ViewStyle;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({
    children,
    containerStyle,
    wrapStyle,
    borderStyle,
}) => {
    return (
        <View style={[styles.contentWrappe_container, containerStyle]}>
            <View style={[styles.contentWrappe_wrap, wrapStyle]}>
                <View style={[styles.contentWrappe_border, borderStyle]}>
                    {children}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contentWrappe_container: {
        borderRadius: 19,
        backgroundColor: 'rgba(85, 10, 10, 0.5)',
        width: wp('50%'),
        height: hp('44%'),
        bottom: hp('9.7%'),
        transform: [{ rotate: '-90deg' }],
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentWrappe_wrap: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: wp('84%'), // 84
        height: hp('26%'), // 26
        transform: [{ rotate: '-90deg' }],
        left: wp('1.7%'),
        top: hp('0.5%'),
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
    },
    contentWrappe_border: {
        backgroundColor: '#FFC900',
        borderRadius: 16,
        borderColor: '#711F1F',
        borderWidth: 1,
        width: wp('47.3%'),
        height: hp('41%'),
        transform: [{ rotate: '-90deg' }],
        justifyContent: 'center',
        alignItems: 'center',

    },
   

});

export default ContentWrapper;
