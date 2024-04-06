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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../../global/Header';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import CustomButtomModal from '../../global/CustomButtomModal';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import LinearGradient from 'react-native-linear-gradient';


const NotificationSchool = ({ navigation }) => {


    const [data, setData] = useState([

        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjm_YL7BVSs5QCV5Z85ZO7s-1LYhznTphGg&usqp=CAU",
            selected: false,
            name: "Side planks",
            weight: '90.2 kg'
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjm_YL7BVSs5QCV5Z85ZO7s-1LYhznTphGg&usqp=CAU",
            selected: false,
            name: "Side planks",
            weight: '90.2 kg'
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjm_YL7BVSs5QCV5Z85ZO7s-1LYhznTphGg&usqp=CAU",
            selected: false,
            name: "Side planks",
            weight: '90.2 kg'
        },
    ]);



    const renderSchoolShop = ({ item }) => {
        return (
            <TouchableOpacity
                // onPress={handleWorkoutButtonClick}
                style={[
                    // GlobalStyle?.marginHorizontal10
                    , {
                        flex: 1,
                        width: 23

                    }]}
            >
                <Image
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 50,
                        // resizeMode: 'stretch'
                    }}
                    source={{
                        uri: item?.image
                    }}

                >
                </Image>
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
                    >18, March 2024</Text>

                </View>


                <View
                    style={[
                        // GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.commaonBorder,
                        GlobalStyle?.marginTop15,

                        {
                            flex: 1,
                            paddingHorizontal: 0
                        }
                    ]}
                >
                    <View
                        style={[
                            GlobalStyle?.paddingHorizontal15
                        ]}
                    >
                        <View
                            style={[
                                GlobalStyle?.flexRowAlignCenter
                            ]}
                        >
                            <Image
                                source={icons?.noticationEye}
                                style={{
                                    width: 50,
                                    height: 50,
                                    // marginRight: 15
                                }}
                            />
                            <View
                                style={[
                                    GlobalStyle?.marginLeft
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize18, {
                                            fontFamily: FONTS?.medium
                                        }
                                    ]}
                                >Greenfield High PVT School</Text>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize13,
                                        GlobalStyle?.marginTop3,

                                        {
                                            fontFamily: FONTS?.regular
                                        }
                                    ]}
                                >Nov 18, 2023 - 10:00PM</Text>
                            </View>
                        </View>

                        <Text
                            style={[
                                GlobalStyle?.fontSize14,
                                GlobalStyle?.marginTop15,
                                GlobalStyle?.marginRight,

                                {
                                    fontFamily: FONTS?.regular
                                }
                            ]}
                        >Sarah needs medical care please call us
                            urgently.</Text>
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
                            // numColumns={2}
                            data={data}
                            renderItem={renderSchoolShop}
                        />
                    </View>
                    <View
                        style={[
                            GlobalStyle?.line, {
                                paddingHorizontal: 0
                            }
                        ]}
                    />
                    <View
                        style={[
                            GlobalStyle?.marginTop,
                            GlobalStyle?.flexAlignJustifyCenter,
                            GlobalStyle?.flexRowAlignCenter,
                            {

                            }
                        ]}
                    >
                        <MaterialIcons
                            name="phone"
                            size={25}
                            color={COLORS?.green}
                            style={{
                                marginRight: 10
                            }}
                        />
                        <Text
                            style={[
                                GlobalStyle?.fontSize16, {
                                    color: COLORS?.green,
                                    fontFamily: FONTS?.medium
                                }
                            ]}
                        >Call Now</Text>
                    </View>
                </View>

                <View
                    style={[
                        // GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.commaonBorder,
                        GlobalStyle?.marginTop15,

                        {
                            flex: 1,
                            paddingHorizontal: 0
                        }
                    ]}
                >
                    <View
                        style={[
                            GlobalStyle?.paddingHorizontal15
                        ]}
                    >
                        <View
                            style={[
                                GlobalStyle?.flexRowAlignCenter
                            ]}
                        >
                            <Image
                                source={icons?.noticationEye}
                                style={{
                                    width: 50,
                                    height: 50,
                                    // marginRight: 15
                                }}
                            />
                            <View
                                style={[
                                    GlobalStyle?.marginLeft
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize18, {
                                            fontFamily: FONTS?.medium
                                        }
                                    ]}
                                >Greenfield High PVT School</Text>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize13,
                                        GlobalStyle?.marginTop3,

                                        {
                                            fontFamily: FONTS?.regular
                                        }
                                    ]}
                                >Nov 18, 2023 - 10:00PM</Text>
                            </View>
                        </View>

                        <Text
                            style={[
                                GlobalStyle?.fontSize14,
                                GlobalStyle?.marginTop15,
                                GlobalStyle?.marginRight,

                                {
                                    fontFamily: FONTS?.regular
                                }
                            ]}
                        >Check you kids images for the annual day
                            celebration please.</Text>

                        <View>
                            <Image
                                source={{
                                    uri: 'https://s3-alpha-sig.figma.com/img/5627/3bba/a76ad31df7aab740086afd62716c443d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ncg2adjZi~FlNAcZEDgEK0BU6KcAJ7QG9MubLWcmnLC2rr3PoU2kd5~yt~twX8YwS3d5vazImSz~6PJ3OW4TMKBth5p5n3OIZ16Ra7yAfpoHQz49MEY56BFakVpUuGHA0WSUJZRGMEdQDxHWtCrOaMaHDZo28p1O8V72M4FjngrWxqCUcYrIpjtpsBF2XxaDpZODbGZBB6XlPRLGB2OFVsjMjpU03WWxkOogUf3uFvX184EwrV-G2IAM53waYmE2zuOiV7xql52fZKeW1zM2MNAcPYy2HKULnhVwK0u-lx0r5-cjBYDMQuYxFEYyW8qQJi-ErwS4tJKqlXj3vnrvEQ__'
                                }}
                                style={{
                                    width: '100%',
                                    height: 150,
                                    borderRadius: 10,
                                    marginVertical: 20
                                }}
                            />
                        </View>
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
                            // numColumns={2}
                            data={data}
                            renderItem={renderSchoolShop}
                        />
                    </View>
                    <View
                        style={[
                            GlobalStyle?.line, {
                                paddingHorizontal: 0
                            }
                        ]}
                    />
                    <View
                        style={[
                            GlobalStyle?.marginTop,
                            GlobalStyle?.flexAlignJustifyCenter,
                            GlobalStyle?.flexRowAlignCenter,
                            {

                            }
                        ]}
                    >
                        <MaterialIcons
                            name="remove-red-eye"
                            size={25}
                            color={COLORS?.red}
                            style={{
                                marginRight: 10
                            }}
                        />
                        <Text
                            style={[
                                GlobalStyle?.fontSize16, {
                                    color: COLORS?.red,
                                    fontFamily: FONTS?.medium
                                }
                            ]}
                        >View</Text>
                    </View>
                </View>

                <View
                    style={[
                        // GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.commaonBorder,
                        GlobalStyle?.marginTop15,

                        {
                            flex: 1,
                            paddingHorizontal: 0
                        }
                    ]}
                >
                    <View
                        style={[
                            GlobalStyle?.paddingHorizontal15
                        ]}
                    >
                        <View
                            style={[
                                GlobalStyle?.flexRowAlignCenter
                            ]}
                        >
                            <Image
                                source={icons?.noticationEye}
                                style={{
                                    width: 50,
                                    height: 50,
                                    // marginRight: 15
                                }}
                            />
                            <View
                                style={[
                                    GlobalStyle?.marginLeft
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize18, {
                                            fontFamily: FONTS?.medium
                                        }
                                    ]}
                                >Greenfield High PVT School</Text>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize13,
                                        GlobalStyle?.marginTop3,

                                        {
                                            fontFamily: FONTS?.regular
                                        }
                                    ]}
                                >Nov 18, 2023 - 10:00PM</Text>
                            </View>
                        </View>

                        <Text
                            style={[
                                GlobalStyle?.fontSize14,
                                GlobalStyle?.marginTop15,
                                GlobalStyle?.marginRight,

                                {
                                    fontFamily: FONTS?.regular
                                }
                            ]}
                        >Kindly pay the next week zoo trip fee</Text>
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
                            // numColumns={2}
                            data={data}
                            renderItem={renderSchoolShop}
                        />
                    </View>
                    <View
                        style={[
                            GlobalStyle?.line, {
                                paddingHorizontal: 0
                            }
                        ]}
                    />
                    <View
                        style={[
                            GlobalStyle?.marginTop,
                            GlobalStyle?.flexAlignJustifyCenter,
                            GlobalStyle?.flexRowAlignCenter,
                            {

                            }
                        ]}
                    >
                        <Image
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/128/3037/3037247.png'
                            }}
                            style={{
                                width: 22,
                                height: 22,
                                marginRight: 15,
                                tintColor: COLORS?.green
                            }}
                        />
                        <Text
                            style={[
                                GlobalStyle?.fontSize14, {
                                    color: COLORS?.green,
                                    fontFamily: FONTS?.semi_bold
                                }
                            ]}
                        >Pay 120</Text>
                        <Text
                            style={[
                                GlobalStyle?.fontSize13, {
                                    color: COLORS?.green,
                                    fontFamily: FONTS?.semi_bold,
                                    marginTop: 2,
                                    fontSize: 10,
                                    marginLeft: 3
                                }
                            ]}
                        >
                            AED
                        </Text>
                    </View>
                </View>

                <View
                    style={[
                        // GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.commaonBorder,
                        GlobalStyle?.marginTop15,

                        {
                            flex: 1,
                            paddingHorizontal: 0
                        }
                    ]}
                >
                    <View
                        style={[
                            GlobalStyle?.paddingHorizontal15
                        ]}
                    >
                        <View
                            style={[
                                GlobalStyle?.flexRowAlignCenter
                            ]}
                        >
                            <Image
                                source={icons?.noticationEye}
                                style={{
                                    width: 50,
                                    height: 50,
                                    // marginRight: 15
                                }}
                            />
                            <View
                                style={[
                                    GlobalStyle?.marginLeft
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize18, {
                                            fontFamily: FONTS?.medium
                                        }
                                    ]}
                                >Greenfield High PVT School</Text>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize13,
                                        GlobalStyle?.marginTop3,

                                        {
                                            fontFamily: FONTS?.regular
                                        }
                                    ]}
                                >Nov 18, 2023 - 10:00PM</Text>
                            </View>
                        </View>

                        <Text
                            style={[
                                GlobalStyle?.fontSize14,
                                GlobalStyle?.marginTop15,
                                GlobalStyle?.marginRight,

                                {
                                    fontFamily: FONTS?.regular
                                }
                            ]}
                        >Kindly pay the next week zoo trip fee</Text>
                        <FlatList
                            horizontal
                            // showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                // flex: 1,
                                // paddingLeft: 10,
                                paddingRight: 10,
                                // paddingBottom: 10,
                                paddingTop: 15,
                            }}
                            // numColumns={2}
                            data={data}
                            renderItem={renderSchoolShop}
                        />

                        <Image
                            source={images?.readframe}
                            style={{
                                width: 240,
                                height: 45,
                                marginRight: 15,
                                resizeMode: 'contain',
                                marginVertical: 20
                            }}
                        />
                    </View>
                    <View
                        style={[
                            GlobalStyle?.line, {
                                paddingHorizontal: 0
                            }
                        ]}
                    />
                    <View
                        style={[
                            GlobalStyle?.marginTop,
                            GlobalStyle?.flexAlignJustifyCenter,
                            GlobalStyle?.flexRowAlignCenter,
                            {

                            }
                        ]}
                    >
                        <Image
                            source={images?.read}
                            style={{
                                width: 22,
                                height: 22,
                                marginRight: 15,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text
                            style={[
                                GlobalStyle?.fontSize16, {
                                    color: '#FFBB30',
                                    fontFamily: FONTS?.medium
                                }
                            ]}
                        >Read</Text>

                    </View>
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

export default NotificationSchool;
const styles = StyleSheet.create({
    switchIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 10
    },
});