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

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, FONTS, SIZES, STRING } from '../../constants';
import icons from '../../constants/icons';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import { useNavigation } from '@react-navigation/native';


const Step3Scrr = ({ goToNextStep }) => {
    const [showOtp, setShowOtp] = useState(true);
    const navigation = useNavigation();
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [thumbImage, setThumbImage] = useState('');
    const [count, setCount] = useState(0);

    const openThumbImagePicker = () => {
        ImagePicker.openPicker({
            multiple: false,
            cropping: true,
            freeStyleCropEnabled: true,
            compressImageQuality: 0.4,
            forceJpg: true,
            includeBase64: true,
        }).then(images => {
            setThumbImage('data:image/jpeg;base64,' + images.data);
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
            >Allow Camera Access</Text>
            <Text
                style={[
                    GlobalStyle?.fontSize16,
                    GlobalStyle?.colorGray,
                    GlobalStyle?.marginTop5,
                    {
                    }
                ]}
            >When prompted you must enable camera
                to continue</Text>

            <View style={{
                flex: 1
            }}>
                <TouchableOpacity
                    onPress={() => {
                        if (isPermitted()) {
                            openThumbImagePicker();
                        }
                    }}>

                    {thumbImage ? (
                        <Image
                            style={{
                                flex:1,
                                width: '85%',
                                height: 300,
                                alignSelf: 'center',
                                marginVertical: 30,
                                resizeMode: 'cover',
                                borderRadius:200
                            }}
                            source={{
                                uri: thumbImage?.startsWith('data')
                                    ? thumbImage
                                    : thumbImage,
                            }}
                        />
                    ) : (
                        <Image
                            source={images?.camera}
                            style={{
                                width: '100%',
                                height: 300,
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
                    We can’t Verify your application
                    without your camera
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
                text={('Enable Camera')}
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

export default Step3Scrr;
