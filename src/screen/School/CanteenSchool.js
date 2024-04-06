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

import { COLORS, SIZES } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import icons from '../../constants/icons';
import ToolBarIcon from '../../utils/ToolBarIcon';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../../global/Header';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import CustomButtomModal from '../../global/CustomButtomModal';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const CanteenSchool = ({ }) => {

    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = useState('Canteen');
    const [data, setData] = useState([

        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjm_YL7BVSs5QCV5Z85ZO7s-1LYhznTphGg&usqp=CAU",
            selected: false,
            name: "Side planks",
            weight: '90.2 kg'
        },
        // {
        //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjm_YL7BVSs5QCV5Z85ZO7s-1LYhznTphGg&usqp=CAU",
        //     selected: false,
        //     name: "Side planks",
        //     weight: '90.2 kg'
        // },
    ]);
    const [shoolUniform, setShooluniform] = useState([

        {
            selected: false,
            name: "Side planks",
            weight: '90.2 kg',
            image: 'https://s3-alpha-sig.figma.com/img/647e/9082/d62225089e2287ba8735d396668134f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsbFYROynadwpurEgkQxO8FfmY1Mu9gtogwk9zY4XussxoAhN4OwuEvSd0m~5d6B2YcxXR0AoPzB7NK6Q~XcdMNOpyuanIKtZrRRFOcRqOVzK4b8t1DiR7RekBSBzzSY8LXDqSRoko~wxgfL6RawSXRtEg41UX2FvbT5biFKvRWnjXQuS~AKilRsTrybsCzCi29-tPOGbgvCoNvOgWiCT1NGG8jP8wYaGhISgNkELLPDFF45FqdgyxmExzi90PBAAYQOmB8OEiM6U1LOyZLBDwzAWumtwjJgT8A1JUH~KZ4OxlYe46HRQC8hVrKOp5CrX200DYEhQyPTJV~l3krZow__'

        },
        {
            selected: false,
            name: "Side planks",
            weight: '90.2 kg',
            image: 'https://s3-alpha-sig.figma.com/img/5705/12f8/217afe989cbb714d73c8b62d1b935424?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iVLq0dSPqb3BaRu9gUsLiiHqsBtXeE4p0oVjyVmYJ5xezjm6RVq4YxJ25meXFgAeLieSliiYnK53LPckh~CFHr2-8a-oalJNjQAnH89vXo1V1yT6krpJkbDjM5uQ-SGczXxeigOAVw-MqKYuow3MqRC37lKf~6P~XrNia2XKEyNX3M98lH~nm7FunALBT6k3NYEGhzAk87lUI9gd1MbEw1QQvuUBSWcNCkqfL61JQu2wEMxghi184SY5ZJ-ZopAjTOT~TigIxzbz-Tg07gQtjV3vC43evUj9e2wDAeV5tysO554uuJIHNDK45WlGTSuX6SuBT4LB8marY0OyxNzFkA__'
        },
    ]);



    const renderMeal = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => (
                    navigation.navigate('RecipeDetails')
                )}
                style={[
                    // GlobalStyle?.paddingHorizontal10
                    , {

                    }]}
            >
                <Image
                    style={{
                        width: 133,
                        height: 160,
                        borderRadius: 15,
                        // resizeMode: 'contain'
                    }}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVZGD9eRFJ4tVs_mnQaxuxTQrrD2T8Czo_w&usqp=CAU'
                    }}

                >

                </Image>
                <LinearGradient
                    colors={['#00000090', '#00000090', 'black']}
                    style={{
                        // flex: 1,
                        width: '100%',
                        height: 50,
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        left: 0,
                        paddingHorizontal: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        // alignItems:'center'
                    }}>
                    <Text
                        style={[
                            GlobalStyle?.fontSize16,
                            GlobalStyle?.marginTop, {
                                fontFamily: FONTS?.medium,
                                color: COLORS?.colorPrimary
                            }
                        ]}>
                        monday
                    </Text>

                </LinearGradient>

            </TouchableOpacity>
        );

    };

    const renderSchoolShop = ({ item }) => {
        return (
            <TouchableOpacity
                // onPress={handleWorkoutButtonClick}
                style={[
                    // GlobalStyle?.marginHorizontal10
                    , {
                        flex: 1,
                        width: '100%',


                    }]}
            >
                <ImageBackground
                    style={{
                        width: '100%',
                        height: 200,
                    }}
                    resizeMode='contain'
                >
                    <Image
                        style={{
                            width: '100%',
                            height: 196,
                            borderRadius: 12,
                            // resizeMode: 'contain'
                        }}
                        source={{
                            uri: item?.image
                        }}

                    >
                    </Image>
                    <View
                        style={{
                            // width:50,
                            // height:25,
                            borderRadius: 10,
                            backgroundColor: COLORS?.black,
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            top: 8,
                            left: 10,
                            padding: 5
                        }}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize13,
                                GlobalStyle?.colorWhite, {
                                    fontFamily: FONTS?.semi_bold
                                }
                            ]}
                        >-20%</Text>
                    </View>
                    <ToolBarIcon
                        title={AntDesign}
                        iconName={'hearto'}
                        icSize={15}
                        // borderWidth={0.5}
                        icColor={COLORS?.colorBtn}
                        style={{
                            backgroundColor: COLORS?.white,
                            // elevation: 5,
                            // borderWidth: 0.5,
                            borderRadius: 20,
                            borderColor: COLORS?.gray,
                            elevation: 5,
                            position: 'absolute',
                            bottom: -20,
                            right: -10
                        }}
                    // onPress={() => {
                    //     // navigation.goBack()
                    // }}

                    />
                </ImageBackground>
                <View
                    style={{
                        flex: 1,
                        marginTop: 5
                    }}
                >
                    <Image
                        source={images?.rating}
                    />
                    <Text
                        style={[
                            GlobalStyle?.fontSize13,
                            GlobalStyle?.colorGray,
                            {
                                fontFamily: FONTS?.extra_light
                            }
                        ]}
                    >Dorothy Perkins</Text>

                    <Text
                        style={[
                            GlobalStyle?.fontSize16, {
                                fontFamily: FONTS?.medium
                            }
                        ]}
                    >School Dress</Text>
                    <View
                        style={[
                            // GlobalStyle?.flexRowAlignCenter,
                            {
                                alignItems: 'center',
                                flexDirection: 'row',
                            }
                        ]}
                    >

                        <Text
                            style={[
                                GlobalStyle?.fontSize16,
                                {
                                    fontFamily: FONTS?.medium,
                                }
                            ]}
                        >200</Text>
                        <Text
                            style={[
                                GlobalStyle?.fontSize13,
                                // GlobalStyle?.marginLeft5,
                                GlobalStyle?.marginTop3,
                                {
                                    color: COLORS?.green,
                                    fontFamily: FONTS?.semi_bold
                                }
                            ]}
                        >AED</Text>
                    </View>
                </View>

            </TouchableOpacity>
        );

    };
    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                GlobalStyle?.paddingHorizontal10,

                {


                }
            ]}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[
                    // GlobalStyle?.paddingHorizontal10
                ]}
            >

                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        {
                            flex: 1,
                            marginTop: 50,
                        }
                    ]}
                >
                    <Image
                        source={images?.schoolLogo}
                        style={{
                            width: 80,
                            height: 80,
                            marginRight: 15
                        }}
                    />
                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            {
                                flex: 1,
                            }
                        ]}
                    >

                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize22,
                                    {
                                        fontFamily: FONTS?.semi_bold
                                    }

                                ]}
                            >Ali</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    GlobalStyle?.marginTop,
                                    {
                                        fontFamily: FONTS?.regular
                                    }

                                ]}
                            >ID:56456462</Text>
                        </View>
                        <View
                            style={[
                                // GlobalStyle?.flexRowAlignCenter,
                                {
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }
                            ]}
                        >

                            <Text
                                style={[
                                    GlobalStyle?.fontSize25,
                                    {
                                        fontFamily: FONTS?.bold,
                                        fontSize: 30
                                    }

                                ]}
                            >200</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.marginLeft5,
                                    GlobalStyle?.marginTop3,
                                    {
                                        color: COLORS?.green,
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}
                            >AED</Text>
                        </View>
                    </View>
                </View>


                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn,
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
                    >Statics</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('StaticsView')
                        }}
                    >
                        <Text
                            // StaticsView
                            style={[
                                GlobalStyle?.fontSize16,
                                GlobalStyle?.textUnderLine,

                                {
                                    fontFamily: FONTS?.regular,
                                    marginTop: 15
                                }
                            ]}
                        >View</Text>
                    </TouchableOpacity>
                </View>


                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.commaonBorder,
                        GlobalStyle?.marginTop15,

                        {
                            flex: 1,
                        }
                    ]}
                >

                    <View
                        style={[
                            // GlobalStyle?.flexRowJustifyBtwn,
                            {
                                flex: 1,
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
                                    GlobalStyle?.fontSize20,
                                    {
                                        fontFamily: FONTS?.semi_bold
                                    }

                                ]}
                            >Monday, </Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    GlobalStyle?.marginTop5,
                                    {
                                        fontFamily: FONTS?.light
                                    }

                                ]}
                            >24th january</Text>
                        </View>
                        <View
                            style={[
                                GlobalStyle?.flexRowAlignCenter,
                                {
                                    // alignItems: 'center',
                                    // flexDirection: 'row',
                                }
                            ]}
                        >

                            <Text
                                style={[
                                    GlobalStyle?.fontSize25,
                                    {
                                        fontFamily: FONTS?.regular,
                                        fontSize: 50,
                                        color: COLORS?.colorPrimary
                                    }

                                ]}
                            >1654</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize20,
                                    GlobalStyle?.marginLeft5,
                                    GlobalStyle?.marginTop,
                                    {
                                        color: COLORS?.grey,
                                        fontFamily: FONTS?.regular
                                    }
                                ]}
                            >Kcal</Text>
                        </View>
                    </View>
                    <Image
                        source={icons?.eclips}
                        style={{
                            width: 120,
                            height: 120,
                            // marginRight: 15
                        }}
                    />
                </View>


                <View
                    style={[
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
                    >Today Meal</Text>

                </View>


                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[
                        // GlobalStyle?.flexRowAlignCenter,
                        {
                            // flex: 1,
                            alignItems: 'center'
                        }
                    ]}
                >
                    <FlatList
                        horizontal
                        // showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            // flex: 1,
                            // paddingLeft: 10,
                            paddingRight: 10,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                        data={data}
                        renderItem={renderMeal}

                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Recipes')
                        }}
                    >

                        <Image
                            source={images?.addPreOrder}
                            style={{
                                width: 135,
                                height: 160,
                                borderRadius: 15,
                                marginTop: 5
                                // resizeMode:'contain'
                            }}
                        />
                    </TouchableOpacity>


                </ScrollView>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('CanteenSupplier')
                    }}
                    // CanteenSupplier
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.commaonBorder,
                        {
                            flex: 1,
                            marginTop: 50,
                            borderColor: COLORS?.colorPrimary,
                            borderWidth: 1,
                            backgroundColor: "white"
                        }
                    ]}
                >
                    <Image
                        source={images?.profile}
                        style={{
                            width: 55,
                            height: 55,
                            marginRight: 10,
                            borderRadius: 50
                        }}
                    />
                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            {
                                flex: 1,
                            }
                        ]}
                    >

                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18,
                                    {
                                        fontFamily: FONTS?.semi_bold
                                    }

                                ]}
                            >Khalid bin samad</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    // GlobalStyle?.marginTop,
                                    {
                                        fontFamily: FONTS?.regular
                                    }

                                ]}
                            >Canteen Supplier</Text>
                        </View>

                        <AntDesign
                            name="right"
                            size={22}
                            color={COLORS?.colorBtn}
                        />

                    </View>
                </TouchableOpacity>

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
                    >School Shop</Text>
                    <Text
                        style={[
                            GlobalStyle?.fontSize14,
                            GlobalStyle?.textUnderLine,

                            {
                                fontFamily: FONTS?.regular,
                                marginTop: 15
                            }
                        ]}
                    >View All</Text>
                </View>

                <FlatList
                    // showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        // flex: 1,
                        // paddingLeft: 10,
                        paddingRight: 10,
                        paddingBottom: 10,
                        paddingTop: 15,
                    }}
                    numColumns={2}
                    data={shoolUniform}
                    renderItem={renderSchoolShop}
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
                    >Canteen Returns</Text>
                </View>
                <View
                    style={[
                        GlobalStyle?.commaonBorder, {
                            paddingHorizontal: 0,
                            paddingVertical: 5
                        }
                    ]}
                >
                    <Picker
                        selectedValue={selectedItem}
                        onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
                    // style={styles.picker}
                    >
                        <Picker.Item label="Canteen" value="Canteen" />
                        <Picker.Item label="Other option 1" value="Option1" />
                        <Picker.Item label="Other option 2" value="Option2" />
                    </Picker>
                </View>
                <View
                    style={{
                        marginBottom: 30,
                        flex: 1
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default CanteenSchool;
const styles = StyleSheet.create({
    switchIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 10
    },
});