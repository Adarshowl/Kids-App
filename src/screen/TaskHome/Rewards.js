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


const Rewards = ({ navigation }) => {


    const [selectedStatus, setSelectedStatus] = useState('Received');

    const handleStatusSelect = (status) => {
        setSelectedStatus(status);
    };


    const [data, setData] = useState([
        {
            selected: true,
            name: "Clean your room",
            id: 1,
            tittle: 'From Johnathan Obi',
            images: images?.payment,
            price: '150'

        },
        {
            selected: false,
            name: "Clean your room",
            tittle: 'Bill payment',
            images: images?.anyatm,
            price: '100'

        },

        {
            selected: false,
            name: "Clean your room",
            tittle: 'From Johnathan Obi',
            images: images?.gasstation,
            price: '200'
        },
        {
            selected: false,
            name: "Clean your room",
            tittle: 'Bill payment',
            images: images?.Restaurant,
            price: '152'
        },
    ]);

    const [datapending, setDatapending] = useState([
        {
            selected: true,
            name: "Clean your room",
            id: 1,
            tittle: 'From Johnathan Obi',
            images: icons?.clock,
            price: '150'
        },
        {
            selected: false,
            name: "Clean your room",
            tittle: 'Bill payment',
            images: icons?.clock,
            price: '100'
        },
    ]);

    const renderItemReRecived = ({ item, index }) => {
        return (
            <View
                style={[

                ]}
            >
                <TouchableOpacity
                    style={[
                        GlobalStyle?.mainContainer,
                        GlobalStyle?.paddingVertical10,
                        GlobalStyle?.marginVertical10,

                        , {
                            flex: 1,
                            width: '100%',
                            borderRadius: 15,
                            marginHorizontal: 0,
                            paddingHorizontal: 10,
                            flexDirection: 'row',
                            // alignItems: 'center',
                            borderWidth: 0.5,
                            borderColor: COLORS?.gray
                        }]}
                >


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
                            <View
                                style={[
                                    GlobalStyle?.flexRowAlignCenter,
                                    {
                                    }
                                ]}
                            >

                                <Text
                                    style={[
                                        GlobalStyle?.fontSize22,
                                        {
                                            fontFamily: FONTS?.semi_bold
                                        }

                                    ]}
                                >{item?.price}</Text>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize13,
                                        GlobalStyle?.marginLeft5,
                                        GlobalStyle?.marginTop3,
                                        {
                                            color: COLORS?.green,
                                            fontFamily: FONTS?.semi_bold
                                        }
                                    ]}
                                >AED</Text>
                            </View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    // GlobalStyle?.marginTop5,
                                    {
                                        fontFamily: FONTS?.extra_light
                                    }
                                ]}>{item?.name}</Text>

                        </View>



                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source={icons?.checkwithBackground}
                                style={{
                                    width: 23,
                                    height: 23,
                                }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        );
    };


    const renderPending = ({ item, index }) => {
        return (
            <View
                style={[

                ]}
            >
                <TouchableOpacity
                    style={[
                        GlobalStyle?.mainContainer,
                        GlobalStyle?.paddingVertical10,
                        GlobalStyle?.marginVertical10,

                        , {
                            flex: 1,
                            width: '100%',
                            borderRadius: 15,
                            marginHorizontal: 0,
                            paddingHorizontal: 10,
                            flexDirection: 'row',
                            // alignItems: 'center',
                            borderWidth: 0.5,
                            borderColor: COLORS?.gray
                        }]}
                >


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
                            <View
                                style={[
                                    GlobalStyle?.flexRowAlignCenter,
                                    {
                                    }
                                ]}
                            >

                                <Text
                                    style={[
                                        GlobalStyle?.fontSize22,
                                        {
                                            fontFamily: FONTS?.semi_bold
                                        }

                                    ]}
                                >{item?.price}</Text>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize13,
                                        GlobalStyle?.marginLeft5,
                                        GlobalStyle?.marginTop3,
                                        {
                                            color: COLORS?.green,
                                            fontFamily: FONTS?.semi_bold
                                        }
                                    ]}
                                >AED</Text>
                            </View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    // GlobalStyle?.marginTop5,
                                    {
                                        fontFamily: FONTS?.extra_light
                                    }
                                ]}>{item?.name}</Text>

                        </View>



                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source={icons?.clock}
                                style={{
                                    width: 23,
                                    height: 23,
                                }}
                            />
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


            <Header
                title="My Rewards"
                onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={[
                        GlobalStyle?.paddingHorizontal10,
                        GlobalStyle?.marginTop15
                    ]}
                >


                    <Image
                        source={images?.rewards}
                        style={{
                            width: '100%',
                            height: 250,
                            marginTop: 10,
                            // resizeMode:'contain',
                            flex: 1,
                            marginBottom: 25,
                            borderRadius: 20

                        }}
                    />

                    <View style={styles.container}>
                        <TouchableOpacity
                            style={[
                                styles.statusButton,
                                selectedStatus === 'Received' && styles.selectedButton,
                            ]}
                            onPress={() => handleStatusSelect('Received')}
                        >
                            <Text style={[
                                GlobalStyle?.fontSize18, {
                                    fontFamily: FONTS?.regular,
                                    color: selectedStatus === 'Received' ? COLORS?.white : COLORS?.grey,
                                }
                            ]}>Received</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.statusButton,
                                selectedStatus === 'Pending' && styles.selectedButton,
                            ]}
                            onPress={() => handleStatusSelect('Pending')}
                        >
                            <Text style={[
                                GlobalStyle?.fontSize18, {
                                    fontFamily: FONTS?.regular,
                                    color: selectedStatus === 'Pending' ? COLORS?.white : COLORS?.grey,
                                }
                            ]}>Pending</Text>
                        </TouchableOpacity>
                    </View>

                    {
                        selectedStatus === 'Received' ? (
                            <FlatList
                                style={{
                                    flex: 1,
                                    // marginHorizontal: 8,
                                    marginTop: 15
                                }}
                                showsVerticalScrollIndicator={false}
                                data={data}
                                extraData={data}
                                renderItem={renderItemReRecived}
                            />
                        ) :
                            (
                                <FlatList
                                    style={{
                                        flex: 1,
                                        // marginHorizontal: 8,
                                        marginTop: 15
                                    }}
                                    showsVerticalScrollIndicator={false}
                                    data={datapending}
                                    extraData={datapending}
                                    renderItem={renderPending}
                                />
                            )
                    }

                </View>
            </ScrollView>

            <View
                style={{
                    flex: 1,
                    marginBottom: 20
                }}
            />
        </SafeAreaView>
    );
};

export default Rewards;
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