import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS } from '../../../constants/Colors';
import GlobalStyle from '../../../styles/GlobalStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OtpInputs from 'react-native-otp-inputs';
import themeContext from '../../../constants/themeContext';
import { useTranslation } from 'react-i18next';
import { useRoute } from '@react-navigation/native';
import { FONTS } from '../../../constants/Fonts';
import KidsAppCommBtn from '../../../utils/KidsAppCommBtn';
import LoginHeader from '../../../global/LoginHeader';

const OtpScreen = ({ navigation }) => {
    const route = useRoute();
    const userEmail = route.params?.userEmail || '';

    const theme = useContext(themeContext);
    const { t, i18n } = useTranslation();
    const [focused, setFocused] = React.useState(false);
    const [show, setShow] = useState(false);
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(30);
    const [isTimerActive, setIsTimerActive] = useState(true);

    const formatEmail = userEmail => {
        if (userEmail.length <= 3) {
            return userEmail;
        }
        const firstThree = userEmail.substring(0, 3);
        const dotDots = '*****';
        const atIndex = userEmail.indexOf('@');
        const domain = userEmail.substring(atIndex);
        return `${firstThree}${dotDots}${domain}`;
    };
    const error = '';
    const [code, setCode] = useState('');



    const getBorderWidth = () => {
        if (error) {
            return 1;
        }
        if (focused) {
            return 1;
        } else {
            return 0.5;
        }
    };

    const getBorderColor = () => {
        if (error) {
            return COLORS.red;
        }

        if (focused) {
            return COLORS?.customColor;
        } else {
            return COLORS?.gray;
        }
    };

    const getBgColor = () => {
        if (error) {
            return COLORS.red;
        }
        if (focused) {
            return COLORS?.light;
        } else {

            return COLORS?.white;
        }
    };



    const handleOTPpassword = () => {
        if (validateFieldNotEmpty(code)) {
            ShowToastMessage('OTP is required');
        } else {
            navigation.navigate('PasswordConform');
        }
    };


    const startTimer = () => {
        setIsTimerActive(true);
        setTimer(30);
    };



    // Function to handle OTP resend
    const handleResendOTP = () => {
        // Add your logic to resend OTP here
        // You can stop the timer, send a new OTP, and start the timer again
        startTimer();
    };

    useEffect(() => {
        let interval;
        if (isTimerActive) {
            interval = setInterval(() => {
                if (timer > 0) {
                    setTimer(timer - 1);
                } else {
                    setIsTimerActive(false);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer, isTimerActive]);

    // const startTimer = () => {
    //   setTimerActive(true);
    //   setTimer(60);

    //   const interval = setInterval(() => {
    //     if (timer > 0) {
    //       setTimer(timer - 1);
    //     } else {
    //       setTimerActive(false);
    //       clearInterval(interval);
    //     }
    //   }, 1000);
    // };

    // useEffect(() => {
    //   if (timerActive) {
    //     startTimer();
    //   }
    // }, [timerActive]);

    // const handleResendCode = () => {
    //   // Add logic to resend the code here
    //   // You can also add a condition to prevent resending if the timer is still active
    //   if (timerActive) {
    //     // Resend the code
    //     startTimer(); // Restart the timer
    //   }
    // };
    // const inputFromChildComponent = (combinedValueArray, currentValue, refForTheCurrentValue) => {
    //   console.log(combinedValueArray, currentValue, refForTheCurrentValue)
    // }


    return (
        <SafeAreaView
            style={[
                GlobalStyle.mainContainer,
                {
                },
            ]}>
            <LoginHeader />

            <ScrollView
                style={[
                    GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.marginTop15,
                    {
                    },
                ]}>

                <View style={[
                    GlobalStyle?.marginHorizontal15
                    , {
                        flex: 1
                    }]}>


                    <Text
                        style={[
                            GlobalStyle?.fontSize25,
                            {
                                fontFamily: FONTS?.regular,

                            },
                        ]}>
                        Verification

                    </Text>

                </View>


                <View
                    style={[
                        GlobalStyle.marginHorizontal15,
                        {
                            marginTop: 25
                        },
                    ]}>
                    <View
                        style={{
                        }}>

                        <View
                            style={{

                            }}>

                            <Text
                                numberOfLines={1}
                                style={[
                                    GlobalStyle?.fontSize16,
                                    {
                                        fontFamily: FONTS?.extra_light

                                    },
                                ]}>
                                We sent you a verification code to
                            </Text>
                            <View
                                style={[
                                    GlobalStyle?.flexRowAlignCenter
                                ]}
                            >
                                <Text
                                    numberOfLines={1}
                                    style={[
                                        GlobalStyle?.fontSize16,
                                        {
                                            fontFamily: FONTS?.light
                                        },
                                    ]}>
                                    your email
                                </Text>
                                <Text
                                    numberOfLines={1}
                                    style={[
                                        GlobalStyle?.fontSize18,
                                        {
                                            marginLeft: 5,
                                            fontFamily: FONTS?.medium,
                                            color: COLORS?.colorBtn
                                        },
                                    ]}>
                                    parentinfo@gmail.com
                                </Text>
                            </View>
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.txt,
                                    {

                                    },
                                ]}>
                                {show ? '' : ` ${formatEmail(userEmail)}`}
                            </Text>
                        </View>

                        <OtpInputs
                            // code={otp}
                            // handleChange={handleOTPChange}

                            handleChange={code => setCode(code)}
                            numberOfInputs={4}
                            inputContainerStyles={{
                                // borderWidth: 0.5,
                                // borderColor: focused ? COLORS.gray : COLORS.bg_color,
                                marginHorizontal: 3,
                                height: 65,
                                width: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                                borderColor: getBorderColor(),

                                backgroundColor: getBgColor(),
                                borderWidth: getBorderWidth(),

                                // backgroundColor: focused ? COLORS.gray : COLORS.bg_color,
                                // elevation: 5,
                                color: COLORS?.colorBtn,
                                marginTop: 10
                            }}
                            selectTextOnFocus={() => {
                                setFocused(true);
                            }}
                            onBlur={() => {
                                setFocused(false);
                            }}
                            onFocus={() => {
                                setFocused(true);
                            }}

                            inputStyles={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: COLORS?.colorBtn,
                            }}
                        />

                        {isTimerActive ? (
                            <View style={[
                                GlobalStyle?.marginTop15
                            ]}>
                                <Text
                                    style={[
                                        styles.resend,
                                        {
                                            color: COLORS?.grey,
                                            fontSize: 16,
                                            fontFamily: FONTS?.regular
                                        },
                                    ]}>
                                    Re-send OTP in
                                    <Text
                                        style={{
                                            color: COLORS?.colorBtn,
                                            fontFamily: FONTS?.semi_bold,
                                            fontSize: 16,
                                        }}>
                                        {' '}
                                        {timer}{' '}
                                    </Text>
                                    <Text
                                        style={{
                                            color: COLORS?.colorBtn,
                                            fontFamily: FONTS?.semi_bold,
                                            fontSize: 16,
                                        }}
                                    >sec</Text>
                                </Text>
                            </View>
                        ) : (
                            <TouchableOpacity
                                style={[
                                    GlobalStyle?.marginTop15
                                ]}
                                onPress={handleResendOTP}>
                                <Text
                                    style={[
                                        styles.resend,
                                        {
                                            color: COLORS?.grey,
                                            fontSize: 18,
                                            fontFamily: FONTS?.regular
                                        },
                                    ]}>
                                    Resend Code
                                </Text>
                            </TouchableOpacity>
                        )}
                        {/* <TouchableOpacity
                   onPress={handleResendCode}

         >
         <Text
            style={[
              styles.resend,
              {
                color: theme?.colors?.textColor,
                fontSize:18
              },
            ]}>
            {!show ? t('Resend Code') : ''}
          </Text>
         </TouchableOpacity> */}
                    </View>
                    <KidsAppCommBtn
                        height={55}
                        width={'100%'}
                        borderRadius={15}
                        textSize={17}
                        marginTop={'20%'}
                        text={t('Verify')}
                        justifyContent={'flex-end'}
                        alignItems={'flex-end'}
                        textColor={COLORS?.white}
                        // backgroundColor={theme.colors?.text}
                        onPress={() => {
                            navigation.navigate('ChangePassword');

                            // if (otp.length === 4 && /^\d{4}$/.test(otp)) {
                            //     navigation.navigate('MainContainer');
                            //     // closeSignUpModal();
                            // } else {
                            //     ShowToastMessage('Please enter a valid 4-digit OTP');
                            // }
                        }}
                        textStyle={{

                            fontFamily: FONTS?.medium

                        }}
                    />
                </View>

                <View
                    style={[
                        GlobalStyle?.flexAlignJustifyCenter,
                        GlobalStyle?.marginTop15,
                        GlobalStyle?.flexRowAlignCenter,
                        GlobalStyle?.marginBottom,
                        {
                            alignItems: 'center'
                        }
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize16,
                            GlobalStyle?.colorGray,
                            {
                                fontFamily: FONTS?.regular,
                            },
                        ]}>
                        Having trouble signing
                    </Text>
                    <Text
                        style={[
                            GlobalStyle?.fontSize16,
                            {
                                // fontSize: 18,
                                fontFamily: FONTS?.semi_bold,
                                color: COLORS?.colorBtn,
                                marginLeft: 5
                            },
                        ]}>
                        Contact US
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default OtpScreen;

const styles = StyleSheet.create({

});
