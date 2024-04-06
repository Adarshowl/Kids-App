import React, { useState, useRef, useEffect } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
    Image

} from 'react-native';
import CustomHeader from '../../global/CustomHeader';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { Picker } from '@react-native-picker/picker';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GlobalStyle from '../../styles/GlobalStyle';
import CommHeader from '../../global/CommHeader';
import images from '../../constants/images';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import icons from '../../constants/icons';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import CustomBottomSheet from '../../global/CustomBottomSheet';
import { OfferSkeleton, ShimmerView } from '../../utils/Skeleton';


const Progress = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);

    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

    const openBottomSheet = () => {
        setBottomSheetVisible(true);
    };

    const closeBottomSheet = () => {
        setBottomSheetVisible(false);
    };
    const [data, setData] = useState([
        {
            selected: true,
            image: "data:image/jpeg;base64,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",

            name: "Build Muscle",
            id: 1,
            weight: '67.2 kg'
        },
        {
            image: icons?.home,
            selected: false,
            name: "Weight Gain",
            id: 5,
            weight: '90.2 kg'
        },
    ]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const [selectedWeight, setSelectedWeight] = useState([]);
    const handleselet = selectedItems => {
        setSelectedWeight(selectedItems);
    };

    const weight = [
        { name: 'Body Weight Progress', id: 1 },
        { name: 'Weight Lifting Progress', id: 2 },
    ];
    const renderContent = ({ item }) => {
        if (isLoading) {
            return <ShimmerView />;
        } else {
            return (
                <TouchableOpacity
                    onPress={() => {
                        openBottomSheet();

                    }}
                    style={[
                        GlobalStyle?.mainContainer,
                        GlobalStyle?.paddingHorizontal5,
                        GlobalStyle?.paddingVertical10,
                        GlobalStyle?.marginVertical10,
                        GlobalStyle?.paddingVertical10,

                        , {
                            width: '100%',
                            // height: 170,
                            borderRadius: 8,
                            // borderWidth: 0.2,
                            // marginHorizontal:5,
                            paddingHorizontal: 20,

                            borderColor: COLORS?.gray,
                            flexDirection: 'row',
                            // elevation: 5
                        }]}
                >

                    <Image
                        source={{
                            uri: 'data:image/jpeg;base64,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'
                        }}
                        style={{
                            width: 85, // Specify the width here
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
                        <View style={[
                            // GlobalStyle?.marginHorizontal10,
                            // GlobalStyle?.marginTop15,
                            {
                                // flex: 1
                            }
                        ]}>
                            <View>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize16,
                                        GlobalStyle?.marginRight,
                                        {
                                            fontFamily: FONTS?.semi_bold
                                        }
                                    ]}>{item?.name}00</Text>
                            </View>
                            {/* <KidsAppCommBtn
                                height={30}
                                width={80}
                                borderRadius={15}
                                // marginTop={30}
                                textSize={14}
                                borderColor={COLORS?.gray}

                                textColor={COLORS?.white}
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
                            /> */}
                        </View>
                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.marginTop,

                                    {
                                        color: COLORS?.grey
                                    }
                                ]}>$100/ month</Text>
                        </View>
                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.marginTop,

                                    {
                                        // color: COLORS?.grey
                                        fontSize: 13
                                    }
                                ]}>07/03/2024</Text>
                        </View>


                    </View>


                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            right: 10,
                            top: 30
                        }}
                    >
                        <MaterialIcons
                            name="arrow-forward-ios"
                            size={26}
                            color={
                                COLORS?.black
                            }
                        />
                    </View>
                </TouchableOpacity>
            );
        }
    };


    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer, {
                    backgroundColor: COLORS?.dalColor
                }
            ]}
        >
            <View
                style={[
                    GlobalStyle?.marginHorizontal15,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.flexRowJustifyBtwn,
                    GlobalStyle?.marginTop15, {

                    }
                ]}
            >
                <Text
                    style={[
                        GlobalStyle?.fontSize22, {
                            fontFamily: FONTS?.bold
                        }
                    ]}
                >
                    Progress
                </Text>
                <View
                    style={{
                        // flex:1,
                        borderRadius: 20,
                        // borderWidth: 0.2,
                        borderColor: COLORS?.black,
                        // flex: 0.5,
                        width: '60%',
                        height: 40,
                        // marginLeft: 60,
                        // alignItems:'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS?.white,
                        borderTopLeftRadius: 20
                        // elevation:3

                    }}
                >
                    <Picker
                        selectedValue={selectedWeight}
                        onValueChange={itemValue => handleselet(itemValue)}
                        mode="dropdown"
                    >
                        {weight.map(weight => (
                            <Picker.Item
                                label={weight.name}
                                value={weight.name}
                                key={weight.id}
                                style={{
                                    fontSize: 12,
                                    fontFamily: FONTS?.bold,
                                    color: COLORS?.black,
                                    maxHeight:10

                                    // height: 30,
                                }}
                            />
                        ))}
                    </Picker>
                </View>
            </View>


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
                        ListEmptyComponent={isLoading ? ShimmerView : null} // Show skeleton only when loading

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
                        renderItem={renderContent}

                    />

                </View>

                <View style={[
                    GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.marginTop15
                ]}>
                    <KidsAppBorderWidthBtn
                        height={55}
                        width={'100%'}
                        borderRadius={30}
                        marginTop={30}
                        textSize={17}
                        borderWidth={2}
                        iconPosition={'left'}
                        icon={
                            <AntDesign
                                name='plus'
                                size={25}
                                color={COLORS?.customColor}
                                style={{
                                    marginRight: 15
                                }}
                            />
                        }
                        borderColor={COLORS?.customColor}

                        textColor={COLORS?.customColor}
                        text={('Add Goal')}
                        backgroundColor={COLORS?.white}
                        onPress={() => {
                            // navigation.navigate('NewPlan');
                            openBottomSheet();
                        }}
                        textStyle={{
                            fontFamily: FONTS?.semi_bold,
                            color: COLORS.colorPrimary,
                        }}
                    />
                </View>
                <View
                    style={[
                        GlobalStyle?.marginVertical10
                    ]}
                />

            </ScrollView>

            <CustomBottomSheet
                isVisible={bottomSheetVisible}
                onClose={closeBottomSheet}
            />


        </SafeAreaView>
    );
};

export default Progress;
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
