import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GlobalStyle from '../../../styles/GlobalStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProducerEditText from '../../../utils/EditText/KidsAppEditText';
import { COLORS, FONTS, STRING } from '../../../constants';
import Octicons from 'react-native-vector-icons/Octicons';
import ProducerCommonBtn from '../../../utils/KidsAppCommBtn';
import {
  hasNumber,
  ShowConsoleLogMessage,
  ShowToastMessage,
  validateEmail,
  validateFieldNotEmpty,
} from '../../../utils/Utility';
import ApiCall from '../../../network/ApiCall';
import { API_END_POINTS, API_TYPE } from '../../../network/ApiEndPoints';
import ProducerProgressBar from '../../../utils/ProducerProgressBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import icons from '../../../constants/icons';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(true);
  const [checkbox, setCheckbox] = useState(false);

  const handleOnSignUpClick = () => {
    if (!validateFieldNotEmpty(name)) {
      ShowToastMessage('Please enter name');
    } else if (!validateFieldNotEmpty(mobile)) {
      ShowToastMessage('Please enter Phone Number');
    } else if (!hasNumber(mobile)) {
      ShowToastMessage('Please enter correct Phone Number');
    } else if (!validateFieldNotEmpty(email)) {
      ShowToastMessage('Please enter Email');
    } else if (!validateEmail(email)) {
      ShowToastMessage('Please enter valid Email');
    } else if (!validateFieldNotEmpty(password)) {
      ShowToastMessage('Please enter password');
    } else if (!checkbox) {
      ShowToastMessage('Please agree to terms and conditions');
    } else {
      setLoading(true);
      let body = {
        name: name,
        email: email.trim(),
        phone: mobile,
        password: password,
      };
      ShowConsoleLogMessage('sign up body -> ' + JSON.stringify(body));
      ApiCall(API_TYPE.POST, body, API_END_POINTS.API_SIGN_UP)
        .then(response => {
          ShowConsoleLogMessage(
            'response of sign up api -> ' + JSON.stringify(response),
          );
          if (response?.data?.status === true) {
            // ShowToastMessage(response?.data?.message);
            setLoading(false);

            navigation.replace('OTP', {
              email: email,
              data: response?.data?.data,
              body: body,
            });
            // navigation.navigate('MainContainer');
          } else {
            ShowToastMessage(response?.data?.message);
          }
        })
        .catch(error => {
          ShowConsoleLogMessage(
            'response of sign up api -> ' + JSON.stringify(error),
          );
          ShowToastMessage('Something went wrong!');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <SafeAreaView style={GlobalStyle.mainContainer}>
      <ProducerProgressBar loading={loading} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View
          style={{
            paddingHorizontal: 15,
          }}>
          <Image style={styles.loginLogo} source={icons.login} />

          <Text
            style={{
              fontSize: 22,
              fontFamily: FONTS.semi_bold,
              color: COLORS.primary,
              marginTop: 25,
            }}>
            {STRING.createAccount}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONTS.regular,
              marginTop: 5,
              color: COLORS.grey,
            }}>
            {STRING.createAccountBelow}
          </Text>
          <View
            style={{
              paddingTop: 15,
            }}
          />

          <ProducerEditText
            placeholder={'Full Name'}
            label={'Full Name'}
            iconPosition={'right'}
            icon={
              <Octicons
                name={'check-circle'}
                size={20}
                style={{
                  marginHorizontal: 5,
                }}
              />
            }
            value={name}
            onChangeText={v => setName(v)}
          />
          <ProducerEditText
            placeholder={STRING.mobileHint}
            label={STRING.mobile}
            iconPosition={'right'}
            value={mobile}
            maxLength={10}
            keyBoardType={'number-pad'}
            onChangeText={v => setMobile(v)}
            icon={
              <Octicons
                name={'check-circle'}
                size={20}
                style={{
                  marginHorizontal: 5,
                }}
              />
            }
          />
          <ProducerEditText
            placeholder={STRING.emailHint}
            label={STRING.email}
            iconPosition={'right'}
            value={email}
            keyBoardType={'email-address'}
            onChangeText={v => setEmail(v)}
            icon={
              <Octicons
                name={'check-circle'}
                size={20}
                style={{
                  marginHorizontal: 5,
                }}
              />
            }
          />
          <ProducerEditText
            placeholder={STRING.passwordHint}
            label={STRING.password}
            iconPosition={'right'}
            secureTextEntry={showOtp}
            value={password}
            icon={
              <Octicons
                name={showOtp ? 'eye-closed' : 'eye'}
                size={20}
                onPress={() => setShowOtp(!showOtp)}
                color={COLORS.primary}
                style={{
                  marginHorizontal: 5,
                }}
              />
            }
            onChangeText={v => setPassword(v)}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setCheckbox(!checkbox)}
            style={[
              GlobalStyle.flexRowAlignCenter,
              {
                marginTop: 15,
              },
            ]}>
            <MaterialCommunityIcons
              name={checkbox ? 'checkbox-outline' : 'checkbox-blank-outline'}
              size={20}
              color={checkbox ? COLORS.primary : COLORS.grey}
              style={{
                marginHorizontal: 5,
              }}
              onPress={() => setCheckbox(!checkbox)}
            />

            <Text
              style={[
                {
                  fontSize: 15,
                  fontFamily: FONTS.medium,
                  textAlign: 'center',
                  color: COLORS.black,
                },
              ]}
              numberOfLines={2}>
              I agree to terms and conditions
            </Text>
          </TouchableOpacity>
          <ProducerCommonBtn
            height={50}
            borderRadius={8}
            marginHorizontal={1}
            marginTop={25}
            text={STRING.sign_up}
            backgroundColor={COLORS.primary}
            textStyle={{
              fontFamily: FONTS.medium,
            }}
            onPress={() => {
              handleOnSignUpClick();
            }}
            textColor={COLORS.white}
            textSize={20}
          />

          <Text
            style={[
              {
                fontSize: 15,
                marginVertical: 25,
                fontFamily: FONTS.regular,
                textAlign: 'center',
                color: COLORS.grey,
              },
            ]}
            numberOfLines={2}>
            Already a user?{' '}
            <Text
              onPress={() => {
                navigation.goBack();
              }}
              style={[
                {
                  fontSize: 15,
                  marginTop: 15,
                  fontFamily: FONTS.medium,
                  textAlign: 'center',
                  color: COLORS.primary,
                },
              ]}
              numberOfLines={2}>
              Login
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Signup;

const styles = StyleSheet.create({
  loginLogo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 10,
  },
  welcomeBack: {
    fontSize: 22,
    fontFamily: FONTS.semi_bold,
    color: COLORS.black,
    marginTop: 25,
  },
  welcomeBelow: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.grey,
  },
  forgotPass: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: FONTS.regular,
  },
  orLogin: {
    fontSize: 15,
    marginTop: 15,
    fontFamily: FONTS.regular,
    textAlign: 'center',
  },
  socialBtnIcon: {
    height: 20,
    width: 20,
    resizeMode: 'center',
    alignSelf: 'center',
  },
  newUser: {
    fontSize: 15,
    marginVertical: 25,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    color: COLORS.primary,
  },
  signUp: {
    fontSize: 15,
    marginTop: 15,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    color: COLORS.secondary,
  },
});
