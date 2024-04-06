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
import { ShimmerView } from '../../utils/Skeleton';

const Schedule = () => {

    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const [data1, setData1] = useState([
        {
            selected: true,
            name: "Push - Up",
            id: 1,
            weight: '67.2 kg',
            tittle: 'Meal-1',
            days: "working",
            image: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            selected: false,
            name: "Assisted Push-Up",
            id: 2,

            weight: '90.2 kg',
            tittle: 'Meal-2',
            days: "working",
            image: 'https://media.istockphoto.com/id/649768690/photo/man-and-woman-strengthen-hands.jpg?s=1024x1024&w=is&k=20&c=lTWCx9mP-GmYbPvOPZUO8kIMs12S_OHLQS1M3_gSM9A='

        },
        {

            selected: false,
            name: "Decline Push-Up",
            weight: '90.2 kg',
            id: 3,

            tittle: 'Meal-3',
            days: "working",

            image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        },
        {

            selected: false,
            name: "Extend Plank",
            weight: '90.2 kg',
            tittle: 'Meal-4',
            days: "working",
            id: 4,
            image: 'https://media.istockphoto.com/id/1415174931/photo/fitness-health-and-active-couple-training-together-in-a-gym-doing-exercise-workout-for.jpg?s=1024x1024&w=is&k=20&c=EydjlTjlXHEXDGhhGG8H95QilOqyFKgt8dJCUNeGhkE='


        },


    ]);

    const [date, setData] = useState([
        {
            dayName: 'Th',
            date: '01',
            monthName: 'Apr',
            selected: false,
            days: "working",
            id: 1

        },
        {
            dayName: 'Fr',
            date: '02',
            selected: false,
            monthName: 'Apr',
            days: "working",
            id: 2

        },
        {
            dayName: 'Sa',
            selected: true,
            date: '03',
            monthName: 'Apr',
            days: "working",
            id: 3

        },
        {
            selected: false,
            dayName: 'Su',
            date: '04',
            monthName: 'Apr',
            days: "rest",
            id: 4

        },
        {
            selected: false,
            dayName: 'Mo',
            date: '05',
            monthName: 'Apr',
            days: "working",
            id: 5

        },
        {
            selected: false,
            dayName: 'Tu',
            date: '06',
            monthName: 'Apr',
            days: "rest",
            id: 6

        },
        {
            selected: false,
            dayName: 'We',
            date: '07',
            monthName: 'Apr',
            days: "working",
            id: 7

        },
    ]);


    const onDateClick = idx => {
        let a = date.map((item, index) => {
            let temp = Object.assign({}, item);
            if (index == idx) {
                temp.selected = !temp.selected;
            } else {
                temp.selected = false;
            }
            // ShowToastMessage('HI CLIXK' + temp.fav);

            return temp;
        });

        setData(a);
    };

    const renderItem = ({ item, index }) => {
        if (isLoading) {
            return <ShimmerView />;
        } else {
            return (
                <TouchableOpacity
                    style={[
                        GlobalStyle?.mainContainer,
                        // GlobalStyle?.paddingHorizontal0,
                        GlobalStyle?.paddingVertical10,
                        GlobalStyle?.marginVertical10,

                        , {
                            width: '100%',
                            // height: 170,
                            borderRadius: 8,
                            marginHorizontal: 0,
                            marginVertical: 10,
                            // borderWidth: 0.2,
                            // marginHorizontal:5,
                            paddingHorizontal: 10,

                            // borderColor: COLORS?.gray,
                            flexDirection: 'row',
                            // elevation: 3,
                            // borderWidth: 0.2,

                        }]}
                >

                    <Image
                        source={{
                            uri: item?.image
                        }}
                        style={{
                            width: 110,
                            height: 85,
                            borderRadius: 10
                            // resizeMode: 'contain'
                        }}
                    />



                    <View
                        style={[
                            GlobalStyle?.marginHorizontal5,
                            GlobalStyle?.marginLeft15,

                        ]}>

                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18,
                                    GlobalStyle?.marginTop5,

                                    {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}>{item?.name}</Text>
                        </View>

                        <View>

                            <Text
                                style={[
                                    GlobalStyle?.fontSize13,
                                    GlobalStyle?.marginTop5,
                                    {
                                        fontFamily: FONTS?.medium,
                                        color:COLORS?.grey
                                    }
                                ]}>Keep your head up</Text>
                        </View>
                        <View
                            style={[
                                GlobalStyle?.flexRowJustifyBtwn,
                                GlobalStyle?.marginTop5,
                                {
                                    flex: 1,
                                }
                            ]}
                        >
                            <View
                                style={[
                                    // GlobalStyle?.flexRowAlignCenter,
                                    , {
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }
                                ]}>
                                <Image
                                    source={{
                                        uri: 'https://cdn-icons-png.flaticon.com/128/13195/13195071.png'
                                    }}
                                    style={{
                                        width: 20,
                                        height: 22,
                                        alignItems: 'center'
                                    }}
                                />
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize13,
                                        GlobalStyle?.colorBlack,
                                        {
                                            marginLeft: 5,
                                            fontFamily: FONTS?.semi_bold,
                                        }
                                    ]}>125 Kcal</Text>
                            </View>
                            <View
                                style={[
                                    // GlobalStyle?.flexRowAlignCenter,
                                    , {
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginLeft: 15
                                    }
                                ]}>

                                <AntDesign
                                    name="clockcircle"
                                    size={15}
                                    color={COLORS?.green}
                                />
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize13,
                                        GlobalStyle?.colorBlack,
                                        {
                                            marginLeft: 5,
                                            fontFamily: FONTS?.semi_bold,
                                        }
                                    ]}
                                >Serving: 2.18</Text>
                            </View>
                        </View>


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
                    // backgroundColor: COLORS?.background,
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
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('EditPushUp')
                    }}
                    style={[
                        GlobalStyle?.marginRight,
                        GlobalStyle?.flexRowJustifyBtwn,
                        {

                        }
                    ]}
                >

                    <Text
                        style={[
                            GlobalStyle?.fontSize18, {
                                fontSize: 20,
                                fontFamily: FONTS?.regular

                            }
                        ]}
                    >
                        Edit
                    </Text>

                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/128/10573/10573605.png'
                        }}
                        style={{
                            width: 20,
                            height: 20,
                            marginLeft: 8
                        }}
                    />

                </TouchableOpacity>
            </View>
            <ScrollView
                style={{
                    flex: 1,
                    // marginHorizontal: 10
                }}
            >
                <View
                    style={[
                        GlobalStyle?.marginHorizontal15,
                        GlobalStyle?.marginVertical15
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize16,
                            {
                                fontFamily: FONTS?.semi_bold,
                                fontSize: 17
                            }
                        ]}
                    >February, 2024</Text>
                </View>
                <FlatList
                    style={{
                        paddingStart: 10,
                        paddingEnd: 5,
                        flex: 1
                    }}

                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={date}
                    renderItem={({ item, index }) => (
                        <DateItem
                            item={item}
                            onDateClick={() => {
                                onDateClick(index);
                            }}
                        />
                    )}
                />

                <View
                    style={[
                        // GlobalStyle?.marginHorizontal15,
                        // GlobalStyle?.marginVertical15,
                        {
                            // backgroundColor:COLORS?.dalColor
                        }
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize16,
                            GlobalStyle?.marginHorizontal15,
                            GlobalStyle?.marginVertical15,



                            {
                                fontFamily: FONTS?.semi_bold,
                                fontSize: 17
                            }
                        ]}
                    >Workout</Text>
                    <FlatList
                        style={{
                            // flex: 1,
                            marginHorizontal: 8,
                            backgroundColor: COLORS?.background
                        }}
                        ListEmptyComponent={isLoading ? ShimmerView : null} // Show skeleton only when loading

                        showsVerticalScrollIndicator={false}
                        data={data1}
                        extraData={data1}
                        renderItem={renderItem}
                    />
                </View>

            </ScrollView>
        </View>
    );
};
export default Schedule;

const styles = StyleSheet.create({

});
