import React, { useState, useRef, useEffect } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
    Image,
    ActivityIndicator,
    PermissionsAndroid,
    Platform,
    Modal


} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import CustomHeader from '../../global/CustomHeader';
import Foundation from 'react-native-vector-icons/Foundation'
import BottomSheet from 'react-native-simple-bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons'
import { COLORS, SIZES } from '../../constants';
import { requestExternalWritePermission } from '../../utils/RequestUserPermission';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { FONTS } from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GlobalStyle from '../../styles/GlobalStyle';
import CommHeader from '../../global/CommHeader';
import images from '../../constants/images';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import icons from '../../constants/icons';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import CustomBottomSheet from '../../global/CustomBottomSheet';
import ToolBarIcon from '../../utils/ToolBarIcon';
import PreprationContent from '../../global/PreprationContent';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import LoginHeader from '../../global/LoginHeader';


const EditProfile = ({ navigation }) => {

    const [showCameraModal, setShowCameraModal] = useState(false);

    const [selectedOption, setSelectedOption] = useState('Boy');
    const [showOtp, setShowOtp] = useState(true);
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [checkbox, setCheckbox] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    }

    const openImageCamera = () => {
        ImagePicker.openCamera({
            multiple: false,
            cropping: true,
            includeBase64: true,
        }).then(images => {
            // const updatedUserData = { ...userData, profile_img: images.path };
            // setUserData(updatedUserData);

            setImage('data:image/jpeg;base64,' + images?.data);

            setShowCameraModal(false);
        });
    };
    const [loading, setLoading] = useState(false);

    // const dispatch = useDispatch()
    // const userData = useSelector(state => state.state?.userData);

    useEffect(() => {
        let permission = requestExternalWritePermission();
        setHavePermission(permission);
        // setImage(icons.img_place)

        const requestCameraPermission = async () => {
            if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: 'Camera Permission',
                            message: 'App needs camera permission',
                        },
                    );
                    // If WRITE_EXTERNAL_STORAGE Permission is granted
                    return granted === PermissionsAndroid.RESULTS.GRANTED;
                } catch (err) {
                    console.warn(err);
                    alert('Write permission err', err);
                }
                return false;
            } else {
                return true;
            }
        };
        requestCameraPermission();
    }, []);

    useEffect(() => {
        // getUserFromStorage();
        // setTimeout(async () => {
        //   await getUserFromStorage();
        // }, 0);
    }, []);
    // const [userData, setUserData] = useState({});
    const [havePermission, setHavePermission] = useState(false);

    const openImagePicker = () => {
        try {
            ImagePicker.openPicker({
                multiple: false,
                cropping: true,
                includeBase64: true,
            }).then(images => {
                setImage('data:image/jpeg;base64,' + images?.data);
            });
        } catch (error) {
            ShowConsoleLogMessage('Image picker error => ' + JSON.stringify(error));
        }
    };
    const [image, setImage] = useState(null);
    const renderCameraModal = () => {
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={showCameraModal}
                onRequestClose={() => {
                    setShowCameraModal(false);
                }}
                style={{
                    flexGrow: 1,
                }}>
                <View
                    style={{
                        backgroundColor: '#00000090',
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                        // alignItems:'center'
                    }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            setShowCameraModal(false);
                        }}
                        style={{
                            // flexGrow: 1,
                            // justifyContent: 'flex-end',
                            // alignItems: 'center',
                        }}
                    />
                    <View
                        style={{
                            maxHeight: SIZES.height * 0.7,
                            backgroundColor: COLORS.white,
                        }}>
                        <View style={[
                            GlobalStyle.activityIndicatorWrapper
                        ]}>
                            <View
                                style={[
                                    GlobalStyle.flexRowJustifyBtwn,
                                    GlobalStyle.paddingVertical15,
                                    GlobalStyle.paddingHorizontal15,
                                    GlobalStyle?.marginHorizontal15
                                ]}>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize18,
                                        {
                                            marginTop: 0,
                                            // flex: 1,
                                        },
                                    ]}>
                                    Choose file
                                </Text>
                                <Ionicons
                                    name={'close'}
                                    color={COLORS.black}
                                    size={25}
                                    onPress={() => setShowCameraModal(false)}
                                />
                            </View>
                            <View
                                style={{
                                    height: 0.5,
                                    width: '100%',
                                    backgroundColor: COLORS?.gray,
                                }}
                            />

                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    flexDirection: 'row',
                                    marginVertical: 25,
                                    marginHorizontal: 30
                                }}>
                                <TouchableOpacity
                                    style={[
                                        GlobalStyle.pickerStyle,
                                        {
                                            borderColor: COLORS?.customColor,
                                        },
                                    ]}
                                    onPress={() => {
                                        setShowCameraModal(false);
                                        if (havePermission) {
                                            openImageCamera();
                                        } else {
                                            ShowToastMessage('Please provide camera permission');
                                        }
                                    }}>
                                    <Ionicons name={'camera'} color={COLORS.black} size={30} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        GlobalStyle.pickerStyle,
                                        {
                                            borderColor: COLORS.customColor,
                                        },
                                    ]}
                                    onPress={() => {
                                        // setShowCameraModal(false);
                                        openImagePicker();
                                        setShowCameraModal(false);
                                    }}>
                                    <Foundation name={'photo'} color={COLORS.black} size={30} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    };



    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer
            ]}
        >
            <LoginHeader />



            <ScrollView

            >
                <Text
                    style={[
                        GlobalStyle?.fontSize22,
                        GlobalStyle?.marginLeft15,
                        GlobalStyle?.marginTop15,
                        {
                            fontFamily: FONTS?.medium
                        }
                    ]}
                >My Profile</Text>
                <View
                    style={{
                        backgroundColor: COLORS?.light_green,
                        paddingVertical: 20,
                        marginHorizontal: 20,
                        borderRadius: 10,
                        marginTop: 20
                    }}
                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
                            alignItems: 'center',
                            // flexDirection: 'row',
                            width: 120,
                            marginVertical: 10,
                        }}>
                        {image ? (
                            <ImageBackground
                                style={{
                                    height: 140,
                                    width: 140,
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                }}
                            // source={icons.profile_placeholder}
                            >
                                <Image
                                    source={{ uri: image }}
                                    style={{
                                        height: 120,
                                        width: 120,
                                        // resizeMode: 'center',
                                        borderRadius: 100,
                                        alignSelf: 'center',
                                    }}
                                    PlaceholderContent={
                                        <ActivityIndicator color={COLORS.primary} size={'small'} />
                                    }
                                />
                            </ImageBackground>
                        ) : (
                            <ImageBackground
                                style={{
                                    height: 100,
                                    width: '100%',
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    borderColor: COLORS?.gray,
                                }}
                            // source={icons.profile_placeholder}
                            >
                                <Image
                                    source={images.profile}
                                    // source={{
                                    //     uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU',
                                    // }}
                                    style={{
                                        height: 100,
                                        width: 100,
                                        borderRadius: 100,
                                        alignSelf: 'center',
                                        // backgroundColor:COLORS?.bg
                                    }}
                                />
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize15,
                                        GlobalStyle?.marginTop,
                                    ]}
                                >Profile Photo</Text>
                            </ImageBackground>
                        )}

                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                bottom: 3,
                                right: 1,
                                padding: -6,
                                // width: 35,
                                // height: 35,

                            }}
                            onPress={() => {
                                setShowCameraModal(true);
                            }}>
                            <Image
                                source={icons?.editprofile}
                                style={{
                                    width: 55,
                                    height: 55,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={[
                    GlobalStyle?.marginTop15,

                    GlobalStyle?.marginHorizontal5, {
                        marginHorizontal: 20,

                    }
                ]}>
                    <KidsAppEditText
                        placeholder="Enter your name"
                        label="Name"

                        keyBoardType={'email-address'}
                    // onChangeText={v => setEmail(v)}
                    />
                    <KidsAppEditText
                        placeholder="Enter your email"
                        label="Nickname"

                        keyBoardType={'email-address'}
                    // onChangeText={v => setEmail(v)}
                    />

                    <KidsAppEditText
                        placeholder="DD/MM/YYYY"
                        label="Date of Birth"
                        iconPosition={'left'}

                        keyBoardType={'number-pad'}
                    // onChangeText={v => setEmail(v)}
                    />


                    <Text
                        style={{
                            fontSize: 19,
                            color: COLORS.black,
                            marginBottom: 5,
                            marginLeft: 5,
                            marginTop: 4,
                            fontFamily: FONTS?.regular,
                        }}
                    >Gender</Text>
                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            {

                            }
                        ]}
                    >
                        <TouchableOpacity
                            style={{
                                height: 50,
                                borderWidth: selectedOption === 'Boy' ? 1 : 0.5,
                                borderColor: selectedOption === 'Boy' ? COLORS?.colorBtn : COLORS?.gray,
                                backgroundColor: selectedOption === 'Boy' ? COLORS?.light_green : COLORS?.white,
                                marginVertical: 12,
                                marginTop: 10,
                                borderRadius: 25,
                                width: '47%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => handleOptionSelect('Boy')}

                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18, {
                                        fontFamily: FONTS?.medium,

                                    }
                                ]}
                            >Boy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: 50,
                                borderWidth: selectedOption === 'Girl' ? 1 : 0.5,
                                borderColor: selectedOption === 'Girl' ? COLORS?.colorBtn : COLORS?.gray,
                                backgroundColor: selectedOption === 'Girl' ? COLORS?.light_green : COLORS?.white,
                                marginVertical: 12,
                                marginTop: 10,
                                borderRadius: 25,
                                width: '47%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => handleOptionSelect('Girl')}

                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18, {
                                        fontFamily: FONTS?.medium,
                                        // color: selectedOption === 'Girl' ? 'white' : 'black'
                                    }
                                ]}
                            >Girl</Text>
                        </TouchableOpacity>
                    </View>

                </View>




            </ScrollView>

            <View
                style={[
                    GlobalStyle?.marginVertical10,
                    GlobalStyle?.marginHorizontal15,
                    GlobalStyle?.marginBottom
                ]}
            >

                <KidsAppCommBtn
                    height={50}
                    borderRadius={15}
                    width={'100%'}
                    // marginHorizontal={5}
                    marginTop={15}
                    text="Edit Profile"
                    backgroundColor={COLORS.primary}
                    textStyle={{
                        fontFamily: FONTS.medium,
                    }}
                    onPress={() => {
                        navigation.navigate('MainContainer');
                        // handleLoginBtnClick();
                    }}
                    textColor={COLORS.white}
                    textSize={17}
                />
            </View>

            {renderCameraModal()}


        </SafeAreaView>
    );
};

export default EditProfile;
const styles = StyleSheet.create({
    activityIndicatorWrapper: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        alignItems: 'center',
    },

});
