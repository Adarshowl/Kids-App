import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyle from '../../../styles/GlobalStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, FONTS, STRING } from '../../../constants';
import Octicons from 'react-native-vector-icons/Octicons';

import { useDispatch } from 'react-redux';
import icons from '../../../constants/icons';
import KidsAppEditText from '../../../utils/EditText/KidsAppEditText';
import KidsAppCommBtn from '../../../utils/KidsAppCommBtn';
import LoginHeader from '../../../global/LoginHeader';
import KidsAppBorderWidthBtn from '../../../utils/KidsAppBorderWidthBtn';
import { ShowToastMessage } from '../../../utils/Utility';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(true);
  const dispatch = useDispatch();

  const [checkbox, setCheckbox] = useState(false);
  return (
    <SafeAreaView
      style={[GlobalStyle.mainContainer,
        // GlobalStyle.paddingHorizontal5
      ]}>
      <LoginHeader />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={GlobalStyle.paddingHorizontal15}>

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
            Sign In to Continue
          </Text>
          <KidsAppEditText
            placeholder="Email / Number"
            // label={STRING.email}
            value={email}

            keyBoardType={'email-address'}
            onChangeText={v => setEmail(v)}
          />
          <KidsAppEditText
            placeholder="Enter password"
            // label={STRING.password}
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
          <View
            style={[
              GlobalStyle?.flexRowJustifyBtwn,
              GlobalStyle?.marginTop15
            ]}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setCheckbox(!checkbox)}
              style={[
                GlobalStyle.flexRowAlignCenter,
                {
                  // marginTop: 15,
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
                  GlobalStyle?.fontSize15,
                  GlobalStyle?.colorGray

                ]}
                numberOfLines={2}>
                Remember me
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPassword')
              }}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize15,
                  GlobalStyle?.colorGray,
                  GlobalStyle?.textUnderLine,
                ]}
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}>
                Forgot Password
              </Text>

            </TouchableOpacity>
          </View>
          <View
            style={{
              marginHorizontal: 5,
              flex: 1,
              marginTop: 30
            }}
          >
            <KidsAppCommBtn
              height={50}
              borderRadius={15}
              width={'100%'}
              // marginHorizontal={5}
              marginTop={15}
              text="Sign In"
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




          <KidsAppBorderWidthBtn
            height={55}
            width={'100%'}
            borderRadius={30}
            borderWidth={0.5}
            borderColor={COLORS?.gray}
            marginTop={30}
            textSize={14}
            iconPosition={'left'}
            icon={
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/281/281764.png'
                }}
                style={{
                  width: 23,
                  height: 23,
                  marginRight: 20
                }}
              />
            }
            textColor={COLORS?.black}
            text={('SIGN IN WITH GOOGLE')}
            backgroundColor={COLORS?.white}
            onPress={() => {
              ShowToastMessage('Comming Soon!')

            }}
            textStyle={{
              fontFamily: FONTS?.light,
            }}
          />
          <Text style={[
            GlobalStyle?.fontSize13,
            GlobalStyle?.marginTop15,
            {
              textAlign: 'center',
              marginTop: 25,
              color:COLORS?.grey
            }
          ]} numberOfLines={2}>
            You Don't have an account yet?{' '}

            <Text
              onPress={() => {
                navigation.navigate('Onboarding');
              }}
              style={[
                GlobalStyle?.fontSize15,
                {
                  fontFamily: FONTS?.semi_bold,
                  color: COLORS?.colorBtn
                }
              ]}
              numberOfLines={2}>
              Sign up
            </Text>
          </Text>

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
export default Login;

const styles = StyleSheet.create({
});