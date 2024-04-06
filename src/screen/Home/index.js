import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Image,
  I18nManager,
  Modal

} from 'react-native';
import CustomHeader from '../../global/CustomHeader';
import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ToolBarIcon from '../../utils/ToolBarIcon';
import GlobalStyle from '../../styles/GlobalStyle';
import CommHeader from '../../global/CommHeader';
import images from '../../constants/images';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import icons from '../../constants/icons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import TabOfferScreen from '../Flash/TabOfferScreen';
import { HomeSkeleton } from '../../utils/Skeleton';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import { FlatList } from 'react-native';
import LogoutConfirmationModal from './LogoutConfirmationModal';


const Home = ({ }) => {
  const navigation = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogoutConfirm = () => {

    navigation.replace('Auth');
  };


  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };


  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const hideLogoutModal = () => {
    setLogoutModalVisible(false);
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  const options = [
    { id: 1, title: 'Parent Send Money' },
    { id: 2, title: 'New Task' },
  ];
  const handleItemPress = (item) => {
    if (item.title === 'Send Money') {
      navigation.navigate('SendMoneyScreen');
    } else if (item.title === 'New Task') {
      navigation.navigate('NewTaskScreen');
    }
  };
  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          GlobalStyle?.marginVertical10,

        ]}
      >
        <TouchableOpacity
          style={[
            GlobalStyle?.flexRowAlignCenter,
            {
              backgroundColor: COLORS?.lightest_gray1,
              borderRadius: 12,
              paddingVertical: 20,
              paddingHorizontal: 30
            }
          ]}
          onPress={() => handleItemPress(item)}>

          <Octicons
            name="dot-fill"
            size={22}
            color={COLORS.colorPrimary}
            style={{ marginRight: 5 }}
          />
          <Text style={[
            GlobalStyle?.fontSize16,
            GlobalStyle?.marginLeft20,

            {
              fontFamily: FONTS?.medium
            }
          ]}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    )
  };


  return (
    <SafeAreaView
      style={[
        GlobalStyle?.mainContainer, {
          // backgroundColor: COLORS?.dalColor
          backgroundColor: '#F6F6F6'
        }
      ]}
    >
      <View
        style={[
          GlobalStyle?.paddingHorizontal15,
          GlobalStyle?.paddingVertical15,
          {
            height: 100
          }
        ]}
      >
        <View style={[
          GlobalStyle?.paddingHorizontal5,
          GlobalStyle?.paddingVertical10,
          GlobalStyle?.flexRowJustifyBtwn,
          {
          }
        ]}>
          <View
            style={[
              GlobalStyle?.flexRowAlignCenter
            ]}
          >
            <Image
              source={images?.profile}
              style={{
                width: 60,
                height: 60,
                borderRadius: 50
              }}
            />
            <View
              style={[
                GlobalStyle?.marginLeft
              ]}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize18,

                ]}
              >Good Morning</Text>
              <Text
                style={[
                  GlobalStyle?.fontSize22, {
                    color: COLORS?.black,
                    fontFamily: FONTS?.semi_bold
                  }

                ]}>Hi, Ali</Text>
            </View>

          </View>

          <TouchableOpacity
            onPress={() => {
              toggleModal();
            }}
          >
            <Image
              source={images?.setting}
              style={{
                width: 40,
                height: 40
              }}
            // onPress={() => {
            //   navigation.openDrawer();
            // }}
            />
          </TouchableOpacity>
        </View>

      </View>


      <ScrollView
      >
        {isLoading ? (
          <HomeSkeleton
            style={{ width: 100, height: 20 }}
            shimmerStyle={{ backgroundColor: COLORS.light_gray }}
          />
        ) : (
          <>

            <View
              style={[
                GlobalStyle?.paddingHorizontal15,
                GlobalStyle?.marginTop15,
                {
                  // backgroundColor: '#F9F9F9'
                }
              ]}
            >

              <View
                style={{
                  flex: 1
                }}
              >
                <View
                  style={[
                    GlobalStyle?.flexRowJustifyBtwn,
                    {
                      // flex: 1
                    }
                    // GlobalStyle?.marginHorizontal10
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Spending')
                    }}
                    style={{
                      // flex: 1,
                      borderRadius: 12,
                      backgroundColor: COLORS?.white,
                      width: '48%',
                    }}
                  >
                    <View
                      style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.marginLeft
                      ]}
                    >
                      <Text
                        style={[
                          GlobalStyle?.fontSize16,
                          {
                            fontFamily: FONTS?.semi_bold
                          }
                        ]}>Spending</Text>
                      <Image
                        source={images?.spending}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 12
                        }}
                      />
                    </View>
                    <View
                      style={[
                        GlobalStyle?.paddingHorizontal10,
                        GlobalStyle?.paddingBottom
                      ]}
                    >
                      <View
                        style={[
                          GlobalStyle?.flexRowAlignCenter
                        ]}
                      >
                        <Text
                          style={[
                            GlobalStyle?.fontSize25,
                            {
                              fontFamily: FONTS?.semi_bold
                            }
                          ]}
                        >300.00</Text>
                        <Text
                          style={[
                            GlobalStyle?.fontSize16,
                            GlobalStyle?.marginLeft5,

                            {
                              color: COLORS?.green,
                              fontFamily: FONTS?.bold
                            }
                          ]}
                        >
                          AED
                        </Text>
                      </View>
                      <Text
                        style={[
                          GlobalStyle?.fontSize14,
                          GlobalStyle?.colorGray
                        ]}>manage controls</Text>
                    </View>

                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Saving')
                    }}
                    style={{
                      // flex: 1,
                      borderRadius: 12,
                      backgroundColor: COLORS?.white,
                      width: '48%',
                    }}
                  >
                    <View
                      style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.marginLeft
                      ]}
                    >
                      <Text
                        style={[
                          GlobalStyle?.fontSize16,
                          {
                            fontFamily: FONTS?.semi_bold
                          }
                        ]}>Saving</Text>
                      <Image
                        source={images?.saving}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 12
                        }}
                      />
                    </View>
                    <View
                      style={[
                        GlobalStyle?.paddingHorizontal10,
                        GlobalStyle?.paddingBottom
                      ]}
                    >
                      <View
                        style={[
                          GlobalStyle?.flexRowAlignCenter
                        ]}
                      >
                        <Text
                          style={[
                            GlobalStyle?.fontSize25,
                            {
                              fontFamily: FONTS?.semi_bold
                            }
                          ]}
                        >100.00</Text>
                        <Text
                          style={[
                            GlobalStyle?.fontSize16,
                            GlobalStyle?.marginLeft5,

                            {
                              color: COLORS?.green,
                              fontFamily: FONTS?.bold
                            }
                          ]}
                        >
                          AED
                        </Text>
                      </View>
                      <Text
                        style={[
                          GlobalStyle?.fontSize14,
                          GlobalStyle?.colorGray
                        ]}>Start saving</Text>
                    </View>

                  </TouchableOpacity>

                </View>
              </View>


              <View
                style={{
                  flex: 1
                }}
              >
                <View
                  style={[
                    GlobalStyle?.flexRowJustifyBtwn,
                    GlobalStyle?.marginTop15,
                    {
                    }
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Allowance')
                    }}
                    style={{
                      // flex: 1,
                      borderRadius: 12,
                      backgroundColor: COLORS?.white,
                      width: '48%',
                    }}
                  >
                    <View
                      style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.marginLeft
                      ]}
                    >
                      <Text
                        style={[
                          GlobalStyle?.fontSize16,
                          {
                            fontFamily: FONTS?.semi_bold
                          }
                        ]}>Allowance</Text>
                      <Image
                        source={images?.allowance}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 12
                        }}
                      />
                    </View>
                    <View
                      style={[
                        GlobalStyle?.paddingHorizontal10,
                        GlobalStyle?.paddingBottom
                      ]}
                    >
                      <View
                        style={[
                          GlobalStyle?.flexRowAlignCenter
                        ]}
                      >
                        <Text
                          style={[
                            GlobalStyle?.fontSize25,
                            {
                              fontFamily: FONTS?.semi_bold
                            }
                          ]}
                        >10.00</Text>
                        <Text
                          style={[
                            GlobalStyle?.fontSize16,
                            GlobalStyle?.marginLeft5,

                            {
                              color: COLORS?.green,
                              fontFamily: FONTS?.bold
                            }
                          ]}
                        >
                          AED
                        </Text>
                      </View>
                      <Text
                        style={[
                          GlobalStyle?.fontSize14,
                          GlobalStyle?.colorGray
                        ]}>Weakly on Mon</Text>
                    </View>

                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('School')
                    }}
                    style={{
                      // flex: 1,
                      borderRadius: 12,
                      backgroundColor: COLORS?.white,
                      width: '48%',
                    }}
                  >
                    <View
                      style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.marginLeft
                      ]}
                    >
                      <Text
                        style={[
                          GlobalStyle?.fontSize16,
                          {
                            fontFamily: FONTS?.semi_bold
                          }
                        ]}>School</Text>
                      <Image
                        source={images?.schoolHome}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 12
                        }}
                      />
                    </View>
                    <View
                      style={[
                        GlobalStyle?.paddingHorizontal10,
                        GlobalStyle?.paddingBottom
                      ]}
                    >
                      <KidsAppBorderWidthBtn
                        height={40}
                        width={'100%'}
                        borderRadius={25}
                        marginTop={12}
                        textSize={15}
                        borderColor={COLORS?.colorPrimary}
                        borderWidth={1}
                        textColor={COLORS?.colorPrimary}
                        text={('View activity')}
                        backgroundColor={COLORS?.white}
                        onPress={() => {
                          navigation.navigate('School')
                        }}
                        textStyle={{
                          fontFamily: FONTS?.medium,
                        }}
                      />
                    </View>

                  </TouchableOpacity>

                </View>
              </View>



              <View
                style={[
                  GlobalStyle?.marginTop30
                ]}
              >
                <KidsAppBorderWidthBtn
                  height={55}
                  width={'100%'}
                  borderRadius={15}
                  marginTop={12}
                  textSize={17}
                  borderColor={COLORS?.colorBtn}
                  borderWidth={1.2}
                  iconPosition={'left'}
                  icon={
                    <Image
                      source={images?.getPaid}
                      style={{
                        width: 25,
                        height: 25,
                        marginRight: 10
                      }}
                    />
                  }
                  textColor={COLORS?.colorBtn}
                  text={('Get paid by friends and family')}
                  onPress={() => {

                  }}
                  textStyle={{
                    fontFamily: FONTS?.medium,
                  }}
                />
              </View>


              <View
                style={[
                  GlobalStyle?.marginTop30
                ]}
              >
                <View
                  style={[
                    GlobalStyle?.flexRowAlignCenter,
                    {
                      // backgroundColor: COLORS?.white
                    }
                  ]}
                >
                  <Text
                    style={[
                      GlobalStyle?.fontSize18,
                      {
                        fontFamily: FONTS?.medium
                      }
                    ]}
                  >Upcoming Chores </Text>
                  <Image
                    source={icons?.arrow}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 30
                    }}
                  />
                </View>

                <TouchableOpacity
                  onPress={() => (
                    navigation.navigate('TaskHome')
                  )}
                >
                  <Image
                    source={images?.FrameHome}
                    style={{
                      width: '100%',
                      resizeMode: 'contain',
                      flex: 1,
                      height: 120
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('MyCard')
                  }}
                  style={[
                    GlobalStyle?.paddingHorizontal20,
                    GlobalStyle?.paddingVertical10,

                    GlobalStyle?.flexRowAlignCenter,
                    {
                      borderWidth: 0.5,
                      borderRadius: 15,
                      borderColor: COLORS?.gray,
                      paddingLeft: 30
                    }
                  ]}
                >
                  <Image
                    source={images?.vecterId}
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: 'contain'
                    }}
                  />
                  <View
                    style={[
                      GlobalStyle?.marginLeft
                    ]}
                  >
                    <Text
                      style={[
                        GlobalStyle?.fontSize18, {
                          fontFamily: FONTS?.medium
                        }
                      ]}
                    >Manage Ali’s Card</Text>
                    <Text
                      style={[
                        GlobalStyle?.fontSize14,
                        // GlobalStyle?.colorGray,
                      ]}>*** 2232 card is unlocked</Text>
                  </View>
                </TouchableOpacity>
              </View>


              <View
                style={[
                  GlobalStyle?.marginTop,
                  GlobalStyle?.flexRowJustifyBtwn,
                  {
                    // alignItems: 'flex-end',
                    // justifyContent: 'flex-end',

                  }
                ]}
              >
                <KidsAppBorderWidthBtn
                  height={55}
                  width={170}
                  borderRadius={15}
                  marginTop={12}
                  textSize={18}
                  textColor={COLORS?.colorBtn}
                  text={('Shop')}
                  borderWidth={1}
                  onPress={() => {
                    navigation.navigate('ShopNow')
                  }}
                  borderColor={COLORS?.colorBtn}
                  textStyle={{
                    fontFamily: FONTS?.medium,
                  }}
                />
                <KidsAppCommBtn
                  height={55}
                  width={170}
                  borderRadius={15}
                  marginTop={12}
                  textSize={17}
                  textColor={COLORS?.white}
                  text={('Request AED')}
                  onPress={() => {
                    navigation.navigate('RequestAed')
                  }}
                  textStyle={{
                    fontFamily: FONTS?.medium,
                  }}
                />
              </View>



              <View
                style={[
                  GlobalStyle?.marginTop30
                ]}
              >
                <TouchableOpacity
                  // Notification
                  onPress={() => {
                    navigation.navigate('Notification')
                  }}
                  style={[
                    GlobalStyle?.flexRowAlignCenter,
                    {
                      // backgroundColor: COLORS?.white
                    }
                  ]}
                >
                  <Text
                    style={[
                      GlobalStyle?.fontSize18,
                      {
                        fontFamily: FONTS?.medium
                      }
                    ]}
                  >Notifications (2/2)</Text>
                  <Image
                    source={icons?.arrow}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 30
                    }}
                  />
                </TouchableOpacity>

                <FlatList
                  data={options}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                />
              </View>
              <View
                style={[
                  GlobalStyle?.marginTop15
                ]}
              >
                <View
                  style={[
                    GlobalStyle?.flexRowJustifyBtwn, {
                      flex: 1,
                      marginTop: 20
                    }
                  ]}
                >

                  <Text
                    style={[
                      GlobalStyle?.fontSize18,
                      {
                        fontFamily: FONTS?.medium
                      }
                    ]}
                  >Transactions </Text>

                  {/* ChangePlan */}

                </View>
              </View>
              <TabOfferScreen />
            </View>
          </>
        )}
        <View
          style={[
            GlobalStyle?.marginVertical10
          ]}
        />
      </ScrollView>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          <View style={{
            backgroundColor: COLORS?.white,
            padding: 20,
            // marginHorizontal: 20,
            borderRadius: 10
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>

              {/* <ToolBarIcon
                title={MaterialIcons}
                iconName={'close'}
                icSize={18}
                icColor={COLORS?.white}
                style={{
                  // backgroundColor: theme?.colors?.colorPrimary,
                  borderRadius: 10,
                  backgroundColor: "#202020",

                  width: 28,
                  height: 28,
                  // marginTop: 3,
                }}
                onPress={toggleModal}
              /> */}

            </View>
            <ItemView
              title="My Profile"
              onPress={() => {
                navigation.navigate('EditProfile');
                toggleModal();
              }}
              icon={
                <Image
                  source={icons?.profile}
                  style={styles?.icon}
                />
              }
            />
            <ItemView
              title="Account security"
              onPress={() => {
                // navigation.navigate('Address');
              }}
              icon={
                <Image
                  source={icons?.security}
                  style={styles?.icon}
                />
              }
            />
            <ItemView
              title="Help Center"
              onPress={() => {
                // navigation.navigate('Address');
              }}
              icon={
                <Image
                  source={icons?.helpcenter}
                  style={styles?.icon}
                />
              }
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.itemWrapper}

              onPress={
                showLogoutModal}
            >
              <View
                style={[
                  styles.itemIcon,
                  {
                    marginEnd: 10,
                  },
                ]}>
                <Image
                  source={icons?.logout}
                  style={styles?.icon}
                />
              </View>
              <Text
                style={[
                  GlobalStyle.fontSize18,
                  {
                    // color: '#E35D5E',
                    color: COLORS?.red,
                    fontFamily: FONTS?.regular,
                  },

                ]}>
                Logout
                {/* {STRING.logout} */}
              </Text>
              <View
                style={{
                  flex: 1,
                }}
              />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <LogoutConfirmationModal
                visible={isLogoutModalVisible}
                onCancel={hideLogoutModal}
                onConfirm={handleLogoutConfirm}
              />
            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

export default Home;
const ItemView = ({ icon, title, onPress, show }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.itemWrapper}>
      <View
        style={[
          styles.itemIcon,
          {
            marginEnd: 10,
          },
        ]}>
        {icon}
      </View>

      <Text
        style={[
          GlobalStyle.fontSize18,
          {
            color: COLORS?.black,
            fontFamily: FONTS?.regular,

          },
        ]}>
        {title || 'Home'}
      </Text>

      <View
        style={{
          flex: 1,
        }}
      />
      {show ? null : (
        <View
          style={[
            styles.itemIcon,
            {
              marginStart: 10,
            },
          ]}>
          <Ionicons
            name={'chevron-forward'}
            size={18}
            color={COLORS?.black}
          // style={{ transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] }}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.black,
    elevation: 0,
  },
  backIcon: {
    marginStart: 10,
  },
  toolbar: {
    marginStart: 10,
    fontFamily: FONTS.bold,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  toolbarText: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 18,
    textAlign: 'center',
  },
  divLine: {
    borderWidth: 0.2,
    backgroundColor: COLORS.light_gray,
    marginBottom: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 30,
    marginBottom: 10,
    paddingVertical: 5,
  },
  itemIcon: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25
  }

});
