import React, { useState, useRef, useEffect } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
    Image

} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import icons from '../../constants/icons';
import ToolBarIcon from '../../utils/ToolBarIcon';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from '../../global/Header';
import Entypo from 'react-native-vector-icons/Entypo'
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import CustomButtomModal from '../../global/CustomButtomModal';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import { AllowanceView } from '../../utils/Skeleton';


const School = ({ navigation }) => {



    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1NewCycle, setModalVisibleNewCycle] = useState(false);
    const [istransaction, settransaction] = useState(false);
    const [isSwitchnotification, setIsnotification] = useState(false);
    const [isSwitchlowLimit, setIslowLimit] = useState(false);

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const toggleSwitchnotification = () => {
        setIsnotification(!isSwitchnotification);
    };
    const toggleSwitchtransaction = () => {
        settransaction(!istransaction);
    };
    const toggleSwitchlowLimit = () => {
        setIslowLimit(!isSwitchlowLimit);
    };
    const handlePress = () => {
        toggleModal();
    };


    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                // GlobalStyle?.paddingHorizontal10,
                {
                }
            ]}
        >


            <Header
                title="School"
            // onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[
                    GlobalStyle?.paddingHorizontal10,
                ]}
            >
                {isLoading ? (
                    <AllowanceView
                        style={{ width: 100, height: 20 }}
                        shimmerStyle={{ backgroundColor: COLORS.light_gray }}
                    />
                ) : (
                    <>

                        <View
                            style={[
                                GlobalStyle?.paddingHorizontal10,
                                GlobalStyle?.marginTop15
                            ]}
                        >

                            <Text
                                style={[
                                    GlobalStyle?.fontSize20, {
                                        fontFamily: FONTS?.medium,
                                        marginTop: 15
                                    }
                                ]}
                            >School Spending Limits</Text>

                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    GlobalStyle?.marginTop,
                                    GlobalStyle?.colorGray,

                                    {
                                        fontFamily: FONTS?.regular
                                    }

                                ]}
                            >Enable daily, Weekly, or monthly limits to enforce healthy spending habits.</Text>


                            <View
                                style={[
                                    GlobalStyle?.marginTop15,
                                    GlobalStyle?.commaonBorder,
                                    {
                                        flex: 1,
                                    }
                                ]}
                            >
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[
                                        GlobalStyle?.flexRowJustifyBtwn,
                                        GlobalStyle?.marginVertical15,
                                    ]}
                                >
                                    <View
                                        style={[
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize20,
                                                {
                                                    fontFamily: FONTS?.semi_bold
                                                }

                                            ]}
                                        >Daily</Text>
                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize14,
                                                {
                                                    fontFamily: FONTS?.light
                                                }
                                            ]}
                                        >Resets every midnight</Text>
                                    </View>

                                    <View
                                        style={[, {
                                            borderRadius: 10,
                                            borderWidth: 1,
                                            flexDirection: 'row',
                                            width: '35%',
                                            paddingHorizontal: 14,
                                            paddingVertical: 10,
                                            backgroundColor: COLORS?.light_green,
                                            borderColor: COLORS?.colorPrimary
                                        }]}
                                    >
                                        <View
                                            style={[
                                                GlobalStyle?.flexRowAlignCenter
                                            ]}
                                        >
                                            <Text
                                                style={[
                                                    GlobalStyle?.fontSize15, {
                                                        fontFamily: FONTS?.medium
                                                    }
                                                ]}
                                            >200</Text>
                                            <Text
                                                style={[
                                                    GlobalStyle?.fontSize13, {
                                                        color: COLORS?.green,
                                                        fontFamily: FONTS?.semi_bold,
                                                        fontSize: 11,
                                                        marginTop: 3
                                                    }
                                                ]}
                                            >AED</Text>
                                        </View>
                                        <EvilIcons
                                            name="close"
                                            size={25}
                                            color={COLORS?.black}
                                        />
                                    </View>

                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[
                                        GlobalStyle?.flexRowJustifyBtwn,
                                        GlobalStyle?.marginVertical15,
                                    ]}
                                >
                                    <View
                                        style={[
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize20,
                                                {
                                                    fontFamily: FONTS?.semi_bold
                                                }

                                            ]}
                                        >Weekly</Text>
                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize14,
                                                {
                                                    fontFamily: FONTS?.light
                                                }
                                            ]}
                                        >Resets every Sunday</Text>
                                    </View>


                                    <Image
                                        source={icons?.crossIcon}
                                        style={{
                                            width: 35,
                                            height: 35,
                                            resizeMode: 'contain'
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[
                                        GlobalStyle?.flexRowJustifyBtwn,
                                        GlobalStyle?.marginVertical15,
                                    ]}
                                >
                                    <View
                                        style={[
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize20,
                                                GlobalStyle?.fontSize18,

                                                {
                                                    fontFamily: FONTS?.semi_bold
                                                }

                                            ]}
                                        >Monthly</Text>
                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize14,
                                                {
                                                    fontFamily: FONTS?.light
                                                }
                                            ]}
                                        >Resets every month</Text>
                                    </View>


                                    <Image
                                        source={icons?.crossIcon}
                                        style={{
                                            width: 35,
                                            height: 35,
                                            resizeMode: 'contain'

                                        }}
                                    />
                                </TouchableOpacity>
                            </View>


                            <Text
                                style={[
                                    GlobalStyle?.fontSize20, {
                                        fontFamily: FONTS?.medium,
                                        marginTop: 15
                                    }
                                ]}
                            >Allergens</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    GlobalStyle?.marginTop,
                                    GlobalStyle?.colorGray,

                                    {
                                        fontFamily: FONTS?.regular
                                    }

                                ]}>
                                By adding allergens, this family member will not be able to purchase anything marked by a vendor containing them.
                            </Text>

                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('AddItem')
                                }}
                            >

                                <View
                                    style={[
                                        GlobalStyle?.commaonBorder, {
                                            borderColor: COLORS?.colorBtn,
                                            borderWidth: 1,
                                            alignItems: 'center',
                                            paddingVertical: 40
                                        }
                                    ]}
                                >
                                    <MaterialIcons
                                        name="add"
                                        size={40}
                                        color={COLORS?.colorBtn}
                                        style={{}}
                                    />
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize18,
                                            GlobalStyle?.marginTop5, {
                                                color: COLORS?.colorBtn,
                                                fontFamily: FONTS?.medium
                                            }
                                        ]}
                                    >Add Item</Text>
                                </View>
                            </TouchableOpacity>


                            <Text
                                style={[
                                    GlobalStyle?.fontSize20, {
                                        fontFamily: FONTS?.medium,
                                        marginTop: 15
                                    }
                                ]}
                            >Restricted Products</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    GlobalStyle?.marginTop,
                                    GlobalStyle?.colorGray,

                                    {
                                        fontFamily: FONTS?.regular
                                    }

                                ]}>
                                By adding restriction, this family member will not be able to purchase anything by marked.
                            </Text>

                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('ManageRestrictions')
                                }}
                                style={[
                                    GlobalStyle?.commaonBorder,
                                    GlobalStyle?.flexRowJustifyBtwn,
                                    {
                                        flex: 1,
                                        backgroundColor: COLORS?.light_green,
                                        borderColor: COLORS?.colorBtn,
                                        borderWidth: 1,
                                        paddingVertical: 25
                                    }
                                ]}
                            >

                                <Text
                                    style={[
                                        GlobalStyle?.fontSize18,
                                        {
                                            fontFamily: FONTS?.medium,
                                            color: COLORS?.colorBtn
                                        }
                                    ]}
                                >Manage Restrictions</Text>

                                <AntDesign
                                    name="right"
                                    size={25}
                                    color={COLORS?.colorBtn}
                                />

                            </TouchableOpacity>
                            <View
                                style={[
                                    GlobalStyle?.flexRowJustifyBtwn,
                                    GlobalStyle?.marginTop15,
                                    GlobalStyle?.marginBottom, {
                                    }
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize20, {
                                            fontFamily: FONTS?.medium,
                                        }
                                    ]}
                                >Digital IDs</Text>
                                <Entypo
                                    name="dots-three-vertical"
                                    size={20}
                                    color={COLORS?.black}
                                />
                            </View>

                            <View
                                style={[
                                    GlobalStyle?.commaonBorder,
                                    {
                                        flex: 1,
                                        backgroundColor: COLORS?.li_gray,
                                        borderWidth: 0,
                                        paddingHorizontal: 8
                                    }
                                ]}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        toggleModal();
                                    }}
                                    style={[
                                        GlobalStyle?.commaonBorder,
                                        GlobalStyle?.flexRowJustifyBtwn,
                                        {
                                            flex: 1,
                                            borderColor: COLORS?.colorBtn,
                                            borderWidth: 1,
                                            backgroundColor: COLORS?.white
                                            // paddingVertical: 25
                                        }
                                    ]}
                                >
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize16,
                                            {
                                                fontFamily: FONTS?.medium,
                                                color: COLORS?.colorBtn
                                            }
                                        ]}
                                    >Synchronize school ID</Text>

                                    <AntDesign
                                        name="right"
                                        size={22}
                                        color={COLORS?.colorBtn}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('CanteenScanId')
                                    }}
                                    // CanteenScanId
                                    style={[
                                        GlobalStyle?.commaonBorder,
                                        GlobalStyle?.flexRowJustifyBtwn,
                                        {
                                            flex: 1,
                                            borderColor: COLORS?.colorBtn,
                                            borderWidth: 1,
                                            backgroundColor: COLORS?.white
                                            // paddingVertical: 25
                                        }
                                    ]}
                                >
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize16,
                                            {
                                                fontFamily: FONTS?.medium,
                                                color: COLORS?.colorBtn
                                            }
                                        ]}
                                    >Synchronize your wearable</Text>

                                    <AntDesign
                                        name="right"
                                        size={22}
                                        color={COLORS?.colorBtn}
                                    />
                                </TouchableOpacity>
                            </View>

                            <Text
                                style={[
                                    GlobalStyle?.fontSize20, {
                                        fontFamily: FONTS?.medium,
                                        marginTop: 15
                                    }
                                ]}
                            >Notification</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    GlobalStyle?.marginTop,
                                    GlobalStyle?.colorGray,

                                    {
                                        fontFamily: FONTS?.regular
                                    }

                                ]}>
                                Enable or disable notifications for your children.
                            </Text>

                            <View
                                style={[
                                    GlobalStyle?.marginTop15
                                ]}
                            >
                                <TouchableOpacity
                                    onPress={() => (
                                        navigation.navigate('')
                                    )}
                                    style={[
                                        GlobalStyle?.commaonBorder,
                                        , {
                                            flex: 1,
                                            width: '100%',
                                            marginHorizontal: 0,
                                            backgroundColor: COLORS?.white,
                                        }]}
                                >
                                    <View
                                        style={[
                                            // GlobalStyle?.marginHorizontal5,
                                            // GlobalStyle?.marginLeft15,
                                            {
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                            }
                                        ]}>
                                        <View
                                            style={{
                                                flex: 1
                                            }}
                                        >
                                            <Text
                                                style={[
                                                    GlobalStyle?.fontSize18,
                                                    GlobalStyle?.marginTop5,

                                                    {
                                                        fontFamily: FONTS?.medium
                                                    }
                                                ]}>Basic Notifications</Text>
                                            <Text
                                                numberOfLines={2}
                                                style={[
                                                    GlobalStyle?.fontSize13,
                                                    GlobalStyle?.marginTop5,
                                                    GlobalStyle?.colorGray,
                                                    {
                                                        fontFamily: FONTS?.light
                                                    }
                                                ]}>Notifications for every failed transaction, limit warnings, attendance alert, and more</Text>
                                        </View>

                                        <TouchableOpacity onPress={toggleSwitchnotification} style={{
                                            alignSelf: 'center',

                                        }}>
                                            <Image
                                                source={isSwitchnotification ? icons.switchOff : icons.switchOn}
                                                style={styles.switchIcon}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={() => (
                                        navigation.navigate('')
                                    )}
                                    style={[
                                        GlobalStyle?.commaonBorder,
                                        , {
                                            flex: 1,
                                            width: '100%',
                                            marginHorizontal: 0,
                                            backgroundColor: COLORS?.white,
                                        }]}
                                >
                                    <View
                                        style={[
                                            // GlobalStyle?.marginHorizontal5,
                                            // GlobalStyle?.marginLeft15,
                                            {
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                            }
                                        ]}>
                                        <View
                                            style={{
                                                flex: 1
                                            }}
                                        >
                                            <Text
                                                style={[
                                                    GlobalStyle?.fontSize18,
                                                    GlobalStyle?.marginTop5,

                                                    {
                                                        fontFamily: FONTS?.medium
                                                    }
                                                ]}>Every Transaction</Text>
                                            <Text
                                                numberOfLines={2}
                                                style={[
                                                    GlobalStyle?.fontSize13,
                                                    GlobalStyle?.marginTop5,
                                                    GlobalStyle?.colorGray,
                                                    {
                                                        fontFamily: FONTS?.light
                                                    }
                                                ]}>Notification for every transaction.</Text>
                                        </View>

                                        <TouchableOpacity onPress={toggleSwitchtransaction} style={{
                                            alignSelf: 'center',

                                        }}>
                                            <Image
                                                source={istransaction ? icons.switchOff : icons.switchOn}
                                                style={styles.switchIcon}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => (
                                        navigation.navigate('')
                                    )}
                                    style={[
                                        GlobalStyle?.commaonBorder,
                                        , {
                                            flex: 1,
                                            width: '100%',
                                            marginHorizontal: 0,
                                            backgroundColor: COLORS?.white,
                                        }]}
                                >
                                    <View
                                        style={[
                                            // GlobalStyle?.marginHorizontal5,
                                            // GlobalStyle?.marginLeft15,
                                            {
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                            }
                                        ]}>
                                        <View
                                            style={{
                                                flex: 1
                                            }}
                                        >
                                            <Text
                                                style={[
                                                    GlobalStyle?.fontSize18,
                                                    // GlobalStyle?.marginTop5,
                                                    {
                                                        fontFamily: FONTS?.medium
                                                    }
                                                ]}>Low Limit</Text>
                                            <Text
                                                numberOfLines={2}
                                                style={[
                                                    GlobalStyle?.fontSize13,
                                                    GlobalStyle?.marginTop5,
                                                    GlobalStyle?.colorGray,
                                                    {
                                                        fontFamily: FONTS?.light
                                                    }
                                                ]}>Notification when this family member’s limits are running low</Text>
                                        </View>

                                        <TouchableOpacity onPress={toggleSwitchlowLimit} style={{
                                            alignSelf: 'center',

                                        }}>
                                            <Image
                                                source={isSwitchlowLimit ? icons.switchOff : icons.switchOn}
                                                style={styles.switchIcon}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>


                            </View>

                        </View>

                        <View
                            style={[
                                GlobalStyle?.paddingHorizontal10
                            ]}
                        >
                            <KidsAppBorderWidthBtn
                                height={55}
                                width={'100%'}
                                borderRadius={15}
                                marginTop={40}
                                textSize={18}
                                borderWidth={1}
                                textColor={COLORS?.white}
                                text={('Save')}
                                backgroundColor={"#333333"}
                                onPress={() => {
                                    navigation.navigate('SchoolCategory')
                                }}
                                textStyle={{
                                    fontFamily: FONTS?.medium,
                                }}
                            />
                        </View>

                        <View
                            style={{
                                marginBottom: 30,
                                flex: 1
                            }}
                        />

                        <CustomButtomModal
                            visible={modalVisible}
                            toggleModal={toggleModal}
                            // buttonText="Save"
                            customView={

                                <View
                                    activeOpacity={0.8}
                                    // onPress={handlePress}
                                    style={[
                                        , {
                                            padding: 20
                                        }
                                    ]}
                                >

                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize22,
                                            {
                                                fontFamily: FONTS?.medium,
                                                marginTop: 20,
                                                marginBottom: 25
                                            }
                                        ]}
                                    >
                                        School Setting
                                    </Text>
                                    <KidsAppEditText
                                        placeholder="School Name"
                                    // label="My goal is"
                                    // value={email}

                                    // keyBoardType={'number-pad'}
                                    // onChangeText={v => setEmail(v)}
                                    />

                                    <View
                                        style={[
                                            // GlobalStyle?.flexRowJustifyBtwn,
                                            {
                                                flexDirection: 'row',
                                                justifyContent: 'space-between'
                                            }
                                        ]}
                                    >
                                        <KidsAppEditText
                                            placeholder="Class Grade"
                                            // label="Saving"
                                            // value={email}
                                            style={{
                                                width: 150
                                            }}

                                        // keyBoardType={'email-address'}
                                        // onChangeText={v => setEmail(v)}
                                        />
                                        <KidsAppEditText
                                            placeholder="School ID"
                                            // label="Saving"
                                            // value={email}
                                            style={{
                                                width: 150
                                            }}
                                        // keyBoardType={'email-address'}
                                        // onChangeText={v => setEmail(v)}
                                        />
                                    </View>

                                    <KidsAppBorderWidthBtn
                                        height={55}
                                        width={'100%'}
                                        borderRadius={15}
                                        marginTop={20}
                                        textSize={18}
                                        borderColor={COLORS?.colorBtn}
                                        borderWidth={1}
                                        textColor={COLORS?.white}
                                        text={('Submit')}
                                        backgroundColor={COLORS?.colorBtn}
                                        onPress={() => {
                                            toggleModal();
                                        }}
                                        textStyle={{
                                            fontFamily: FONTS?.medium,
                                        }}
                                    />
                                </View>
                            }

                        />
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default School;
const styles = StyleSheet.create({
    switchIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 10
    },
});