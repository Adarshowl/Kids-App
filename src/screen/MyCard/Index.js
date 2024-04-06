import React, { useState, useRef } from 'react';
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


const MyCard = ({ navigation }) => {


    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedWeekly, setSelectedWeekly] = useState([]);
    const [selectedMonthly, setSelectedMonthly] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

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
            name: "Received Ali",
            id: 1,
            tittle: 'From Johnathan Obi',
            images: images?.recevied,
            price: '3,110'

        },
        {
            selected: false,
            name: "Add Wallet",
            tittle: 'Bill payment',
            images: images?.wallet,
            price: '1,500'

        },

        {
            selected: false,
            name: "Spend Ali",
            tittle: 'From Johnathan Obi',
            images: images?.spend,
            price: '2,000'

        },
        {
            selected: false,
            name: "Add Wallet",
            tittle: 'Bill payment',
            images: images?.wallet,
            price: '3,200'

        },

    ]);
    const renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity
                    style={[
                        // GlobalStyle?.mainContainer,
                        GlobalStyle?.paddingVertical15,
                        // GlobalStyle?.marginVertical10,

                        , {
                            flex: 1,
                            width: '100%',
                            borderRadius: 8,
                            marginHorizontal: 0,
                            // paddingHorizontal: 10,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }]}
                >

                    <Image
                        source={item?.images}
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10
                            // resizeMode: 'contain'
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
                                ]}>{item?.name}</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    // GlobalStyle?.marginTop5,
                                    GlobalStyle?.colorGray,
                                    {
                                        fontFamily: FONTS?.light
                                    }
                                ]}>{item?.tittle}</Text>
                        </View>
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
                                    GlobalStyle?.fontSize16,

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



                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        borderWidth: 0.2,
                        borderColor: COLORS?.gray,
                        // flexGrow:1
                    }}
                />
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
                title="My Card"
            // onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[
                    GlobalStyle?.paddingHorizontal10,
                ]}
            >

                <View
                    style={[
                        GlobalStyle?.paddingHorizontal10,
                        GlobalStyle?.marginTop15
                    ]}
                >

                    <Image
                        source={images?.mycard}
                        style={{
                            width: '100%',
                            height: 200
                        }}
                    />

                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.commaonBorder,
                            GlobalStyle?.marginTop30,
                            {
                                flex: 1,
                                borderWidth: 1.5,
                                borderColor: COLORS?.colorPrimary,
                                backgroundColor: COLORS?.light_green

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
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.marginTop5,
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
                                    GlobalStyle?.fontSize20,
                                    {
                                        fontFamily: FONTS?.regular
                                    }

                                ]}
                            >Card Limit</Text>

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

                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    {
                                        fontFamily: FONTS?.regular
                                    }

                                ]}
                            >Available Balance</Text>
                            <View
                                style={[
                                    GlobalStyle?.flexRowAlignCenter,
                                    GlobalStyle?.marginTop15,
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
                                        GlobalStyle?.fontSize16,
                                        GlobalStyle?.marginTop5,
                                        {
                                            color: COLORS?.green,
                                            fontFamily: FONTS?.semi_bold
                                        }
                                    ]}
                                >AED</Text>
                            </View>
                        </View>
                        <View
                            style={[
                                {
                                    justifyContent: 'flex-end',
                                    alignItems: 'center'
                                }
                            ]}
                        >
                            <KidsAppCommBtn
                                height={40}
                                width={120}
                                borderRadius={10}
                                // marginTop={20}
                                textSize={17}
                                borderColor={COLORS?.black}
                                borderWidth={1}
                                textColor={COLORS?.white}
                                text={('Request $')}
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



                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn
                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize20, {
                                    fontFamily: FONTS?.medium,
                                    marginTop: 15
                                }
                            ]}
                        >Allowances</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Allowance')
                            }}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.textUnderLine,

                                    {
                                        fontFamily: FONTS?.regular,
                                        marginTop: 15
                                    }
                                ]}
                            >View History</Text>
                        </TouchableOpacity>
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
                                    style={[
                                        GlobalStyle?.commaonBorder, {
                                            flex: 1,
                                            paddingVertical: 0,
                                            paddingHorizontal: 6,
                                            marginLeft: 10                                        }
                                    ]}
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
                                                    backgroundColor: COLORS?.white
                                                    // maxHeight: 10
                                                    // height: 30,
                                                }}
                                            />
                                        ))}
                                    </Picker>
                                </View>
                                <View
                                    style={[
                                        GlobalStyle?.commaonBorder, {
                                            flex: 1,
                                            paddingVertical: 0,
                                            paddingHorizontal: 6,
                                            marginLeft: 10
                                        }
                                    ]}
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
                                                    backgroundColor: COLORS?.white
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


                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn
                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize20, {
                                    fontFamily: FONTS?.medium,
                                    marginTop: 15
                                }
                            ]}
                        >Transactions</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('History')
                            }}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.textUnderLine,

                                    {
                                        fontFamily: FONTS?.regular,
                                        marginTop: 15
                                    }
                                ]}
                            >View History</Text>
                        </TouchableOpacity>
                    </View>

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

export default MyCard;
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