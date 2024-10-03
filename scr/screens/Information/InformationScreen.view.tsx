import React, { useState, useEffect } from "react"
import { View, Text, Image} from "react-native"
import { Avatar, ListItem } from 'react-native-elements';
import Background from "../../components/Background";
import LogoHeader from "../../components/LogoHeader";
import ContentWrapper from "../../components/ContentWrapper";
import CustomButton from "../../components/CustomButton";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from "./Information.style";
import { useInformationLogic } from './Information.logic';

type InformationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Information'>;

type Props = {
    navigation: InformationScreenNavigationProp;
};

const InformationScreen: React.FC<Props> = ({ navigation }) => {
    const { noodlesLeft, images, handleGetNoodles } = useInformationLogic();
    const handlePress = () => {
        handleGetNoodles(); // Gọi hàm logic để thay đổi trạng thái
    
        if (noodlesLeft > 0) {
          navigation.navigate('Done');
        } else {
          navigation.navigate('Empty');
        }
      };
    const getCupImageStyle = (index: number) => {
        // Nếu cốc mì đã được thay đổi, thì sử dụng kích thước mới
        return noodlesLeft <= index ? styles.new_cup_noodles_img : styles.cup_noodles_img;
    };
    const getPickImageStyle = (index: number) => {
        return noodlesLeft <= index ? styles.new_pick_cup_noodles_img : styles.pick_cup_noodles_img;
    };
    return (
        <Background>
            <LogoHeader
                title="INFORMATION"
                headerStyle={{ bottom: hp('2%') }}
            />
            <ContentWrapper
                containerStyle={styles.info_container}
                wrapStyle={styles.info_wrap}
                borderStyle={styles.info_border}
            >
                <Image
                    source={require('../../../assets/images/lighting_Info.png')}
                    resizeMode="contain"
                    style={styles.info_img}
                />
                <View style={styles.info_box}>
                    <ListItem containerStyle={styles.info_content}>
                        <Avatar
                            rounded
                            source={require('../../../assets/images/user.png')}
                            size={90}
                        />
                        <ListItem.Content>
                            <View style={styles.info_row}>
                                <Text style={styles.info_text}>Full Name:</Text>
                                <Text style={styles.info_value}>Alice Mie</Text>
                            </View>
                            <View style={styles.info_row}>
                                <Text style={styles.info_text}>Birthday:</Text>
                                <Text style={styles.info_value}>12/10/1999</Text>
                            </View>
                            <View style={styles.info_row}>
                                <Text style={styles.info_text}>Gender:</Text>
                                <Text style={styles.info_value}>Female</Text>
                            </View>
                            <View style={styles.info_row}>
                                <Text style={styles.info_text}>Department:</Text>
                                <Text style={styles.info_value}>Design</Text>
                            </View>
                        </ListItem.Content>
                    </ListItem>
                </View>
            </ContentWrapper>
            <View style={styles.bottom_container}>
                <View style={styles.cup_noodles_container}>
                    {images.map((image, index) => (
                        <View key={index} style={styles.cup_noodles_box}>
                            <Image
                                source={image.pickImage} // Hiển thị pickImage
                                resizeMode="contain"
                                style={getPickImageStyle(index)}
                            />
                            <Image
                                source={image.cupImage} // Hiển thị cupImage
                                resizeMode="contain"
                                style={getCupImageStyle(index)}
                            />
                            {image.cupImage === require('../../../assets/images/cup0.png') && (
                                <Text style={styles.unavailable_text}>Unavailable</Text> // Hiển thị text khi là newCupImage
                            )}
                        </View>
                    ))}
                </View>
                <View style={styles.bottom_box}>
                    <Text style={styles.highlight_text}>{noodlesLeft}</Text>
                    <Text style={styles.bottom_text}>cups of noodles left this month</Text>
                </View>
            </View>
            <CustomButton
                text="Get your noodles"
                onPress={handlePress}
            />
        </Background>
    )
}

export default InformationScreen;