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
import icons from '../../constants/icons';
import ToolBarIcon from '../../utils/ToolBarIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from '../../global/Header';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';


const History = ({ navigation }) => {


    const [selectedStatus, setSelectedStatus] = useState('Weekly');

    const handleStatusSelect = (status) => {
        setSelectedStatus(status);
    };


    const [data, setData] = useState([
        {
            selected: true,
            name: "Spend Anywhere",
            id: 1,
            tittle: '3/2/2023 at 8:00 PM',
            images: icons?.shopping,
            price: '55.00'

        },
        {
            selected: false,
            name: "Any ATM",
            tittle: '3/2/2023 at 8:00 PM',
            images: icons?.shopping,
            price: '15.00'

        },

        {
            selected: false,
            name: "Any Gas Station",
            tittle: '3/2/2023 at 8:00 PM',
            images: icons?.food,
            price: '10.00'

        },
        {
            selected: false,
            name: "Any Restaurant",
            tittle: '3/2/2023 at 8:00 PM',
            images: icons?.other,
            price: '10.00'

        }

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
                            // paddingHorizontal: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            // borderWidth: 0.5,
                            // borderColor: COLORS?.gray
                        }]}
                >

                    <Image
                        source={item?.images}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 10,
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
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.marginTop5,

                                    {
                                        fontFamily: FONTS?.regular
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
                                    // flex:1,
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end'
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
                            >+{item?.price}</Text>
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

                {
                    // backgroundColor: "#FAFAFA"

                }
            ]}
        >


            <Header
                title="History"
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




                    <View style={styles.container}>
                        <TouchableOpacity
                            style={[
                                styles.statusButton,
                                selectedStatus === 'Weekly' && styles.selectedButton,
                            ]}
                            onPress={() => handleStatusSelect('Weekly')}
                        >
                            <Text style={[
                                GlobalStyle?.fontSize18, {
                                    fontFamily: FONTS?.regular,
                                    color: selectedStatus === 'Weekly' ? COLORS?.white : COLORS?.grey,
                                }
                            ]}>Weekly</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.statusButton,
                                selectedStatus === 'Monthly' && styles.selectedButton,
                            ]}
                            onPress={() => handleStatusSelect('Monthly')}
                        >
                            <Text style={[
                                GlobalStyle?.fontSize18, {
                                    fontFamily: FONTS?.regular,
                                    color: selectedStatus === 'Monthly' ? COLORS?.white : COLORS?.grey,
                                }
                            ]}>Monthly</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.statusButton,
                                selectedStatus === 'Yearly' && styles.selectedButton,
                            ]}
                            onPress={() => handleStatusSelect('Yearly')}
                        >
                            <Text style={[
                                GlobalStyle?.fontSize18, {
                                    fontFamily: FONTS?.regular,
                                    color: selectedStatus === 'Yearly' ? COLORS?.white : COLORS?.grey,
                                }
                            ]}>Yearly</Text>
                        </TouchableOpacity>
                    </View>


                    <Image
                        source={icons?.progressChart}
                        style={{
                            width: 250,
                            height: 250,
                            alignSelf: 'center',
                            marginTop: 40
                        }}
                    />

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
                        >Categories</Text>
                        <Text
                            style={[
                                GlobalStyle?.fontSize16,
                                GlobalStyle?.textUnderLine,

                                {
                                    fontFamily: FONTS?.regular,
                                    marginTop: 15
                                }
                            ]}
                        >View All</Text>
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
        </SafeAreaView>
    );
};

export default History;
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