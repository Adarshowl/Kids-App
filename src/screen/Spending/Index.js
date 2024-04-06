import React, { useState, useRef, useEffect } from 'react';
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
import { ShimmerView } from '../../utils/Skeleton';


const Spending = ({ navigation }) => {


    const [selectedStatus, setSelectedStatus] = useState('Received');

    const handleStatusSelect = (status) => {
        setSelectedStatus(status);
    };
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const [data, setData] = useState([
        {
            selected: true,
            name: "Spend Anywhere",
            id: 1,
            tittle: 'From Johnathan Obi',
            images: images?.payment,
            price: '55.00'

        },
        {
            selected: false,
            name: "Any ATM",
            tittle: 'Bill payment',
            images: images?.anyatm,
            price: '15.00'

        },

        {
            selected: false,
            name: "Any Gas Station",
            tittle: 'From Johnathan Obi',
            images: images?.gasstation,
            price: '10.00'

        },
        {
            selected: false,
            name: "Any Restaurant",
            tittle: 'Bill payment',
            images: images?.Restaurant,
            price: '10.00'

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
                            borderColor: COLORS?.gray
                        }]}
                >

                    <Image
                        source={item?.images}
                        style={{
                            width: 40,
                            height: 40,
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
                title="Spending"
                onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[
                    GlobalStyle?.paddingHorizontal10,
                ]}
            >
                {isLoading ? (
                    <ShimmerView
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
                                    GlobalStyle?.flexRowJustifyBtwn, {
                                        flex: 1
                                    }
                                ]}
                            >
                                <View
                                    style={[
                                        GlobalStyle?.flexRowAlignCenter
                                    ]}
                                >
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize22,
                                            {
                                                fontFamily: FONTS?.bold
                                            }
                                        ]}
                                    >Today</Text>
                                    <Image
                                        source={images?.calender}
                                        style={{
                                            width: 25,
                                            height: 25,
                                            marginLeft: 15
                                        }}
                                    />
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

                            <Image
                                source={images?.chart}
                                style={{
                                    width: '100%',
                                    height: 320,
                                    marginTop: 20

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

                            <Text
                                style={[
                                    GlobalStyle?.fontSize18, {
                                        fontFamily: FONTS?.medium,
                                        marginTop: 15
                                    }
                                ]}
                            >Specific Stores</Text>

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
                                            borderColor: COLORS?.gray
                                        }]}
                                >

                                    <Image
                                        source={images?.Canteen}
                                        style={{
                                            width: 40,
                                            height: 40,
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
                                                ]}>School Canteen</Text>

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
                                            >17.00</Text>
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

                            </View>
                        </View>
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Spending;
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