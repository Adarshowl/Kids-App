import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList,
    PermissionsAndroid,
    Platform,
} from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import ImagePicker from 'react-native-image-crop-picker';

import { COLORS, FONTS, SIZES, STRING } from '../../constants';
import icons from '../../constants/icons';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import { useNavigation } from '@react-navigation/native';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';


const Step4Scrr = ({ goToNextStep }) => {
    const [showOtp, setShowOtp] = useState(true);
    const navigation = useNavigation();


    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    }

    const [idCardImage, setidCardImage] = useState('');
    const [count, setCount] = useState(0);

    const openImagePicker = () => {
        ImagePicker.openPicker({
            multiple: false,
            cropping: true,
            freeStyleCropEnabled: true,
            compressImageQuality: 0.4,
            forceJpg: true,
            includeBase64: true,
        }).then(images => {
            setidCardImage('data:image/jpeg;base64,' + images.data);
        });
        setCount(0);
        // setImageArray(imageArray);
        setCount(0);
    };

    const isPermitted = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission',
                        message: 'App needs access to storage for photos',
                    },
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                alert('Write permission err', err);
                return false;
            }
        } else {
            return true;
        }
    };


    return (
        <SafeAreaView style={[
            GlobalStyle.mainContainer,
            GlobalStyle.paddingHorizontal15,
            {
                flex: 1
            }]}>

            <Text
                style={[
                    GlobalStyle.fontSize25,
                    GlobalStyle.marginTop15,
                    GlobalStyle?.marginVertical15
                ]}
            >Verify Your Identity</Text>
            <Text
                style={[
                    GlobalStyle?.fontSize16,
                    GlobalStyle?.colorGray,
                    GlobalStyle?.marginTop5,
                    {
                    }
                ]}
            >Tack a picture of front view</Text>

            <View style={{
                flex: 1
            }}>

                {/* <Image
                    source={images?.idCard}
                    style={{
                        width: '90%',
                        height: 250,
                        alignSelf: 'center',
                        marginVertical: 30,
                        resizeMode: 'contain'
                    }}
                /> */}
                <TouchableOpacity
                    onPress={() => {
                        if (isPermitted()) {
                            openImagePicker();
                        }
                    }}>

                    {idCardImage ? (
                        <Image
                            style={{
                                flex: 1,
                                width: '90%',
                                height: 180,
                                alignSelf: 'center',
                                marginVertical: 30,
                                resizeMode: 'cover',
                                borderRadius: 20
                            }}
                            source={{
                                uri: idCardImage?.startsWith('data')
                                    ? idCardImage
                                    : idCardImage,
                            }}
                        />
                    ) : (
                        <Image
                            source={images?.idCard}
                            style={{
                                width: '100%',
                                height: 150,
                                alignSelf: 'center',
                                marginVertical: 30,
                                resizeMode: 'contain'
                            }}
                        />

                    )}
                </TouchableOpacity>

                <Text
                    style={[
                        GlobalStyle?.fontSize20,
                        GlobalStyle?.colorBlack,
                        GlobalStyle?.marginHorizontal15,

                        GlobalStyle?.marginTop, {
                            textAlign: 'center'
                        }
                    ]}
                >
                    Mack sure full document is Visible
                </Text>

            </View>
            <KidsAppCommBtn
                height={55}
                width={'100%'}
                borderRadius={15}
                marginTop={30}
                textSize={17}
                borderColor={COLORS?.gray}

                textColor={COLORS?.white}
                text={('Submit')}
                backgroundColor={COLORS?.white}
                onPress={goToNextStep}
                // onPress={() => {
                //     navigation.navigate('OtpScreenStep', { goToNextStep })
                // }}
                textStyle={{
                    fontFamily: FONTS?.semi_bold,
                    color: COLORS.colorPrimary,
                }}
            />

            <KidsAppBorderWidthBtn
                height={55}
                width={'100%'}
                borderRadius={15}
                marginTop={20}
                textSize={17}
                borderColor={COLORS?.gray}
                borderWidth={1}
                textColor={COLORS?.colorBtn}
                text={('Retake photo')}
                backgroundColor={COLORS?.white}
                onPress={goToNextStep}
                // onPress={() => {
                //     navigation.navigate('OtpScreenStep', { goToNextStep })
                // }}
                textStyle={{
                    fontFamily: FONTS?.semi_bold,
                    color: COLORS.colorPrimary,
                }}
            />
            <View
                style={[
                    GlobalStyle?.marginVertical10
                ]}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({




});

export default Step4Scrr;
