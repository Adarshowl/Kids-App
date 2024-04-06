import React, { useContext, useRef, useState } from 'react';
import {
  I18nManager,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { FONTS } from '../../../constants/Fonts';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { STRING } from '../../../constants';
import { COLORS } from '../../../constants/Colors';
import GlobalStyle from '../../../styles/GlobalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import themeContext from '../../../constants/themeContext';
import { useTranslation } from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import KidsAppCommBtn from '../../../utils/KidsAppCommBtn';
import LoginHeader from '../../../global/LoginHeader';

const ChangePassword = ({ navigation }) => {
  const theme = useContext(themeContext);
  const [addressDefault, setAddressDefault] = useState(false);

  const { t, i18n } = useTranslation();
  const [showOtp, setShowOtp] = useState(false);
  const [showConfirmOtp, setShowConfirmOtp] = useState(false);
  const [isOTPValid, setIsOTPValid] = useState(false);

  const [mobile, setMobile] = useState('');
  const [refer, setRefer] = useState('');
  const [email, setEmail] = useState('');
  // const [focused, setFocused] = useState(false);
  const phoneInput = useRef(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [focusedInput, setFocusedInput] = useState(-1); // Initialize with an invalid value

  const [show, setShow] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  const [newPassShow, setNewPassShow] = useState(true);
  const [conPassShow, setConPassShow] = useState(true);
  const [newPass, setNewPass] = useState('');
  const [conPass, setConPass] = useState('');

  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60); // Set the initial timer value
  const [isTimerActive, setIsTimerActive] = useState(true);
  const error = '';
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPwd, setConfirmPwd] = useState('');
  const handleInputFocus = index => {
    setFocusedInput(index);
  };

  const onSubmitClick = () => {
    handleOTPpassword();
  };
  const handleOTPpassword = () => {
    if (validateFieldNotEmpty(code)) {
      ShowToastMessage('OTP is required');
    } else {
      navigation.navigate('MainContainer');
    }
  };

  const [focused, setFocused] = React.useState(false);
  const [focused2, setFocused2] = React.useState(false);

  const getBorderWidth = () => {
    if (error) {
      return 1;
    }
    if (focused) {
      return 1;
    } else {
      return 0.2;
    }
  };

  const getBorderColor = () => {
    if (error) {
      return COLORS.red;
    }

    if (focused) {
      return theme?.colors?.colorPrimary;
    } else {
      return COLORS.bg_color;
    }
  };

  const getBgColor = () => {
    if (error) {
      return COLORS.red;
    }
    if (focused) {
      return theme?.colors?.bg_color;
    } else {
      // return COLORS.lightest_gray1;
      // return COLORS.bg_color;
      return theme?.colors?.bg_color;
    }
  };
  const getBorderWidth2 = () => {
    if (error) {
      return 1;
    }
    if (focused2) {
      return 1;
    } else {
      return 0.2;
    }
  };

  const getBorderColor2 = () => {
    if (error) {
      return COLORS.red;
    }

    if (focused2) {
      return theme?.colors?.colorPrimary;
    } else {
      return COLORS.bg_color;
    }
  };

  const getBgColor2 = () => {
    if (error) {
      return COLORS.red;
    }
    if (focused2) {
      return theme?.colors?.bg_color;
    } else {
      // return COLORS.lightest_gray1;
      // return COLORS.bg_color;
      return theme?.colors?.bg_color;
    }
  };
  const closeSignUpModal = () => {
    setShow(!show);
  };

  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <SafeAreaView
      style={[
        GlobalStyle.mainContainer,
        {
        },
      ]}>

      <LoginHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          GlobalStyle?.marginHorizontal15,
          GlobalStyle?.marginTop15,
          {
          },
        ]}>

        <View style={[
          GlobalStyle?.marginHorizontal5
          , {
            flex: 1,
            marginTop:25
          }]}>


          <Text
            style={[
              GlobalStyle?.fontSize25,
              {
                fontFamily: FONTS?.regular,

              },
            ]}>
            Create Password
          </Text>
          <Text
            style={[
              GlobalStyle?.fontSize16,
              GlobalStyle?.marginTop15,
              GlobalStyle?.marginRight,
              {
                fontFamily: FONTS?.extra_light,

              },
            ]}>
            Save the new password in the safe place,
            if you forget it than you have to do a
            forgot password again.
          </Text>

        </View>

        <View
          style={[
            GlobalStyle?.marginTop15
          ]}>

          {/* <Text
            style={[
              styles.txt,
              {
                color: COLORS?.black,
                marginLeft: 5,
              },
            ]}>
            {!show ? t('Create Your New Password') : ''}
          </Text> */}
          <View
            style={{

            }}>

            <Text
              style={[
                GlobalStyle?.label,
                {
                  color: COLORS?.black,
                  marginLeft: 8,
                  fontFamily: FONTS?.regular,
                },
              ]}>
              New Password
            </Text>
            <View
              style={[
                styles.textView,
                {
                  borderColor: getBorderColor(),
                  // flexDirection: getFlexDirection(),
                },
                {
                  shadowOffset: {
                    width: 3,
                    height: 3,
                  },
                },
                {
                  backgroundColor: getBgColor(),
                  borderWidth: getBorderWidth(),

                  borderRadius: 20,
                  // elevation: getElevation(),
                },
              ]}>
              {/* Left side lock icon */}
              <SimpleLineIcons
                name="lock"
                size={20}
                color={COLORS?.black}
                style={{
                  paddingLeft: 16,
                }}
              />
              {/* TextInput */}
              <TextInput
                placeholderTextColor={COLORS?.gray}
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
                placeholder="Enter New Password"
                secureTextEntry={!showOtp}
                value={password}
                onChangeText={v => setPassword(v)}
                style={{
                  flex: 1,
                  paddingLeft: 20,
                  color: COLORS?.black,
                  fontFamily: FONTS?.regular,
                }}
                onFocus={() => {
                  setFocused(true);
                }}
                onBlur={() => {
                  setFocused(false);
                }}
              />
              {/* Right side eye icon */}
              <TouchableOpacity onPress={() => setShowOtp(!showOtp)}>
                <Octicons
                  name={showOtp ? 'eye' : 'eye-closed'}
                  size={20}
                  // onPress={() => setShowOtp(!showOtp)}
                  color={COLORS?.black}
                  style={{
                    paddingEnd: 5,
                  }}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={[
                GlobalStyle?.label,
                GlobalStyle?.marginTop15,
                {
                  color: COLORS?.black,
                  marginLeft: 8,
                  fontFamily: FONTS?.regular,
                },
              ]}>
              Confirm Password
            </Text>
            <View
              style={[
                styles.textView,
                {
                  borderColor: getBorderColor2(),
                  // flexDirection: getFlexDirection(),
                },
                {
                  shadowOffset: {
                    width: 3,
                    height: 3,
                  },
                },
                {
                  backgroundColor: getBgColor2(),
                  borderWidth: getBorderWidth2(),

                  borderRadius: 20,
                  // elevation: getElevation(),
                },
              ]}>
              {/* Left side lock icon */}
              <SimpleLineIcons
                name="lock"
                size={20}
                color={COLORS?.black}
                style={{
                  paddingLeft: 16,
                }}
              />
              {/* TextInput */}
              <TextInput
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
                placeholder="Enter Confirm Password"
                secureTextEntry={!showConfirmOtp}
                value={ConfirmPwd}
                placeholderTextColor={COLORS?.gray}
                onChangeText={v => setConfirmPwd(v)}
                style={{
                  flex: 1,
                  paddingLeft: 20,
                  color: COLORS?.black,
                  fontFamily: FONTS?.regular,
                }}
                onFocus={() => {
                  setFocused2(true);
                }}
                onBlur={() => {
                  setFocused2(false);
                }}
              />
              {/* Right side eye icon */}
              <TouchableOpacity
                onPress={() => setShowConfirmOtp(!showConfirmOtp)}>
                <Octicons
                  name={showConfirmOtp ? 'eye' : 'eye-closed'}
                  size={20}
                  // onPress={() => setShowConfirmOtp(!showConfirmOtp)}
                  color={COLORS?.black}
                  style={{
                    paddingEnd: 5,
                  }}
                />
              </TouchableOpacity>
            </View>

         
          </View>
          <KidsAppCommBtn
            height={55}
            width={'100%'}
            borderRadius={15}
            textSize={17}
            fontWeight={'bold'}
            marginTop={'15%'}
            text={t('Reset')}
            textColor={COLORS?.white}
            // backgroundColor={theme.colors?.colorPrimary}
            onPress={() => {
              navigation.navigate('Login');
            }}
            textStyle={{
              fontFamily: FONTS?.semi_bold,
            }}
          />
        </View>

        {/* {renderSignUpModal()} */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  backIcon: {
    // marginTop: 18,
    marginStart: 15,
    paddingVertical: 5,
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
  head: {
    // marginTop: 15,
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 22,
    color: COLORS.black,
    fontFamily: FONTS?.bold,

    // marginTop: 8,
    // marginBottom: 8,
    // marginBottom: 20
    marginLeft: 20,
  },
  resend: {
    marginTop: 15,
    paddingVertical: 5,
    fontFamily: 'OpenSans-Mulish',
    textAlign: 'center',
    fontSize: 22,
    color: COLORS.black,
    marginTop: 20,
    // marginBottom: 8,
    // marginBottom: 20
  },
  txt: {
    marginTop: 10,
    paddingVertical: 20,
    // textAlign: 'center',
    fontFamily: FONTS?.regular,

    fontSize: 20,
    color: COLORS.black,
    // marginTop: 20,
    marginBottom: 10,
    // fontWeight: 'bold',
    // marginBottom: 20
  },
  heading: {
    fontFamily: 'OpenSans-Mulish',
    // textAlign: 'center',
    fontSize: 20,
    color: COLORS.gray,
    marginTop: 8,
    marginBottom: 8,
    // fontWeight: 'bold',
    marginBottom: 20,
  },
  app_logo: {
    height: 200,
    resizeMode: 'stretch',
    alignSelf: 'center',
    width: '60%',
    marginTop: 30,
    marginBottom: 20,
  },
  forgot_text: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: COLORS.black,
    marginVertical: 25,
    textDecorationLine: 'underline',
  },
  resendWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  resendWrapperText: {
    fontFamily: 'OpenSans-Medium',
    color: COLORS.colorPrimary,
    marginStart: 5,
  },
  msg_privacy_terms: {
    color: COLORS.black,
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    flex: 1,
  },
  textBox: {
    // borderWidth:0.2,
    width: '20%',
    height: 50,
    marginHorizontal: 4,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  textBoxes: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // textBox: {
  //   width: 50, // Adjust the width as needed
  //   height: 50, // Adjust the height as needed
  //   borderWidth: 1,
  //   borderColor: 'gray',
  //   textAlign: 'center',
  //   fontSize: 20,
  // },

  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    // borderWidth: 0.2,
    alignSelf: 'center',
    marginVertical: 12,
    // backgroundColor: theme?.colors?.bg_color,
    // borderColor: COLORS?.bg_color,
    // placeholderTextColor:theme?.colors?.textColor,

    // placeholderTextColor: COLORS.editTextBorder,
    paddingHorizontal: 10,
    height: 55,
    marginHorizontal: 0,
    // borderRadius: 10,
    fontFamily: 'Quicksand-Regular',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});
