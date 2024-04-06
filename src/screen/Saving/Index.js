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
import Entypo from 'react-native-vector-icons/Entypo'
import Header from '../../global/Header';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import CustomButtomModal from '../../global/CustomButtomModal';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import { AllowanceView } from '../../utils/Skeleton';


const Saving = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1NewCycle, setModalVisibleNewCycle] = useState(false);
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

    const handlePress = () => {
        toggleModal();
    };
    const toggleModalNewCycle = () => {
        setModalVisibleNewCycle(!modalVisible1NewCycle);
    };

    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                {
                    // backgroundColor: "#FAFAFA"
                }
            ]}
        >
            <Header
                title="Saving"
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
                            <View
                                style={[
                                    // GlobalStyle?.flexRowJustifyBtwn,
                                    GlobalStyle?.commaonBorder,
                                    {
                                        flex: 1,

                                    }
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize22,
                                        {
                                            fontFamily: FONTS?.regular
                                        }

                                    ]}
                                >Saving</Text>

                                <View
                                    style={[
                                        GlobalStyle?.flexRowJustifyBtwn,
                                        {
                                            flex: 1,
                                        }
                                    ]}
                                >
                                    <View
                                        style={[
                                            // GlobalStyle?.flexRowAlignCenter,
                                            {
                                                // flex:1,
                                                alignItems: 'center',
                                                flexDirection: 'row',
                                            }
                                        ]}
                                    >

                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize25,
                                                {
                                                    fontFamily: FONTS?.bold
                                                }

                                            ]}
                                        >500</Text>
                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize18,
                                                GlobalStyle?.marginLeft5,
                                                {
                                                    color: COLORS?.green,
                                                    fontFamily: FONTS?.semi_bold
                                                }
                                            ]}
                                        >AED</Text>
                                    </View>
                                    <KidsAppBorderWidthBtn
                                        height={40}
                                        width={120}
                                        borderRadius={25}
                                        // marginTop={12}
                                        textSize={15}
                                        borderColor={COLORS?.black}
                                        borderWidth={1}
                                        textColor={COLORS?.colorBtn}
                                        text={('History')}
                                        backgroundColor={COLORS?.light_green}
                                        onPress={() => {
                                            navigation.navigate('History')
                                        }}
                                        textStyle={{
                                            fontFamily: FONTS?.medium,
                                        }}
                                    />

                                </View>
                            </View>

                            <View
                                style={[
                                    GlobalStyle?.flexRowJustifyBtwn,
                                    GlobalStyle?.commaonBorder,
                                    {
                                        flex: 1,
                                    }
                                ]}
                            >
                                <Image
                                    source={icons?.Task}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        marginRight: 15
                                    }}
                                />
                                <View
                                    style={[
                                        {
                                            flex: 1,
                                        }
                                    ]}
                                >
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize18,
                                            {
                                                fontFamily: FONTS?.regular
                                            }
                                        ]}
                                    >General Saving</Text>
                                    <View
                                        style={[
                                            // GlobalStyle?.flexRowAlignCenter,
                                            {
                                                // flex:1,
                                                alignItems: 'center',
                                                flexDirection: 'row',
                                            }
                                        ]}>
                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize25,
                                                {
                                                    fontFamily: FONTS?.bold
                                                }

                                            ]}
                                        >550</Text>
                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize18,
                                                GlobalStyle?.marginLeft5,
                                                {
                                                    color: COLORS?.green,
                                                    fontFamily: FONTS?.semi_bold
                                                }
                                            ]}
                                        >AED</Text>
                                    </View>
                                </View>
                            </View>


                            <Text
                                style={[
                                    GlobalStyle?.fontSize18, {
                                        fontFamily: FONTS?.medium,
                                        marginTop: 15
                                    }
                                ]}
                            >Saving Goals</Text>

                            <TouchableOpacity
                                onPress={() => {
                                    toggleModalNewCycle();
                                }}
                                style={[
                                    GlobalStyle?.flexRowJustifyBtwn,
                                    GlobalStyle?.marginTop15,

                                    GlobalStyle?.commaonBorder,
                                    {
                                        flex: 1,
                                        borderColor: COLORS?.colorPrimary,
                                        borderWidth: 1,
                                        backgroundColor: COLORS?.light_green
                                    }
                                ]}
                            >

                                <View
                                    style={[
                                        {
                                            flex: 1,
                                        }
                                    ]}
                                >

                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize18,
                                            {
                                                fontFamily: FONTS?.regular
                                            }

                                        ]}
                                    >New Cycle</Text>
                                    <View
                                        style={[
                                            // GlobalStyle?.flexRowAlignCenter,
                                            {
                                                // flex:1,
                                                alignItems: 'center',
                                                flexDirection: 'row',
                                            }
                                        ]}
                                    >

                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize25,
                                                {
                                                    fontFamily: FONTS?.bold
                                                }

                                            ]}
                                        >550</Text>
                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize18,
                                                GlobalStyle?.marginLeft5,
                                                {
                                                    color: COLORS?.green,
                                                    fontFamily: FONTS?.semi_bold
                                                }
                                            ]}
                                        >AED</Text>
                                    </View>
                                </View>

                                <Image
                                    source={icons?.eclips}
                                    style={{
                                        width: 60,
                                        height: 60
                                    }}
                                />
                            </TouchableOpacity>

                            <KidsAppBorderWidthBtn
                                height={55}
                                width={'100%'}
                                borderRadius={15}
                                marginTop={20}
                                textSize={18}
                                iconPosition={'left'}
                                icon={
                                    <Entypo
                                        name="plus"
                                        size={35}
                                        color={COLORS?.colorBtn}
                                        style={{
                                            marginRight: 15
                                        }}
                                    />
                                }
                                borderColor={COLORS?.colorBtn}
                                borderWidth={1}
                                textColor={COLORS?.colorBtn}
                                text={('Set saving goal')}
                                backgroundColor={COLORS?.white}
                                onPress={() => {
                                    toggleModal()
                                }}
                                textStyle={{
                                    fontFamily: FONTS?.medium,
                                }}
                            />

                            <Text
                                style={[
                                    GlobalStyle?.fontSize18, {
                                        fontFamily: FONTS?.medium,
                                        marginTop: 15
                                    }
                                ]}
                            >Saving Boosts</Text>
                            <View
                                style={[
                                    GlobalStyle?.marginTop15
                                ]}
                            >
                                <TouchableOpacity
                                    onPress={() => (
                                        navigation.navigate('RoundUpSetting')
                                    )}
                                    style={[
                                        GlobalStyle?.paddingVertical15,
                                        , {
                                            flex: 1,
                                            width: '100%',
                                            borderRadius: 8,
                                            marginHorizontal: 0,
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }]}
                                >

                                    <Image
                                        source={icons?.roundups}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            resizeMode: 'contain'
                                        }}
                                    />
                                    <View
                                        style={[
                                            GlobalStyle?.marginHorizontal5,
                                            GlobalStyle?.marginLeft15,
                                            {
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'space-between'
                                            }
                                        ]}>
                                        <View>
                                            <Text
                                                style={[
                                                    GlobalStyle?.fontSize18,
                                                    GlobalStyle?.marginTop5,

                                                    {
                                                        fontFamily: FONTS?.semi_bold
                                                    }
                                                ]}>Round Ups</Text>
                                            <Text
                                                style={[
                                                    GlobalStyle?.fontSize16,
                                                    // GlobalStyle?.marginTop5,
                                                    GlobalStyle?.colorGray,
                                                    {
                                                        fontFamily: FONTS?.light
                                                    }
                                                ]}>Set to “Ask First”</Text>
                                        </View>
                                        <View
                                            style={{
                                                alignSelf: 'center'
                                            }}
                                        >
                                            <Image
                                                source={icons?.arrow}
                                                style={{
                                                    width: 30,
                                                    height: 30,

                                                }}
                                            />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        borderWidth: 0.2,
                                        borderColor: COLORS?.gray,
                                        // flexGrow:1
                                    }}
                                />

                                <TouchableOpacity
                                    onPress={() => (
                                        navigation.navigate('ParentPaid')
                                    )}
                                    style={[
                                        GlobalStyle?.paddingVertical15,
                                        , {
                                            flex: 1,
                                            width: '100%',
                                            borderRadius: 8,
                                            marginHorizontal: 0,
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }]}
                                >
                                    <Image
                                        source={icons?.parentprogress}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            resizeMode: 'contain'
                                        }}
                                    />
                                    <View
                                        style={[
                                            GlobalStyle?.marginHorizontal5,
                                            GlobalStyle?.marginLeft15,
                                            {
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'space-between'
                                            }
                                        ]}>
                                        <View>
                                            <Text
                                                style={[
                                                    GlobalStyle?.fontSize18,
                                                    GlobalStyle?.marginTop5,

                                                    {
                                                        fontFamily: FONTS?.semi_bold
                                                    }
                                                ]}>5% Parent-Paid Interest</Text>
                                            <Text
                                                style={[
                                                    GlobalStyle?.fontSize16,
                                                    // GlobalStyle?.marginTop5,
                                                    GlobalStyle?.colorGray,
                                                    {
                                                        fontFamily: FONTS?.light
                                                    }
                                                ]}>Total earned: $3.15</Text>
                                        </View>
                                        <View
                                            style={{
                                                alignSelf: 'center'
                                            }}
                                        >
                                            <Image
                                                source={icons?.arrow}
                                                style={{
                                                    width: 30,
                                                    height: 30,

                                                }}
                                            />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </>

                )}
            </ScrollView>
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
                            Saving Target
                        </Text>
                        <KidsAppEditText
                            placeholder="Type here"
                            label="My goal is"
                        // value={email}

                        // keyBoardType={'number-pad'}
                        // onChangeText={v => setEmail(v)}
                        />

                        <KidsAppEditText
                            placeholder="Enter here"
                            label="Saving"
                        // value={email}

                        // keyBoardType={'email-address'}
                        // onChangeText={v => setEmail(v)}
                        />

                        <KidsAppBorderWidthBtn
                            height={55}
                            width={'100%'}
                            borderRadius={15}
                            marginTop={20}
                            textSize={18}
                            borderColor={COLORS?.colorBtn}
                            borderWidth={1}
                            textColor={COLORS?.white}
                            text={('Save')}
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

            <CustomButtomModal
                visible={modalVisible1NewCycle}
                toggleModal={toggleModalNewCycle}
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

                        <View
                            style={[
                                GlobalStyle?.flexRowJustifyBtwn
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
                                Cycle
                            </Text>
                            <View
                                style={[
                                    // GlobalStyle?.flexRowAlignCenter,
                                    {
                                        // flex:1,
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize22,
                                        {
                                            fontFamily: FONTS?.medium,
                                            // marginTop: 20,
                                            // marginBottom: 25
                                        }
                                    ]}
                                >
                                    250
                                </Text>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize16,
                                        {
                                            fontFamily: FONTS?.bold,
                                            color: COLORS?.green,
                                            marginTop: 3,
                                            // marginBottom: 25
                                        }
                                    ]}
                                >
                                    AED
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderWidth: 0.2,
                                borderColor: COLORS?.gray,
                                // flexGrow:1
                            }}
                        />

                        <Image
                            source={icons?.eclips}
                            style={{
                                width: 130,
                                height: 130,
                                resizeMode: 'contain',
                                marginVertical: 40,
                                alignSelf: 'center',
                                // marginTop: 20
                            }}
                        />

                        <View
                            style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}
                        >
                            <View
                                style={[
                                    // GlobalStyle?.flexRowAlignCenter,
                                    {
                                        // flex:1,
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize25,
                                        {
                                            fontFamily: FONTS?.medium,
                                            // marginTop: 20,
                                            // marginBottom: 25
                                        }
                                    ]}
                                >
                                    150
                                </Text>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize18,
                                        {
                                            fontFamily: FONTS?.bold,
                                            color: COLORS?.green,
                                            marginTop: 3,
                                        }
                                    ]}
                                >
                                    AED
                                </Text>
                            </View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize25,
                                    GlobalStyle?.marginLeft,
                                    {
                                        fontFamily: FONTS?.medium
                                    }
                                ]}
                            >goal</Text>
                        </View>

                        <Text
                            style={[
                                GlobalStyle?.fontSize22,
                                GlobalStyle?.marginVertical15,

                                GlobalStyle?.colorGray, {
                                    textAlign: 'center'
                                }
                            ]}
                        >Edit</Text>

                        <View
                            style={{
                                // flex:1,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <KidsAppBorderWidthBtn
                                height={55}
                                width={'48%'}
                                borderRadius={15}
                                marginTop={20}
                                textSize={18}
                                borderColor={COLORS?.colorBtn}
                                borderWidth={1}
                                textColor={COLORS?.colorBtn}
                                text={(
                                    <Text>
                                        Move <Text style={{
                                            color: COLORS?.colorPrimary,
                                            fontSize: 16,
                                            fontFamily: FONTS?.bold
                                        }}>AED</Text> In
                                    </Text>
                                )}
                                backgroundColor={COLORS?.white}
                                onPress={toggleModalNewCycle}
                                textStyle={{
                                    fontFamily: FONTS?.medium,
                                }}
                            />

                            <KidsAppBorderWidthBtn
                                height={55}
                                width={'48%'}
                                borderRadius={15}
                                marginTop={20}
                                textSize={18}
                                borderColor={COLORS?.colorBtn}
                                borderWidth={1}
                                textColor={COLORS?.white}
                                // text={('Move AED Out')}
                                text={(
                                    <Text>
                                        Move <Text style={{
                                            color: COLORS?.colorPrimary,
                                            fontSize: 16,
                                            fontFamily: FONTS?.bold
                                        }}>AED</Text> Out
                                    </Text>
                                )}
                                backgroundColor={COLORS?.colorBtn}
                                onPress={() => {
                                    toggleModalNewCycle()
                                }}
                                textStyle={{
                                    fontFamily: FONTS?.medium,
                                }}
                            />
                        </View>

                    </View>
                }

            />
        </SafeAreaView>
    );
};

export default Saving;
const styles = StyleSheet.create({

});