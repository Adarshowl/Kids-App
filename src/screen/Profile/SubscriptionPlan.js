import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
    Image

} from 'react-native';
import CustomHeader from '../../global/CustomHeader';
import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';

import GlobalStyle from '../../styles/GlobalStyle';
import CommHeader from '../../global/CommHeader';
import images from '../../constants/images';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';


const SubscriptionPlan = ({ navigation }) => {
    const [data, setData] = useState([


        {
            image: images.workOut2,
            selected: false,
            name: "$124",
            id: 1

        }


    ]);

    const renderSubscription = ({ item }) => {
        return (
            <LinearGradient
                colors={[COLORS?.primary1, COLORS?.primary3]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                    GlobalStyle?.mainContainer,
                    // GlobalStyle?.marginHorizontal5,
                    GlobalStyle?.paddingHorizontal5,
                    GlobalStyle?.marginVertical5,

                    // GlobalStyle?.marginTop
                    , {
                        width: '100%',
                        // height: 170,
                        borderRadius: 8,
                        borderWidth: 1,
                        marginVertical: 5,
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderColor: COLORS?.customColor,

                        // padding:25,
                        elevation: 2


                    }]}
            >
                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.marginHorizontal5,
                        GlobalStyle?.marginVertical10,

                    ]}>
                    <View
                        style={[
                            GlobalStyle?.flexRowAlignCenter
                        ]}
                    >
                        <Text style={[
                            GlobalStyle?.fontSize30,{
                                color:COLORS?.white
                            }
                        ]}>{item?.id}</Text>
                        <Text
                            style={[
                                GlobalStyle?.fontSize16,
                                {
                                    marginLeft: 5,
                                    color:COLORS?.white

                                }
                            ]}
                        >month</Text>

                    </View>
                    <View>
                        <Text
                            style={[
                                GlobalStyle?.fontSize30,
                                GlobalStyle?.marginRight,
                                {
                                    color:COLORS?.white

                                }
                            ]}>{item?.name}00</Text>
                    </View>
                </View>

                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.marginHorizontal5,
                        GlobalStyle?.marginVertical10,

                    ]}>
                    <View style={[
                        // GlobalStyle?.marginHorizontal10,
                        // GlobalStyle?.marginTop15,
                        {
                            flex: 1
                        }
                    ]}>
                        <KidsAppBorderWidthBtn
                            height={30}
                            width={80}
                            borderRadius={15}
                            // marginTop={30}
                            textSize={14}
                            borderColor={COLORS?.gray}

                            textColor={COLORS?.black}
                            text={('Save 5%')}
                            backgroundColor={COLORS?.white}
                            onPress={() => {
                                navigation.navigate('ChoosePlan');
                                // languageRestart();
                            }}
                            textStyle={{
                                fontFamily: FONTS?.semi_bold,
                                color: COLORS.colorPrimary,
                            }}
                        />
                    </View>
                    <View>
                        <Text
                            style={[
                                GlobalStyle?.fontSize16,
                                GlobalStyle?.marginRight,
                                {
                                    color:COLORS?.white

                                }
                            ]}>$100/ month</Text>
                    </View>


                </View>



            </LinearGradient>
        );
    };

    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer
            ]}
        >
            <ScrollView
            >
                <View
                    style={[
                        GlobalStyle?.marginHorizontal5,
                        GlobalStyle?.marginTop15
                    ]}
                >

                    <FlatList
                        // horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            flex: 1,
                            paddingLeft: 10,
                            paddingRight: 10,
                            // paddingBottom: 10,
                            paddingTop: 15,
                        }}
                        data={
                            data
                        }
                        renderItem={renderSubscription}

                    />

                </View>



            </ScrollView>


        </SafeAreaView>
    );
};

export default SubscriptionPlan;
const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: '100%',
        height: 600,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(80, 190, 180, 0)', // Adjust opacity as needed
    },
});
