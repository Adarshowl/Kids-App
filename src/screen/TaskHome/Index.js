import React, { useState, useRef } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
    Image

} from 'react-native';

import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import icons from '../../constants/icons';
import ToolBarIcon from '../../utils/ToolBarIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from '../../global/Header';
import Ionicons from 'react-native-vector-icons/Ionicons'
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';


const TaskHome = ({ navigation }) => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('AllTask');

    const handleStatusSelect = (status) => {
        setSelectedStatus(status);
    };

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
    const [item, setItem] = useState([
        {
            selected: false,
            name: "Clean your room",
            id: 1,
            tittle: 'Due Fir, Nov 10',
            images: icons?.shopping,
            price: '800'

        },
        {
            selected: false,
            name: "Car Wash",
            tittle: 'Due Fir, Nov 10',
            images: icons?.shopping,
            price: '150',
            id: 2

        },

        {
            selected: false,
            name: "Meditation",
            tittle: 'Due Fir, Nov 10',
            images: icons?.food,
            price: '100',
            id: 3

        },

    ]);

    const [week, setWeek] = useState([
        {
            selected: false,
            name: "Wash cloths",
            id: 1,
            tittle: 'Due Fir, Nov 10',
            images: icons?.shopping,
            price: '800'

        },
        {
            selected: false,
            name: "Complete work",
            tittle: 'Due Fir, Nov 10',
            images: icons?.shopping,
            price: '150',
            id: 2

        },

    ]);

    const handlePress = (itemId) => {
        const updatedData = item.map(item => {
            if (item.id === itemId) {
                return { ...item, selected: true };
            } else {
                return { ...item, selected: false };
            }
        });
        setItem(updatedData);
    };


    const handlePressWeek = (itemId) => {
        const updatedData = week.map(item => {
            if (item.id === itemId) {
                return { ...item, selected: true };
            } else {
                return { ...item, selected: false };
            }
        });
        setWeek(updatedData);
    };

    const renderItem = ({ item, index }) => {
        return (
            <View
                style={[

                ]}
            >
                <TouchableOpacity
                    onPress={() => handlePress(item.id)}

                    style={[
                        GlobalStyle?.mainContainer,
                        GlobalStyle?.marginVertical10,
                        GlobalStyle?.commaonBorder,
                        GlobalStyle?.flexRowAlignCenter,
                        , {
                            flex: 1,
                            width: '100%',
                            paddingVertical: 25
                        }]}
                >

                    <View
                        style={{

                            justifyContent: 'center'
                        }}
                    >
                        {item?.selected ? (
                            <Image
                                source={icons.checkBox}
                                style={{
                                    width: 30,
                                    height: 30,
                                    resizeMode: 'contain',
                                    // marginTop: 5
                                }} />
                        ) : (
                            <MaterialIcons
                                name='check-box-outline-blank'
                                size={30}
                                color={COLORS.gray}
                                style={{
                                    // marginTop: 2
                                }}
                            />
                        )}
                    </View>
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
                                    GlobalStyle?.fontSize20,
                                    // GlobalStyle?.marginTop5,

                                    {
                                        fontFamily: FONTS?.medium
                                    }
                                ]}>{item?.name}</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    GlobalStyle?.colorGray,

                                    {
                                        fontFamily: FONTS?.regular
                                    }
                                ]}>{item?.tittle}</Text>

                        </View>

                        <View
                            style={[
                                // GlobalStyle?.flexRowAlignCenter,
                                {
                                    flex: 1,
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end'
                                }
                            ]}
                        >

                            <Text
                                style={[
                                    GlobalStyle?.fontSize20,
                                    {
                                        fontFamily: FONTS?.bold
                                    }

                                ]}
                            >{item?.price}</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize13,
                                    GlobalStyle?.marginLeft5,
                                    {
                                        color: COLORS?.green,
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}
                            >AED</Text>
                        </View>


                    </View>
                </TouchableOpacity>

            </View>
        );
    };

    const renderItemThisWeek = ({ item, index }) => {
        return (
            <View
                style={[

                ]}
            >
                <TouchableOpacity
                    onPress={() => handlePressWeek(item.id)}

                    style={[
                        GlobalStyle?.mainContainer,
                        GlobalStyle?.marginVertical10,
                        GlobalStyle?.commaonBorder,
                        GlobalStyle?.flexRowAlignCenter,
                        , {
                            flex: 1,
                            width: '100%',
                            paddingVertical: 25
                        }]}
                >

                    <View
                        style={{

                            justifyContent: 'center',
                            // flex:1
                        }}
                    >
                        {item?.selected ? (
                            <Image
                                source={icons.checkBox}
                                style={{
                                    width: 30,
                                    height: 30,
                                    // resizeMode: 'contain',
                                    // marginTop: 5
                                }} />
                        ) : (
                            <MaterialIcons
                                name='check-box-outline-blank'
                                size={30}
                                color={COLORS.gray}
                                style={{
                                    // width: 30,
                                    // height: 30,
                                }}
                            />
                        )}
                    </View>
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
                                    GlobalStyle?.fontSize20,
                                    // GlobalStyle?.marginTop5,

                                    {
                                        fontFamily: FONTS?.medium
                                    }
                                ]}>{item?.name}</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    GlobalStyle?.colorGray,

                                    {
                                        fontFamily: FONTS?.regular
                                    }
                                ]}>{item?.tittle}</Text>

                        </View>

                        <View
                            style={[
                                // GlobalStyle?.flexRowAlignCenter,
                                {
                                    flex: 1,
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end'
                                }
                            ]}
                        >

                            <Text
                                style={[
                                    GlobalStyle?.fontSize20,
                                    {
                                        fontFamily: FONTS?.bold
                                    }

                                ]}
                            >{item?.price}</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize13,
                                    GlobalStyle?.marginLeft5,
                                    {
                                        color: COLORS?.green,
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}
                            >AED</Text>
                        </View>


                    </View>
                </TouchableOpacity>

            </View>
        );
    };

    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                GlobalStyle?.paddingHorizontal10,

                {
                    // backgroundColor: "#FAFAFA"

                }
            ]}
        >


            <View
                style={[
                    GlobalStyle?.flexRowJustifyBtwn,
                    {
                        marginRight:12
                    }
                ]}
            >
                <Header
                    title="Task"
                // onPressLeft={() => navigation.goBack(null)}
                />
                <KidsAppBorderWidthBtn
                    height={40}
                    width={120}
                    borderRadius={25}
                    marginTop={15}
                    textSize={17}
                    borderColor={COLORS?.colorBtn}
                    borderWidth={1}
                    textColor={COLORS?.colorBtn}
                    text={('Rewards')}
                    backgroundColor={COLORS?.light_green}
                    onPress={() => {
                        navigation.navigate('Rewards')
                    }}
                    textStyle={{
                        fontFamily: FONTS?.semi_bold,
                    }}
                />

            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View
                    style={[
                        GlobalStyle?.paddingHorizontal10,
                        GlobalStyle?.marginTop15
                    ]}
                >




                    <View style={styles.container}>
                        <TouchableOpacity
                            style={[
                                styles.statusButton,
                                selectedStatus === 'AllTask' && styles.selectedButton,
                            ]}
                            onPress={() => handleStatusSelect('AllTask')}
                        >
                            <Text style={[
                                GlobalStyle?.fontSize18, {
                                    fontFamily: FONTS?.regular,
                                    color: selectedStatus === 'AllTask' ? COLORS?.white : COLORS?.grey,
                                }
                            ]}>All Task</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.statusButton,
                                selectedStatus === 'Complete' && styles.selectedButton,
                            ]}
                            onPress={() => handleStatusSelect('Complete')}
                        >
                            <Text style={[
                                GlobalStyle?.fontSize18, {
                                    fontFamily: FONTS?.regular,
                                    color: selectedStatus === 'Complete' ? COLORS?.white : COLORS?.grey,
                                }
                            ]}>Complete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.statusButton,
                                selectedStatus === 'InComplete' && styles.selectedButton,
                            ]}
                            onPress={() => handleStatusSelect('InComplete')}
                        >
                            <Text style={[
                                GlobalStyle?.fontSize18, {
                                    fontFamily: FONTS?.regular,
                                    color: selectedStatus === 'InComplete' ? COLORS?.white : COLORS?.grey,
                                }
                            ]}>Incomplete</Text>
                        </TouchableOpacity>
                    </View>




                    <TouchableOpacity
                        onPress={showDatePicker}
                        style={[
                            GlobalStyle?.flexRowAlignCenter,
                            GlobalStyle?.marginTop15
                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize22, {
                                    fontFamily: FONTS?.semi_bold,
                                    // marginTop: 15
                                }
                            ]}
                        >Today</Text>
                        <Ionicons
                            name="calendar-clear"
                            size={22}
                            color={COLORS?.colorBtn}
                            style={{
                                marginLeft: 15
                            }}
                        />
                    </TouchableOpacity>

                    <FlatList
                        style={{
                            flex: 1,
                            // marginHorizontal: 8,
                            marginTop: 15
                        }}
                        showsVerticalScrollIndicator={false}
                        data={item}
                        extraData={item}
                        renderItem={renderItem}
                    />

                    <TouchableOpacity
                        onPress={showDatePicker}
                        style={[
                            GlobalStyle?.flexRowAlignCenter,
                            GlobalStyle?.marginTop15
                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize22, {
                                    fontFamily: FONTS?.semi_bold,
                                    // marginTop: 15
                                }
                            ]}
                        >This Week</Text>

                    </TouchableOpacity>

                    <FlatList
                        style={{
                            flex: 1,
                            // marginHorizontal: 8,
                            marginTop: 15
                        }}
                        showsVerticalScrollIndicator={false}
                        data={week}
                        extraData={week}
                        renderItem={renderItemThisWeek}
                    />
                </View>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    minimumDate={currentDate}
                    onCancel={hideDatePicker}
                />
            </ScrollView>
        </SafeAreaView >
    );
};

export default TaskHome;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 0.5,
        borderRadius: 30,
        borderColor: COLORS?.gray,
        paddingVertical: 10,
        backgroundColor: COLORS?.background,
        paddingHorizontal: 10
    },
    statusButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
        borderRadius: 20,
    },
    selectedButton: {
        backgroundColor: COLORS?.dark_green,
    },
    statusText: {
        fontSize: 16,
    },
});