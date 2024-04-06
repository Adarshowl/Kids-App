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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from '../../global/Header';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import CustomModal from '../../global/CustomModal';
import { AllowanceView, ShimmerView } from '../../utils/Skeleton';


const Allowance = ({ navigation }) => {


    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedWeekly, setSelectedWeekly] = useState([]);
    const [selectedMonthly, setSelectedMonthly] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
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


    const handleselet = selectedItems => {
        setSelectedWeekly(selectedItems);
    };
    const handleseletMonthly = selectedItems => {
        setSelectedMonthly(selectedItems);
    };

    const weekly = [
        { name: 'Daily', id: 1 },
        { name: 'Monthly', id: 2 },
        { name: 'Weekly', id: 3 },

    ];

    const monthly = [
        { name: 'Sunday', id: 1 },
        { name: 'Monday', id: 2 },
        { name: 'Tuesday', id: 3 },
        { name: 'Wednesday', id: 4 },
        { name: 'Thursday', id: 5 },
        { name: 'Friday', id: 6 },
        { name: 'Saturday', id: 7 },





    ];

    const [data, setData] = useState([
        {
            selected: true,
            name: "Receive",
            id: 1,
            tittle: 'From Johnathan Obi',
            images: icons?.checkwithBackground,
            price: '100'

        },
        {
            selected: false,
            name: "Clean your room",
            tittle: 'Bill payment',
            images: icons?.clock,
            price: '200'

        },

        {
            selected: false,
            name: "Receive",
            tittle: 'From Johnathan Obi',
            images: icons?.checkwithBackground,
            price: '300'

        },
        {
            selected: false,
            name: "Receive",
            tittle: 'Bill payment',
            images: icons?.checkwithBackground,
            price: '100'

        },
        {
            selected: false,
            name: "Clean your room",
            tittle: 'Bill payment',
            images: icons?.clock,
            price: '150'
        },

    ]);
    const renderItem = ({ item, index }) => {
        return (
            <View
                style={[

                ]}
            >
                <TouchableOpacity
                    style={[
                        GlobalStyle?.mainContainer,
                        GlobalStyle?.paddingVertical15,
                        GlobalStyle?.marginVertical10,

                        , {
                            flex: 1,
                            width: '100%',
                            borderRadius: 15,
                            marginHorizontal: 0,
                            paddingHorizontal: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 0.5,
                            borderColor: COLORS?.gray,
                            justifyContent: 'space-between'
                        }]}
                >


                    <View
                        style={[
                            GlobalStyle?.marginHorizontal5,
                            GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                                // flexDirection: 'row',
                                // justifyContent: 'space-between'
                            }
                        ]}>

                        <View
                            style={[
                                GlobalStyle?.flexRowAlignCenter,
                                {
                                }
                            ]}
                        >

                            <Text
                                style={[
                                    GlobalStyle?.fontSize18,
                                    {
                                        fontFamily: FONTS?.bold
                                    }

                                ]}
                            >{item?.price}</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    GlobalStyle?.marginLeft5,
                                    {
                                        color: COLORS?.green
                                    }
                                ]}
                            >AED</Text>
                        </View>
                        <Text
                            style={[
                                GlobalStyle?.fontSize13,
                                GlobalStyle?.colorGray,

                                {
                                    fontFamily: FONTS?.regular
                                }
                            ]}>{item?.name}</Text>
                    </View>

                    <Image
                        source={item?.images}
                        style={{
                            width: 25,
                            height: 25,
                            marginRight: 10
                        }}
                    />
                </TouchableOpacity>

            </View>
        );
    };

    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                // GlobalStyle?.paddingHorizontal10,

                {
                    // backgroundColor: "#FAFAFA"

                }
            ]}
        >


            <Header
                title="Allowance"
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
                                    GlobalStyle?.flexRowJustifyBtwn,
                                    GlobalStyle?.commaonBorder,
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
                                            justifyContent: 'flex-end'
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
                                <View
                                    style={[
                                        GlobalStyle?.marginRight,
                                        {
                                            // flex:1,
                                            alignItems: 'center',

                                            justifyContent: 'flex-end'
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
                                    >Weekly</Text>
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize14,
                                            GlobalStyle?.marginLeft5,
                                            {
                                                color: COLORS?.grey
                                            }
                                        ]}
                                    >On Sunday</Text>
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
                                <View
                                    style={[
                                        // GlobalStyle?.flexRowAlignCenter,
                                        {
                                            flex: 1,
                                        }
                                    ]}
                                >

                                    <View
                                        style={[
                                            GlobalStyle?.flexRowAlignCenter, {
                                                alignItems: 'center',
                                                alignSelf: 'center'
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
                                        >200</Text>
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

                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            marginTop: 15
                                        }}
                                    >
                                        <View
                                            style={{
                                                // flex: 1,
                                                borderRadius: 8,
                                                borderWidth: 0.2,
                                                borderColor: COLORS?.black,
                                                // flex: 0.5,
                                                width: 150,
                                                height: 50,
                                                // marginLeft: 60,
                                                // alignItems:'center',
                                                justifyContent: 'center',
                                                backgroundColor: COLORS?.white,
                                                // elevation:3

                                            }}
                                        >
                                            <Picker
                                                selectedValue={selectedWeekly}
                                                onValueChange={itemValue => handleselet(itemValue)}
                                                mode="dropdown"
                                            >
                                                {weekly.map(weight => (
                                                    <Picker.Item
                                                        label={weight.name}
                                                        value={weight.name}
                                                        key={weight.id}
                                                        style={{
                                                            fontSize: 16,
                                                            fontFamily: FONTS?.bold,
                                                            color: COLORS?.black,
                                                            // maxHeight: 10

                                                            // height: 30,
                                                        }}
                                                    />
                                                ))}
                                            </Picker>
                                        </View>
                                        <View
                                            style={{
                                                // flex: 1,
                                                borderRadius: 8,
                                                borderWidth: 0.2,
                                                borderColor: COLORS?.black,
                                                // flex: 0.5,
                                                width: 150,
                                                height: 50,
                                                // marginLeft: 60,
                                                // alignItems:'center',
                                                justifyContent: 'center',
                                                // backgroundColor: COLORS?.white,
                                                // elevation:3
                                            }}
                                        >
                                            <Picker
                                                selectedValue={selectedMonthly}
                                                onValueChange={itemValue => handleseletMonthly(itemValue)}
                                                mode="dropdown"
                                            >
                                                {monthly.map(weight => (
                                                    <Picker.Item
                                                        label={weight.name}
                                                        value={weight.name}
                                                        key={weight.id}
                                                        style={{
                                                            fontSize: 16,
                                                            fontFamily: FONTS?.bold,
                                                            color: COLORS?.black,
                                                            // maxHeight: 10

                                                            // height: 30,
                                                        }}
                                                    />
                                                ))}
                                            </Picker>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            alignItems: 'center'
                                        }}
                                    >
                                        <KidsAppCommBtn
                                            height={55}
                                            width={250}
                                            borderRadius={15}
                                            marginTop={20}
                                            textSize={17}
                                            borderColor={COLORS?.black}
                                            borderWidth={1}
                                            textColor={COLORS?.white}
                                            text={('Request allowances')}
                                            backgroundColor={COLORS?.light_green}
                                            onPress={() => {
                                                toggleModal();
                                            }}
                                            textStyle={{
                                                fontFamily: FONTS?.medium,
                                            }}
                                        />
                                    </View>

                                </View>
                            </View>


                            <Text
                                style={[
                                    GlobalStyle?.fontSize18, {
                                        fontFamily: FONTS?.semi_bold,
                                        marginTop: 15
                                    }
                                ]}
                            >History</Text>

                            <FlatList
                                style={{
                                    flex: 1,
                                    // marginHorizontal: 8,
                                    marginTop: 15
                                }}
                                showsVerticalScrollIndicator={false}
                                data={data}
                                extraData={data}
                                renderItem={renderItem}
                            />
                        </View>
                    </>
                )}
            </ScrollView>


            <CustomModal
                visible={modalVisible}
                toggleModal={toggleModal}
                buttonText="Skip"
                customView={

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handlePress}
                        style={[
                            , {
                                alignItems: 'center',
                                padding: 25
                            }
                        ]}
                    >
                        <Image
                            source={icons?.succes}
                            style={{
                                width: 130,
                                height: 130,
                                marginVertical: 10
                            }}
                        />
                        <Text
                            style={[
                                GlobalStyle?.fontSize25,
                                GlobalStyle?.paddingHorizontal20,
                                GlobalStyle?.colorBlack,
                                {
                                    textAlign: 'center',
                                    fontFamily: FONTS?.medium
                                }
                            ]}
                        >
                            Allowances Request
                            send Successfully
                        </Text>

                        <Text
                            style={[
                                GlobalStyle?.fontSize15,
                                GlobalStyle?.colorGray,
                                {
                                    marginTop: 10,
                                    textAlign: 'center'
                                }
                            ]}
                        >Sent your request</Text>

                    </TouchableOpacity>
                }

            />
        </SafeAreaView>
    );
};

export default Allowance;
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