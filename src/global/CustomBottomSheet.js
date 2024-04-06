// CustomBottomSheet.js

import React, { useState } from 'react';
import { Image, Modal, ScrollView } from 'react-native';
import {
  View, Text, TouchableOpacity,
  PermissionsAndroid,
  Platform,

} from 'react-native';
import { COLORS, FONTS } from '../constants';
import GlobalStyle from '../styles/GlobalStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import icons from '../constants/icons';
import ImagePicker from 'react-native-image-crop-picker';

import KidsAppEditText from '../utils/EditText/KidsAppEditText';
import BottomSheet from 'react-native-simple-bottom-sheet';
import KidsAppCommBtn from '../utils/KidsAppCommBtn';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const CustomBottomSheet = ({ isVisible, onClose, navigation }) => {

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedOptionlab11, setselectedOptionlab11] = useState('lab');
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [thumbImage, setThumbImage] = useState('');
  const [count, setCount] = useState(0);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };
  if (!isVisible) {
    return null;
  }


  const currentDate = new Date();

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setSelectedDate(date);
    hideDatePicker();
  };
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const openThumbImagePicker = () => {
    ImagePicker.openPicker({
      multiple: false,
      cropping: true,
      freeStyleCropEnabled: true,
      compressImageQuality: 0.4,
      forceJpg: true,
      includeBase64: true,
    }).then(images => {
      setThumbImage('data:image/jpeg;base64,' + images.data);
    });
    setCount(0);
    // setImageArray(imageArray);
    setCount(0);
  };

  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to storage for photos',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };
  return (
    <Modal
      isVisible={bottomSheetVisible}
      onBackdropPress={closeBottomSheet}
      transparent={true}

    >
      <View style={styles.modalContainer}>
        <View style={styles.container}>

          <View
            style={{
              width: 100,
              height: 7,
              backgroundColor: COLORS?.black,
              alignSelf: 'center',
              borderRadius: 5,
              marginVertical: 20,
              marginBottom: 30
            }}
          />
          <View style={[
            GlobalStyle?.flexRowJustifyBtwn,
            // GlobalStyle?.marginHorizontal10
          ]}>
            <Text
              style={[
                GlobalStyle?.fontSize22
              ]}
            >Add Weight</Text>

            <TouchableOpacity onPress={onClose}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10
                }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/1828/1828778.png"
                }} />
            </TouchableOpacity>

          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View
              style={[
                GlobalStyle?.marginTop15
              ]}
            >
              <Text
                style={[
                  GlobalStyle.fontSize28,
                  GlobalStyle.marginTop15,
                  GlobalStyle?.marginVertical15,
                  GlobalStyle?.marginTop15, {
                    fontSize: 22

                  }
                ]}
              >Upload Photo</Text>
              <TouchableOpacity
                onPress={() => {
                  if (isPermitted()) {
                    openThumbImagePicker();
                  }
                }}
                style={{
                  borderRadius: 15,
                  backgroundColor: COLORS?.light_gray

                }}
              >
                {thumbImage ? (
                  <Image
                    style={{
                      // flexGrow: 1,
                      width: 350,
                      height: 150,
                      borderRadius: 12,
                      borderWidth: 0.2,
                      // marginHorizontal: 20,

                      // marginTop: 15,
                      // borderWidth: 0.2,
                      // borderColor: 'grey',
                      // resizeMode:'contain'
                    }}
                    source={{
                      uri: thumbImage?.startsWith('data')
                        ? thumbImage
                        : thumbImage,
                    }}
                  />
                ) : (
                  <View
                    style={{
                      // flex:1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 2,
                      borderColor: COLORS?.customColor,
                      paddingVertical: 30,
                      // marginTop: 20,

                      borderRadius: 15,
                      borderStyle: 'dashed',
                      opacity: 6,
                      backgroundColor: COLORS?.light_gray

                    }}
                  >
                    <Image
                      source={icons?.uploadPhoto}
                      style={{
                        width: 50,
                        height: 50,
                      }}
                    />
                    <Text
                      style={[
                        GlobalStyle?.fontSize13,
                        GlobalStyle?.marginTop,
                        GlobalStyle?.colorBlack, {
                          fontFamily: FONTS?.regular
                        }
                      ]}
                    >
                      Upload photo here
                    </Text>
                  </View>

                )}

              </TouchableOpacity>


              <Text
                style={[
                  GlobalStyle.fontSize28,
                  GlobalStyle.marginTop15,
                  GlobalStyle?.marginVertical15,
                  GlobalStyle?.marginTop15, {
                    fontSize: 22,
                    marginTop: 20
                  }

                ]}
              >What current weight?</Text>
              <View
                style={[
                  GlobalStyle?.flexAlignJustifyCenter,
                  GlobalStyle?.paddingVertical15,
                  // GlobalStyle?.borderRadius
                  , {
                    borderWidth: 0.2,
                    // flex:1,
                    // paddingVertical: 50,
                    // height:70,
                    marginBottom: 10,
                    borderRadius: 5
                  }]}
              >

                <View
                  style={[
                    GlobalStyle?.flexRowJustifyBtwn
                  ]}
                >
                  <Text
                    style={[
                      GlobalStyle?.fontSize28,
                      {
                        fontSize: 30
                      }
                    ]}
                  >88</Text>
                  <View
                    style={[
                      GlobalStyle?.marginHorizontal15,
                      GlobalStyle?.borderRadius
                      , {
                        borderColor: COLORS?.gray,
                        height: 40,
                      }]}
                  />
                  <Text
                    style={[
                      GlobalStyle?.fontSize14TextGray,
                      GlobalStyle?.colorBlack,
                      {
                        marginTop: 10,
                        fontSize: 16

                      }
                    ]}
                  >kg</Text>

                </View>
              </View>


              <View style={styles.container1}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      selectedOptionlab11 === 'lab' && styles.selectedButton
                    ]}
                    onPress={() => setselectedOptionlab11('lab')}
                  >
                    <Text style={styles.buttonText}>lbs</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.button,
                      selectedOptionlab11 === 'kg' && styles.selectedButton
                    ]}
                    onPress={() => setselectedOptionlab11('kg')}
                  >
                    <Text style={styles.buttonText}>k.g</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <KidsAppEditText
                // placeholder="03/10/2024"

                value={
                  selectedDate || currentDate ? (selectedDate || currentDate).toLocaleDateString() : ''
                }
                iconPosition={'right'}
                icon={
                  <TouchableOpacity onPress={showDatePicker}>

                    <Image
                      source={icons?.calender}
                      style={{
                        width: 20,
                        height: 20
                      }}
                    />
                  </TouchableOpacity>
                }
                editable={false}
                style={{
                  alignItems: 'center'
                }}
                keyBoardType={'email-address'}
              // onChangeText={v => setEmail(v)}
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                minimumDate={currentDate}
                onCancel={hideDatePicker}
              />
            </View>
            <View style={[
              GlobalStyle?.marginTop15
            ]}>
              <KidsAppCommBtn
                height={55}
                width={'100%'}
                borderRadius={30}
                marginTop={30}
                textSize={17}
                borderColor={COLORS?.gray}

                textColor={COLORS?.white}
                text={('Save')}
                backgroundColor={COLORS?.white}
                onPress={() => {
                  // navigation.navigate('ChoosePlan');
                  onClose();
                }}
                textStyle={{
                  fontFamily: FONTS?.semi_bold,
                  color: COLORS.colorPrimary,
                }}
              />
            </View>
          </ScrollView>
          <View
            style={{
              flex: 1,
              // marginBottom: 10
            }}
          >

          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS?.white,
    // padding: 20,
    // borderRadius:20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 40,
    paddingHorizontal: 20

    // Add more styles as needed
  },
  container1: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    // backgroundColor: COLORS?.light_gray,
    borderRadius: 30,
    backgroundColor: "#E7E7E7",

    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 15
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    // borderWidth: 2,
    // marginRight: 10,
    borderRadius: 15,
  },
  selectedButton: {
    // borderColor: 'blue',
    backgroundColor: COLORS?.white
  },
  buttonText: {
    fontSize: 18,
    color: COLORS?.black
  },
  cmView: {
    backgroundColor: 'lightblue', // Example color for CM related view
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  fitView: {
    backgroundColor: 'lightgreen', // Example color for FIT related view
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
  },
};

export default CustomBottomSheet;
