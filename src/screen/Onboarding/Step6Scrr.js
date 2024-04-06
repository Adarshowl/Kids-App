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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, FONTS, SIZES, STRING } from '../../constants';
import icons from '../../constants/icons';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import { useNavigation } from '@react-navigation/native';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import ImagePicker from 'react-native-image-crop-picker';


const Step6Scrr = ({ goToNextStep }) => {
    const [showOtp, setShowOtp] = useState(true);
    const navigation = useNavigation();


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
            >Record a Video Keep You face inside the oval</Text>

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
                                width: '70%',
                                height: 300,
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
                            source={images?.idPhoto}
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

                <View style={[
                    GlobalStyle?.flexRowAlignCenter,
                    GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.marginTop,
                    {

                        alignSelf: 'center'
                    }
                ]}>

                    <Text
                        style={[
                            GlobalStyle?.fontSize20,
                            GlobalStyle?.colorBlack,
                            GlobalStyle?.marginHorizontal15,
                            {
                                textAlign: 'center'
                            }
                        ]}
                    >
                        Turn your head right
                    </Text>
                    <AntDesign
                        name="arrowright"
                        size={26}
                        color={COLORS.colorBtn}
                        style={{ marginLeft: 5 }}
                    />
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
                text={('Submit & Upload')}
                backgroundColor={COLORS?.white}
                onPress={() => {
                    navigation.navigate('MainContainer')
                }}
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

export default Step6Scrr;
