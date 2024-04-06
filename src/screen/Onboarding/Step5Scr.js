import React, { useState, useRef } from 'react';
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
import { RNCamera } from 'react-native-camera';

import { COLORS, FONTS, SIZES, STRING } from '../../constants';
import icons from '../../constants/icons';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import { useNavigation } from '@react-navigation/native';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import ImagePicker from 'react-native-image-crop-picker';


const Step5Scrr = ({ goToNextStep }) => {
    const [showOtp, setShowOtp] = useState(true);
    const navigation = useNavigation();

    const cameraRef = useRef(null);
    const [isRecording, setIsRecording] = useState(false);
    const [recordedVideo, setRecordedVideo] = useState(null);

    const startRecording = async () => {
        if (cameraRef.current) {
            setIsRecording(true);
            const options = { maxDuration: 20 }; // Set max duration to 20 seconds
            const data = await cameraRef.current.recordAsync(options);
            setIsRecording(false);
            setRecordedVideo(data.uri);
        }
    };

    const stopRecording = () => {
        if (cameraRef.current) {
            setIsRecording(false);
            cameraRef.current.stopRecording();
        }
    };
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
            >Record a Video</Text>
            <Text
                style={[
                    GlobalStyle?.fontSize16,
                    GlobalStyle?.colorGray,
                    GlobalStyle?.marginTop5,
                    {
                    }
                ]}
            >For security, we need a live capture</Text>

            <View style={{
                flex: 1
            }}>


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
                            source={images?.recording}
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

                {/* <RNCamera
                    ref={cameraRef}
                    style={{ flex: 1 }}
                    captureAudio={true}
                    type={RNCamera.Constants.Type.back}
                />

                <View style={{
                    position: 'absolute', bottom: 20, left: 20, right: 20
                }}>
                    {!recordedVideo ? (
                        <TouchableOpacity
                            onPress={isRecording ? stopRecording : startRecording}
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 35,
                                backgroundColor: isRecording ? COLORS.red : COLORS.green,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ color: COLORS.white, fontSize: 18 }}>
                                {isRecording ? 'Stop' : 'Record'}
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <Video source={{ uri: recordedVideo }} />
                    )}
                </View> */}
                <View style={[
                    GlobalStyle?.flexRowAlignCenter,
                    GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.marginTop

                ]}>
                    <Octicons
                        name="dot-fill"
                        size={22}
                        color={COLORS.colorPrimary}
                        style={{ marginRight: 5 }}
                    />
                    <Text style={[GlobalStyle?.fontSize16, GlobalStyle?.colorBlack,
                    GlobalStyle?.marginLeft,
                        // GlobalStyle?.marginTop
                    ]}>
                        You have 20 seconds to finish
                    </Text>
                </View>
                <View style={[
                    GlobalStyle?.flexRowAlignCenter,
                    GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.marginTop

                ]}>
                    <Octicons
                        name="dot-fill"
                        size={22}
                        color={COLORS.colorPrimary}
                        style={{ marginRight: 5 }}
                    />
                    <Text style={[GlobalStyle?.fontSize16, GlobalStyle?.colorBlack,
                    GlobalStyle?.marginLeft,
                        // GlobalStyle?.marginTop
                    ]}>
                        Follow on screen instructions to move
                        or speak.
                    </Text>
                </View>

            </View>
            <KidsAppCommBtn
                height={55}
                width={'100%'}
                borderRadius={15}
                marginTop={30}
                textSize={17}
                borderColor={COLORS?.gray}

                textColor={COLORS?.white}
                text={('Record Video')}
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

export default Step5Scrr;
