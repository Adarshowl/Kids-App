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

const VideoPlayerWorkout = ({ navigation }) => {
  const hdVideoSource = require('../../assets/video/workout_hd.mp4');
  const [bottomSheetVisible, setBottomSheetVisible] = useState(true);




  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  const handleSheetClose = () => {
    setBottomSheetVisible(false);
 };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleWorkoutDone, setModalVisibleWorkoutDone] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSkipPress = () => {
    toggleModal();
    toggleModalWorkoutDone();
  };

  const toggleModalWorkoutDone = () => {
    setModalVisibleWorkoutDone(!modalVisibleWorkoutDone);
  };

  const handleWorkoutDonePress = () => {
    toggleModalWorkoutDone();

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
                    GlobalStyle?.fontSize22
                  ]}
                >Push - up</Text>
                <Text
                  style={[
                    GlobalStyle?.fontSize13,
                    GlobalStyle?.marginTop, {
                      fontSize: 16
                    }
                  ]}
                >Keep your head up</Text>

              </View>
              <TouchableOpacity>
                <Text
                  style={[
                    GlobalStyle?.fontSize18,
                    GlobalStyle?.textUnderLine,
                  ]}
                >Hide</Text>
              </TouchableOpacity>
            </View>
          </View>


          <View
            style={[
              // GlobalStyle?.flexRowJustifyBtwn,
              , {
                marginTop: 30,
                // flexBasis: 1,
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between'
              }
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                ShowToastMessage('Previous video coming soon')
              }}
              style={[
                // GlobalStyle?.flexRowAlignCenter
                , {
                  flexDirection: 'row',
                  alignItems: 'center'
                }
              ]}
            >
              <MaterialIcons
                name='arrow-back-ios-new'
                color={COLORS?.black}
                size={25}
                style={{
                }}
              />
              <Text
                style={[
                  GlobalStyle?.fontSize16,
                  GlobalStyle?.marginLeft
                ]}
              >Previous</Text>
            </TouchableOpacity>


            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {/* Image */}
              <ImageBackground
                source={images?.circle}
                style={{
                  width: 90,
                  height: 90,
                  // alignSelf: 'center',
                  marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={[
                  GlobalStyle?.fontSize16,
                  {
                    fontFamily: FONTS?.medium,
                    textAlign: 'center'
                  }

                ]}>
                  {timerValue} sec
                </Text>
                <View style={{}}>
                  <TouchableOpacity
                    style={{ backgroundColor: COLORS.white, borderRadius: 5 }}
                    onPress={isTimerRunning ? stopTimer : startTimer}
                  >
                    <Text style={[
                      GlobalStyle?.fontSize16,
                      {
                        fontFamily: FONTS?.medium,
                        textAlign: 'center'
                      }

                    ]}>
                      {isTimerRunning ? 'Stop' : 'Start'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
            <TouchableOpacity
              onPress={() => {
                ShowToastMessage('Next video coming soon')
              }}
              style={[
                // GlobalStyle?.flexRowAlignCenter
                , {
                  flexDirection: 'row',
                  alignItems: 'center'
                }
              ]}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize16,
                ]}
              >Next</Text>
              <MaterialIcons
                name='arrow-forward-ios'
                color={COLORS?.black}
                size={25}
                style={[
                  GlobalStyle?.marginLeft

                ]}
              />
            </TouchableOpacity>

          </View>

          <KidsAppCommBtn
            height={55}
            width={'100%'}
            borderRadius={30}
            marginTop={30}
            textSize={17}
            borderColor={COLORS?.customColor}
            textColor={COLORS?.white}
            text={('Start')}
            onPress={() => {
              // navigation.navigate('NewPlan');
              toggleBottomSheet()
              toggleModal();
            }}
            textStyle={{
              fontFamily: FONTS?.semi_bold,
              color: COLORS.colorPrimary,
            }}
          />
          <View
            style={[
              GlobalStyle?.marginBottom
            ]}
          />
        </View>

      </BottomSheet>



      <CustomModal
        visible={modalVisible}
        toggleModal={toggleModal}
        buttonText="Skip"
        onPressButton={handleSkipPress}
        customView={

          <View
            style={[
              , {
                alignItems: 'center',
                padding: 20
              }
            ]}
          >
            <Text
              style={[
                GlobalStyle?.fontSize28
              ]}
            >
              Take Rest
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize30, {
                    fontSize: 45
                  }
                ]}
              >45</Text>
              <Text
                style={[
                  GlobalStyle?.fontSize28, {
                    fontSize: 25,
                    color: COLORS?.grey,
                    marginTop: 10,
                    marginLeft: 5
                  }
                ]}
              >Sec</Text>

            </View>
          </View>
        }

      />

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
                resizeMode: 'contain',
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
                  navigation.goBack('Workout')
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

export default VideoPlayerWorkout;
