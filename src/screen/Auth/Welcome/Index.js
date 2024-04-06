import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    I18nManager,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { SIZES, STRING, COLORS, FONTS } from '../../../constants';
import images from '../../../constants/images';
import GlobalStyle from '../../../styles/GlobalStyle';
import KidsAppCommBtn from '../../../utils/KidsAppCommBtn';
import KidsAppBorderWidthBtn from '../../../utils/KidsAppBorderWidthBtn';
import { ShowToastMessage } from '../../../utils/Utility';
import icons from '../../../constants/icons';


const Welcome = ({ navigation }) => {

    return (
        <SafeAreaView
            style={[
                GlobalStyle.mainContainer,
                {
                },
            ]}>
            <ImageBackground
                style={{
                    flex: 1,
                    // height: SIZES.height - 350,
                    height: 450,
                    width: SIZES.width,
                    alignSelf: 'center',
                }}
                source={images?.splash}
            >
                <Image
                    style={{
                        flex: 1,
                        // height: SIZES.height - 350,
                        // height: 180,
                        // width: SIZES.width -20,
                        // width: 240,
                        alignSelf: 'center',
                        resizeMode: 'contain'
                    }}
                    source={images.welcome}
                />
            </ImageBackground>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    // flexGrow: 1,
                    flex: 1,
                    backgroundColor: COLORS?.white,
                    // borderTopLeftRadius: 25,
                    // borderTopRightRadius: 25,
                    // marginTop: -20,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    elevation: 5,
                    marginBottom: 20
                }}
            >

                <View
                    style={{
                        marginHorizontal: 20,
                        marginTop: 20
                    }}>

                    <View
                        style={[
                            GlobalStyle?.flexRowAlignCenter,
                            GlobalStyle?.flexAlignJustifyCenter
                        ]}
                    >
                        <Image
                            source={icons?.logo}
                            style={{
                                width: 50,
                                height: 50,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text
                            style={[
                                GlobalStyle.fontSize22,
                                GlobalStyle.marginLeft,
                                GlobalStyle.colorPrimary,
                                {
                                    fontFamily: FONTS?.bold
                                }]}
                        >
                            Kids App
                        </Text>
                    </View>
                    <View
                        style={[
                            GlobalStyle?.marginTop15
                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize20, {
                                    textAlign: 'center',
                                    fontFamily: FONTS?.regular
                                }
                            ]}
                        >
                            The debit card for kids managed
                            by parents - With investing
                        </Text>
                        <Text
                            style={[
                                GlobalStyle?.fontSize14,
                                GlobalStyle?.marginTop,
                                GlobalStyle?.colorGray,

                                {
                                    textAlign: 'center',
                                    fontFamily: FONTS?.regular
                                }
                            ]}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>


                    <KidsAppCommBtn
                        height={55}
                        width={'100%'}
                        borderRadius={15}
                        marginTop={25}
                        textSize={17}
                        borderColor={COLORS?.gray}

                        textColor={COLORS?.white}
                        text={('Get Started')}
                        backgroundColor={COLORS?.white}
                        onPress={() => {
                            navigation.navigate('WelcomeKids');
                            // languageRestart();
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
                        borderWidth={1.5}
                        borderColor={COLORS?.colorBtn}
                        marginTop={25}
                        textSize={16}
                        textColor={COLORS?.black}
                        text={('Sign In')}
                        backgroundColor={COLORS?.white}
                        onPress={() => {
                            // ShowToastMessage('Comming Soon!')
                            navigation.navigate('Login');
                            // languageRestart();
                        }}
                        textStyle={{
                            fontFamily: FONTS?.regular,
                            color: COLORS.colorPrimary,
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    newUser: {
        fontSize: 15,
        marginVertical: 25,
        fontFamily: FONTS.regular,
        textAlign: 'center',
        color: COLORS.grey,
    },
    signUp: {
        fontSize: 15,
        marginTop: 15,
        fontFamily: FONTS.medium,
        textAlign: 'center',
        color: COLORS.primary,
    },
});