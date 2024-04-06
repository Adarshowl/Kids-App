import React, { useEffect, useState } from 'react';
import {
    Alert,
    Image,
    ImageBackground,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyle from '../../styles/GlobalStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, FONTS, STRING } from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useDispatch } from 'react-redux';
import icons from '../../constants/icons';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import LoginHeader from '../../global/LoginHeader';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import { ShowToastMessage } from '../../utils/Utility';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList } from 'react-native';
import images from '../../constants/images';


const WelcomeKids = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showOtp, setShowOtp] = useState(true);
    const dispatch = useDispatch();

    const [checkbox, setCheckbox] = useState(false);

    const [data, setData] = useState([
        {
            image: icons.parent,
            selected: true,
            id: 1,
            name: 'I’m the parent or guardian'
        },
        {
            image: icons.teen,
            selected: false,
            id: 2,
            name: 'I’m a Teen'
        },

    ]);

    const handlePress = (itemId) => {
        const updatedData = data.map(item => {
            if (item.id === itemId) {
                return { ...item, selected: true };
            } else {
                return { ...item, selected: false };
            }
        });
        setData(updatedData);
    };
    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity
                    // onPress={() => handlePress(item.id)}

                    style={[
                        GlobalStyle?.onbordingButton,
                        GlobalStyle?.flexRowJustifyBtwn,
                        // GlobalStyle?.marginTop,
                        GlobalStyle?.paddingVertical15,

                        {
                            backgroundColor: item?.selected ? COLORS?.white : COLORS?.colorPrimary,
                            // marginHorizontal: 3,
                            marginVertical: 10,
                            // paddingVertical: 12,
                            borderRadius: 15,
                            borderWidth: 0.5,
                            // paddingVertical: 15,
                            borderColor: COLORS?.gray

                        }
                    ]}
                >
                    <View style={[GlobalStyle?.flexRowAlignCenter, {
                    }]}>
                        <View
                            style={[
                                // GlobalStyle?.flexAlignJustifyCenter
                                , {
                                    // width: 65,
                                    // height: 65,
                                    // // backgroundColor: item?.selected ? COLORS?.colorPrimary : COLORS?.white,
                                    // borderRadius: 30,
                                    // alignItems: 'center',
                                    // justifyContent: 'center',
                                }
                            ]}
                        >
                            <Image
                                style={{
                                    width: 60,
                                    height: 60,
                                    // tintColor: item?.selected ? COLORS?.white : COLORS?.colorPrimary
                                }}
                                source={item?.image} />
                        </View>
                        <View style={[
                            // GlobalStyle?.marginLeft15, 
                            {
                                paddingHorizontal: 20,
                                flex: 1


                            }]}>
                            <Text
                                numberOfLines={2}
                                style={[GlobalStyle?.fontSize22, {
                                    color: item?.selected ? COLORS?.black : COLORS?.white
                                }]}>{item?.name}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => handlePress(item.id)}

                    >
                        {
                            !item?.selected ? (
                                <Image
                                    source={icons?.check}
                                    style={{
                                        width: 22,
                                        height: 22
                                    }}
                                />
                            ) :
                                <TouchableOpacity
                                    style={{}}
                                    onPress={() => handlePress(item.id)}

                                >
                                    <MaterialIcons
                                        name={'radio-button-unchecked'}
                                        size={25}
                                        color={COLORS?.customColor}
                                    />
                                </TouchableOpacity>
                        }

                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <SafeAreaView
            style={[GlobalStyle.mainContainer,
                // GlobalStyle.paddingHorizontal5
            ]}>
            <LoginHeader />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}>
                <View style={GlobalStyle.paddingHorizontal20}>

                    <View
                        style={{
                            // paddingTop: 25,
                            marginTop: 30
                        }}
                    />
                    <Text
                        style={[
                            GlobalStyle?.fontSize22,
                            GlobalStyle?.paddingHorizontal5,


                            {
                                fontFamily: FONTS?.regular,
                                fontSize: 25,
                                marginBottom: 20
                            }
                        ]}
                    >
                        Welcome to Kids App
                    </Text>
                    <View>
                        <Text
                            style={[
                                GlobalStyle?.fontSize20,
                                GlobalStyle?.paddingHorizontal5,
                                {
                                    fontFamily: FONTS?.light,
                                    marginBottom: 20
                                }
                            ]}
                        >
                            What’s your role in the family?
                        </Text>
                        <FlatList
                            // horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                flex: 1,
                                // paddingLeft: 10,
                                // paddingRight: 10,
                                paddingBottom: 10,
                                paddingTop: 10,
                            }}
                            data={

                                data
                            }
                            renderItem={renderItem}

                        />
                    </View>

                    <View
                        style={{
                            // marginHorizontal: 8,
                            flex: 1,
                            marginTop: 30
                        }}
                    >
                        <KidsAppCommBtn
                            height={55}
                            borderRadius={15}
                            width={'100%'}
                            // marginHorizontal={5}
                            marginTop={15}
                            text="Continue"
                            backgroundColor={COLORS.primary}
                            textStyle={{
                                fontFamily: FONTS.medium,
                            }}
                            onPress={() => {
                                navigation.navigate('Onboarding');
                                // handleLoginBtnClick();
                            }}
                            textColor={COLORS.white}
                            textSize={17}
                        />
                        <KidsAppBorderWidthBtn
                            height={55}
                            width={'100%'}
                            borderRadius={15}
                            borderWidth={1.5}
                            borderColor={COLORS?.colorBtn}
                            marginTop={30}
                            textSize={17}
                            textColor={COLORS?.colorBtn}
                            text={('Cancel')}
                            backgroundColor={COLORS?.white}
                            onPress={() => {
                                // ShowToastMessage('Comming Soon!')
                            }}
                            textStyle={{
                                fontFamily: FONTS?.medium,
                            }}
                        />

                        <Text style={[
                            GlobalStyle?.fontSize16,
                            GlobalStyle?.marginTop15,
                            GlobalStyle?.colorGray,
                            {
                                fontFamily: FONTS?.regular,
                                marginLeft: 5
                            }
                        ]} numberOfLines={2}>
                            If you’re a teen, don’t worry
                        </Text>
                        <Text style={[
                            GlobalStyle?.fontSize16,
                            // GlobalStyle?.marginTop5,
                            GlobalStyle?.colorGray,
                            {
                                fontFamily: FONTS?.regular
                            }
                        ]} numberOfLines={2}>
                            Ask your parents to create an account for you.
                        </Text>

                    </View>

                </View>
                <View
                    style={{
                        flex: 1,
                        marginBottom: 10
                    }}
                />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};
export default WelcomeKids;

const styles = StyleSheet.create({
});