import React, { useContext, useEffect, useState } from 'react';
import {
    FlatList,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS } from '../../constants/Colors';
import { SIZES, STRING } from '../../constants';
import GlobalStyle from '../../styles/GlobalStyle';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import themeContext from '../../constants/themeContext';
import ToolBarIcon from '../../utils/ToolBarIcon';
import { FONTS } from '../../constants/Fonts';
import Octicons from 'react-native-vector-icons/Octicons';
import { useDispatch, useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {
    doSaveOfferOfflineRealm,
    getSavedFavoriteProductString,
    removeFromFavoriteRealm,
} from '../../utils/RealmUtility';
import { ShowConsoleLogMessage } from '../../utils/Utility';
import { getHomeProduct } from '../../redux/actions/HomeApi';
import { IMAGE_BASE_URL } from '../../network/ApiEndPoints';
import { Image } from 'react-native';
import DateItem from './DateItem';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import { ShimmerView } from '../../utils/Skeleton';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../../constants/icons';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';

const EditPushUp = () => {

    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    const [data, setData] = useState([
        {
            dayName: 'Mon',
            date: '01',
            monthName: 'Apr',
            selected: false,
            days: "working",
            id: 1

        },
        {
            dayName: 'Tue',
            date: '02',
            selected: false,
            monthName: 'Apr',
            days: "working",
            id: 2

        },
        {
            dayName: 'Wed',
            selected: true,
            date: '03',
            monthName: 'Apr',
            days: "working",
            id: 3

        },
        {
            selected: false,
            dayName: 'Thu',
            date: '04',
            monthName: 'Apr',
            days: "rest",
            id: 4

        },
        {
            selected: false,
            dayName: 'Fir',
            date: '05',
            monthName: 'Apr',
            days: "working",
            id: 5

        },
        {
            selected: false,
            dayName: 'Sat',
            date: '06',
            monthName: 'Apr',
            days: "rest",
            id: 6

        },
        {
            selected: false,
            dayName: 'Sun',
            date: '07',
            monthName: 'Apr',
            days: "working",
            id: 7

        },
    ]);


    const renderItem = ({ item, index }) => {
        if (isLoading) {
            return <ShimmerView />;
        } else {
            return (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('VideoPlayerWorkout');
                    }}
                    style={[
                        GlobalStyle?.mainContainer,
                        // GlobalStyle?.paddingVertical10,
                        GlobalStyle?.marginVertical10,

                        , {
                            width: '100%',
                            // height: 170,
                            borderRadius: 8,
                            marginHorizontal: 0,
                            marginVertical: 10,
                            flexDirection: 'row',
                        }]}
                >

                    <LinearGradient
                        colors={[COLORS?.primary1, COLORS?.primary3]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                            width: 110,
                            height: 75,
                            // borderRadius: 10
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize22,
                                {
                                    color: COLORS.white,
                                    fontFamily: FONTS?.semi_bold,
                                    // fontSize: 15
                                },
                            ]}>
                            {item?.dayName}
                        </Text>

                    </LinearGradient>
                    <View
                        style={{
                            height: 75,
                            width: 15,
                            backgroundColor: COLORS?.li_gray

                        }}
                    />
                    <View
                        style={[
                            GlobalStyle?.marginHorizontal5,
                            GlobalStyle?.marginLeft15,


                            GlobalStyle?.flexRowJustifyBtwn,
                            {
                                flex: 1,
                                paddingHorizontal: 10,
                            }


                        ]}>

                        {/* <Text
                            style={[
                                GlobalStyle?.fontSize22,
                                GlobalStyle?.marginLeft15,
                                {
                                    fontFamily: FONTS?.semi_bold
                                }
                            ]}>Workout</Text> */}
                        {item?.days === 'working' ? (
                            <Text
                                style={[
                                    GlobalStyle?.fontSize22,
                                    GlobalStyle?.marginLeft15,
                                    {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}>Workout</Text>
                        ) : (
                            <Text
                                style={[
                                    GlobalStyle?.fontSize22,
                                    GlobalStyle?.marginLeft15,
                                    {
                                        fontFamily: FONTS?.semi_bold,
                                        color: COLORS?.red
                                    }
                                ]}>Rest Day</Text>
                        )}

                        <Image
                            source={icons?.minus}
                            style={{
                                width: 25,
                                height: 25
                            }}
                        />
                    </View>
                </TouchableOpacity>
            );
        }
    };

    return (
        <View
            style={[
                GlobalStyle.mainContainer,
                {
                    backgroundColor: COLORS?.dalColor,
                    // marginTop: 15,
                    flex: 1

                },
            ]}>
            <View
                style={[
                    GlobalStyle?.marginHorizontal5,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.marginTop15,
                    GlobalStyle?.flexRowJustifyBtwn, {
                    }
                ]}
            >

                <View
                    style={[
                        GlobalStyle?.flexRowAlignCenter
                    ]}
                >
                    <ToolBarIcon
                        title={MaterialIcons}
                        iconName={'arrow-back-ios-new'}
                        icSize={25}
                        icColor={COLORS?.black}
                        style={{
                            backgroundColor: COLORS?.white,
                            // borderRadius: 30,
                            // width: 25,
                            // height: 25,
                            elevation: 5

                        }}

                    />
                    <Text
                        style={[
                            GlobalStyle?.fontSize22,
                            GlobalStyle?.marginLeft15, {
                                fontFamily: FONTS?.bold
                            }
                        ]}
                    >
                        Schedule
                    </Text>
                </View>
                <KidsAppBorderWidthBtn
                    height={45}
                    width={100}
                    borderRadius={30}
                    // marginTop={30}
                    textSize={17}
                    borderWidth={2}

                    borderColor={COLORS?.customColor}

                    textColor={COLORS?.customColor}
                    text={('Save')}
                    backgroundColor={COLORS?.white}
                    onPress={() => {
                        navigation.navigate('VideoPlayerWorkout');
                        // openBottomSheet();
                    }}
                    textStyle={{
                        fontFamily: FONTS?.semi_bold,
                        color: COLORS.colorPrimary,
                    }}
                />

            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,
                    marginHorizontal: 10
                }}
            >


                <View
                    style={[
                        // GlobalStyle?.marginHorizontal15,
                        // GlobalStyle?.marginVertical15,
                        {
                            // backgroundColor:COLORS?.dalColor
                        }
                    ]}
                >

                    <FlatList
                        style={{
                            // flex: 1,
                            marginHorizontal: 8,
                        }}
                        showsVerticalScrollIndicator={false}
                        data={data}
                        extraData={data}
                        renderItem={renderItem}
                    />
                </View>

            </ScrollView>
            {/* <View
                style={[
                    GlobalStyle?.marginHorizontal10,
                ]}
            >
                <KidsAppCommBtn
                    height={55}
                    width={'100%'}
                    borderRadius={30}
                    textSize={17}
                    borderWidth={2}

                    borderColor={COLORS?.customColor}

                    textColor={COLORS?.white}
                    text={('Save')}
                    backgroundColor={COLORS?.white}
                    onPress={() => {
                        navigation.navigate('VideoPlayerWorkout');
                    }}
                    textStyle={{
                        fontFamily: FONTS?.semi_bold,
                        color: COLORS.colorPrimary,
                    }}
                />
            </View> */}
        </View>
    );
};
export default EditPushUp;

const styles = StyleSheet.create({

});
