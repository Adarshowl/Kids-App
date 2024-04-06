import React, { useEffect } from 'react';
import { Image, Platform, View } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import images from '../../../constants/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { fetchProjectExist, fetchUserData } from '../../../redux/actions';
// import messaging from '@react-native-firebase/messaging';
import { API_END_POINTS, API_TYPE } from '../../../network/ApiEndPoints';
import ApiCall from '../../../network/ApiCall';
import { requestMultiplePermissionsAndroid } from '../../../utils/RequestUserPermission';

const Splash = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(async () => {
      // navigation.replace('Login');
      // navigation.navigate('OnBoarding', {data: {}});

      if (Platform.OS == 'android') {
        await requestMultiplePermissionsAndroid();
      }
      await getUserFromStorage();
    }, 3000);
  }, []);



  const getUserFromStorage = async () => {
    try {
      await AsyncStorage.getItem('userData', async (error, value) => {
        if (error) {
        } else {
          if (value !== null) {
            // dispatch(fetchUserData(JSON.parse(value)));
            await getUserProfile(JSON.parse(value)?.id);
            navigation.navigate('Welcome');
          } else {
            navigation.navigate('Welcome');
            // navigation.replace('MainContainer');
            // Onboarding
          }
        }
      });
    } catch (err) {
      console.log('ERROR IN GETTING USER FROM STORAGE');
    }
  };



  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.transparent,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{
          height: SIZES.height,
          width: SIZES.width,
          alignSelf: 'center',
        }}
        source={images.splash}
      />
    </View>
  );
};
export default Splash;
