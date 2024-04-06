import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
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
import Header from '../../global/Header';


const CanteenScanId = ({ goToNextStep }) => {
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
            {
                flex: 1
            }]}>


            <Header
                title="Canteen"
            // onPressLeft={() => navigation.goBack(null)}
            />
            <ScrollView
                style={[
                    GlobalStyle?.paddingHorizontal20
                ]}
            >
                <Text
                    style={[
                        GlobalStyle.fontSize25,
                        GlobalStyle.marginTop30,
                        GlobalStyle?.marginVertical15
                    ]}
                >Synchronize your wearable</Text>
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
                    flex: 1,
                    marginTop: 50
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
                                    height: 200,
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
                            GlobalStyle?.marginLeft15,

                            GlobalStyle?.marginTop, {
                                marginLeft: 22
                                // textAlign: 'center'
                            }
                        ]}
                    >
                        Make sure full document is Visible
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
                    onPress={() => {
                        navigation.goBack()
                    }}
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
                    onPress={() => {
                        navigation.goBack()
                    }}
                    textStyle={{
                        fontFamily: FONTS?.semi_bold,
                        color: COLORS.colorPrimary,
                    }}
                />
            </ScrollView>
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

export default CanteenScanId;
