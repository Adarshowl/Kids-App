// VideoPlayerScreen.js

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Modal,
  ImageBackground,
  Animated

} from 'react-native';
import VideoPlayer from './VideoPlayer'; // Your custom video player component
import BottomSheet from 'react-native-simple-bottom-sheet';
import GlobalStyle from '../../styles/GlobalStyle';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import { COLORS, FONTS } from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import images from '../../constants/images';
import CustomModal from '../../global/CustomModal';
import { ShowToastMessage } from '../../utils/Utility';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';

const VideoPlayerCardio = ({ navigation }) => {
  const hdVideoSource = require('../../assets/video/workout_hd.mp4');
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [bottomSheet, setBottomSheet] = useState(false);




  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
    setBottomSheet(!bottomSheet);
  };


  const handleSheetClose = () => {
    setBottomSheetVisible(false);
    setBottomSheet(false);
  };

  const [modalVisibleWorkoutDone, setModalVisibleWorkoutDone] = useState(false);

  const toggleModalWorkoutDone = () => {
    setModalVisibleWorkoutDone(!modalVisibleWorkoutDone);
  };

  const handleWorkoutDonePress = () => {
    toggleModalWorkoutDone();
    handleSheetClose()
  };

  const [timerValue, setTimerValue] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
    setTimerValue(0);
  };

  useEffect(() => {
    let intervalId;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimerValue(prevValue => prevValue + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isTimerRunning]);
  return (
    <View style={{ flex: 1 }}>
      <VideoPlayer source={hdVideoSource} />

      <TouchableOpacity onPress={toggleBottomSheet}>
        <Text>Show Bottom Sheet</Text>
      </TouchableOpacity>

      <BottomSheet isVisible={!bottomSheetVisible} onClose={handleSheetClose}>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
              marginHorizontal: 10
            }}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjm_YL7BVSs5QCV5Z85ZO7s-1LYhznTphGg&usqp=CAU",
              }}
              style={{
                width: 80,
                height: 75,
                borderRadius: 10,
                // resizeMode: 'contain'
              }}
            />
            <View
              style={[
                GlobalStyle?.marginLeft15,
                GlobalStyle?.flexRowJustifyBtwn, {
                  flex: 1
                }
              ]}
            >
              <View>
                <Text
                  style={[
                    GlobalStyle?.fontSize18
                  ]}
                >Deadlift</Text>
                <Text
                  style={[
                    GlobalStyle?.fontSize13,
                    // GlobalStyle?.marginTop, 
                    {
                      fontSize: 16
                    }
                  ]}
                >Keep your head up</Text>

              </View>
              <TouchableOpacity
                onPress={() => {
                  setBottomSheet(bottomSheet);
                  // ShowToastMessage('hello')
                }}
              >
                <Text
                  style={[
                    GlobalStyle?.fontSize18,
                    GlobalStyle?.textUnderLine,
                  ]}
                >
                  Hide
                </Text>
              </TouchableOpacity>

            </View>
          </View>


          <View
            style={[
              GlobalStyle?.marginTop15,
              GlobalStyle?.marginHorizontal10, {
                marginTop: 20
              }
            ]}
          >
            <View
              style={[
                GlobalStyle?.flexRowJustifyBtwn,
                GlobalStyle?.marginVertical5,
                , {
                  flex: 1,
                }
              ]}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize16
                ]}
              >Set</Text>
              <Text
                style={[
                  GlobalStyle?.fontSize16
                ]}
              >2</Text>
            </View>

            <View
              style={[
                GlobalStyle?.flexRowJustifyBtwn,
                GlobalStyle?.marginVertical5,
                , {
                  flex: 1,
                }
              ]}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize16
                ]}
              >Reps</Text>
              <Text
                style={[
                  GlobalStyle?.fontSize16
                ]}
              >2</Text>
            </View>
            <View
              style={[
                GlobalStyle?.flexRowJustifyBtwn,
                GlobalStyle?.marginVertical5,
                , {
                  flex: 1,
                }
              ]}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize16
                ]}
              >Rest (Sec)</Text>
              <Text
                style={[
                  GlobalStyle?.fontSize16
                ]}
              >70</Text>
            </View>
            <View
              style={[
                GlobalStyle?.flexRowJustifyBtwn,
                GlobalStyle?.marginVertical5,
                , {
                  flex: 1,
                }
              ]}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize16
                ]}
              >%ORM</Text>
              <Text
                style={[
                  GlobalStyle?.fontSize16
                ]}
              >60</Text>
            </View>

            <View
              style={[
                GlobalStyle?.flexRowJustifyBtwn,
                GlobalStyle?.marginVertical5,
                , {
                  flex: 1,
                }
              ]}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize16
                ]}
              >Tempo</Text>
              <Text
                style={[
                  GlobalStyle?.fontSize16
                ]}
              >2-1-1-1</Text>
            </View>

          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              // justifyContent: 'space-between',
              flex: 1,
              marginBottom: 10,
              marginTop: 15
            }}
          >
            <KidsAppBorderWidthBtn
              height={40}
              width={120}
              borderRadius={30}
              // marginTop={20}
              textSize={15}
              iconPosition={'left'}
              icon={
                <MaterialIcons
                  name='arrow-back-ios-new'
                  color={COLORS?.grey}
                  size={18}
                  style={{
                    marginRight: 10
                  }}
                />
              }
              borderColor={COLORS?.customColor}
              textColor={COLORS?.grey}
              backgroundColor={COLORS?.lightest_gray}
              text={('Previews')}
              onPress={() => {
                navigation.navigate('Workout')
              }}
              // onPress={() => {
              //   // toggleBottomSheet()
              //   // toggleModal();
              // }}
              textStyle={{
                fontFamily: FONTS?.regular,
                // color: COLORS.colorPrimary,
              }}
            />
            <KidsAppCommBtn
              height={40}
              width={120}
              borderRadius={30}
              // marginTop={30}
              textSize={15}
              borderColor={COLORS?.customColor}
              textColor={COLORS?.white}
              text={('Next')}
              iconPosition={'right'}
              icon={
                <MaterialIcons
                  name='arrow-forward-ios'
                  color={COLORS?.white}
                  size={20}
                  style={[
                    GlobalStyle?.marginLeft

                  ]}
                />
              }
              onPress={() => {
                // navigation.navigate('NewPlan');
                toggleBottomSheet()
                toggleModalWorkoutDone();
              }}
              textStyle={{
                fontFamily: FONTS?.regular,
                color: COLORS.colorPrimary,
              }}
            />
          </View>
          <View
            style={[
              GlobalStyle?.marginBottom
            ]}
          />
        </View>

      </BottomSheet>



      <CustomModal
        visible={modalVisibleWorkoutDone}
        toggleModal={toggleModalWorkoutDone}
        // buttonText="Skip"
        onPressButton={handleWorkoutDonePress}
        customView={

          <View

            style={{
              alignItems: 'center',
              // padding: 20        
            }}
          >
            <Image
              source={images?.background}
              style={{
                width: '100%',
                height: 190,
                // resizeMode: 'contain',
                borderRadius: 20
              }}
            />
            <View
              style={{
                backgroundColor: COLORS?.white,
                borderRadius: 100,
                width: 120,
                height: 120,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -70,
                elevation: 5
              }}
            >
              <Image
                source={images?.success}
                style={{
                  width: 70,
                  height: 70
                }}
              />
            </View>

            <View
              style={{
                alignItems: 'center'
              }}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize28,
                  GlobalStyle?.marginTop15,
                  {
                    fontFamily: FONTS?.bold,

                  }
                ]}
              >Workout Done</Text>
              <Text
                style={[
                  GlobalStyle?.fontSize16,
                  GlobalStyle?.marginTop15, {
                    fontSize: 15,
                    fontFamily: FONTS?.light
                  }

                ]}
              >
                Keep Train Your Body

              </Text>
              <Text
                style={[
                  GlobalStyle?.fontSize16,
                  GlobalStyle?.marginTop5, {
                    fontSize: 15,
                    fontFamily: FONTS?.light
                  }
                ]}
              >
                with Bodyrecomp
              </Text>

              <TouchableOpacity
                onPress={() => {
                  handleWorkoutDonePress();
                  navigation.goBack('')
                }}
              >
                <Text
                  style={[
                    GlobalStyle?.fontSize18,
                    GlobalStyle?.textUnderLine,
                    GlobalStyle?.marginTop15,
                    GlobalStyle?.marginBottom
                  ]}
                >
                  GO BACK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }

      />
    </View>
  );
};

export default VideoPlayerCardio;
