import React, { useContext, useRef, useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  I18nManager,
  ScrollView
} from 'react-native';
import { FONTS } from '../../../constants/Fonts';

import { STRING, images } from '../../../constants';
import { COLORS } from '../../../constants/Colors';
import GlobalStyle from '../../../styles/GlobalStyle';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import KidsAppEditText from '../../../utils/EditText/KidsAppEditText';
import KidsAppCommBtn from '../../../utils/KidsAppCommBtn';
import LoginHeader from '../../../global/LoginHeader';

const ForgotPassword = ({ navigation }) => {

  const [email, setEmail] = useState('');


  const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
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

        style={[
          GlobalStyle?.marginHorizontal10,
          GlobalStyle?.marginTop15,
          {
          },
        ]}
      >
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
            Forgot password?

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
            Fill in your email and we’ll send a
            code to reset your password.
          </Text>

        </View>


        <View
          style={[
            GlobalStyle.marginTop15,
            GlobalStyle?.marginHorizontal10,
            {

            },
          ]}>

          <KidsAppEditText
            placeholder="parentinfo@gmail.com"
            // iconPosition={'left'}
            style={{
              color: COLORS?.black,
            }}
            value={email}
            // icon={
            //   <Fontisto name={"email"} size={20}
            //     color={COLORS?.black}
            //     style={{
            //     }} />
            // }
            keyBoardType={'email-address'}
            onChangeText={v => setEmail(v)}
          />

          <KidsAppCommBtn
            height={55}
            width={'100%'}
            borderRadius={15}
            textSize={16}
            fontWeight={'bold'}
            marginTop={'15%'}
            // marginTop={'80%'}

            text={"Submit"}
            textColor={COLORS?.white}
            onPress={() => {
              navigation.navigate('OtpScreen');
            }}
            textStyle={{
              fontFamily: FONTS?.semi_bold

            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({

});
