import React, { useContext, useEffect, useState } from 'react';
import {
    FlatList,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS } from '../../constants/Colors';
import { SIZES, STRING } from '../../constants';
import GlobalStyle from '../../styles/GlobalStyle';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import themeContext from '../../constants/themeContext';
import ToolBarIcon from '../../utils/ToolBarIcon';
import { FONTS } from '../../constants/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Image } from 'react-native';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import icons from '../../constants/icons';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import { ShowToastMessage } from '../../utils/Utility';
import { GroceryListSkel } from '../../utils/Skeleton';

const Grocery = () => {

    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const [data1, setData1] = useState([
        {
            selected: false,
            name: "Tomato saup",
            id: 1,
            weight: '67.2 kg',
            tittle: 'Meal-1',
        },
        {
            selected: false,
            name: "Parsley",
            weight: '90.2 kg',
            tittle: 'Meal-2',
            id: 2,


        },
        {

            selected: false,
            name: "Rice",
            weight: '90.2 kg',
            tittle: 'Meal-3',
            id: 3,

        },
        {

            selected: false,
            name: "Olive oil",
            weight: '90.2 kg',
            tittle: 'Meal-4',
            id: 4,

        },
    ]);


    const handlePress = (itemId) => {
        const updatedData = data1.map(item => {
            if (item.id === itemId) {
                return { ...item, selected: true };
            } else {
                return { ...item, selected: false };
            }
        });
        setData1(updatedData);
    };
    const renderItem = ({ item, index }) => {
        if (isLoading) {
            return <GroceryListSkel />;
        } else {
            return (
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handlePress(item.id)}

                    style={[
                        GlobalStyle?.mainContainer,
                        GlobalStyle?.flexRowAlignCenter,
                        GlobalStyle?.paddingVertical15,
                        GlobalStyle?.marginVertical10,

                        , {
                            width: '100%',
                            borderRadius: 12,
                            paddingHorizontal: 15,
                            borderWidth: 0.5,
                            borderColor: COLORS?.gray,
                            paddingVertical: 20
                        }]}
                >

                    <TouchableOpacity
                        style={{
                            marginRight: 15
                        }}
                        onPress={() => handlePress(item.id)}

                    >
                        {
                            item?.selected ? (
                                <Image
                                    source={icons?.check}
                                    style={{
                                        width: 22,
                                        height: 22
                                    }}
                                />
                            ) :
                                <MaterialIcons
                                    name={'radio-button-unchecked'}
                                    size={25}
                                    color={COLORS?.gray}
                                />
                        }

                    </TouchableOpacity>



                    <View
                        style={[
                            GlobalStyle?.marginHorizontal5,
                            GlobalStyle?.marginLeft15,

                        ]}>

                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18,

                                    {
                                        fontFamily: FONTS?.regular
                                    }
                                ]}>{item?.name}</Text>
                        </View>




                    </View>
                </TouchableOpacity>
            );
        }
    };

    return (
        <View
            style={[
                GlobalStyle.mainContainer,
                {
                    backgroundColor: COLORS?.dalColor,
                    // marginTop: 15,
                    flex: 1

                },
            ]}>
            <View
                style={[
                    GlobalStyle?.marginHorizontal5,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.marginTop15,
                    GlobalStyle?.flexRowJustifyBtwn, {
                    }
                ]}
            >

                <View
                    style={[
                        GlobalStyle?.flexRowAlignCenter
                    ]}
                >
                    <ToolBarIcon
                        title={MaterialIcons}
                        iconName={'arrow-back-ios-new'}
                        icSize={25}
                        icColor={COLORS?.black}
                        style={{
                            backgroundColor: COLORS?.white,
                            // borderRadius: 30,
                            // width: 25,
                            // height: 25,
                            elevation: 5

                        }}

                    />
                    <Text
                        style={[
                            GlobalStyle?.fontSize22,
                            GlobalStyle?.marginLeft15, {
                                fontFamily: FONTS?.bold
                            }
                        ]}
                    >
                        Grocery List
                    </Text>
                </View>

            </View>
            <ScrollView
                style={{
                    flex: 1,
                    // marginHorizontal: 10
                }}
            >


                <View
                    style={[
                        GlobalStyle?.marginHorizontal15,
                        // GlobalStyle?.marginVertical15,
                        {
                            // backgroundColor:COLORS?.dalColor
                        }
                    ]}
                >

                    <FlatList
                        style={{
                            // flex: 1,
                            marginHorizontal: 8,
                        }}
                        ListEmptyComponent={isLoading ? GroceryListSkel : null}

                        showsVerticalScrollIndicator={false}
                        data={data1}
                        extraData={data1}
                        renderItem={renderItem}
                    />
                </View>

            </ScrollView>
            <View
                style={[
                    GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.marginVertical15
                ]}
            >
                <KidsAppCommBtn
                    height={55}
                    width={'100%'}
                    borderRadius={30}
                    marginTop={30}
                    textSize={17}
                    borderWidth={2}
                    iconPosition={'left'}
                    icon={
                        <Ionicons
                            name='add'
                            size={30}
                            color={COLORS?.white}
                            style={{
                                marginRight: 15
                            }}
                        />
                    }
                    borderColor={COLORS?.customColor}

                    textColor={COLORS?.white}
                    text={('Add more ingredients')}
                    backgroundColor={COLORS?.white}
                    onPress={() => {
                        navigation.navigate('Recipes');
                    }}
                    textStyle={{
                        fontFamily: FONTS?.semi_bold,
                        color: COLORS.colorPrimary,
                    }}
                />

                <KidsAppBorderWidthBtn
                    height={55}
                    width={'100%'}
                    borderRadius={30}
                    marginTop={30}
                    textSize={17}
                    borderWidth={2}

                    borderColor={COLORS?.bg_gray}

                    textColor={COLORS?.grey}
                    text={('Remove')}
                    backgroundColor={COLORS?.drak_gray}
                    onPress={() => {
                        ShowToastMessage('Please select ingredients to remove')
                    }}
                    textStyle={{
                        fontFamily: FONTS?.medium,
                    }}
                />
            </View>
        </View>
    );
};
export default Grocery;

const styles = StyleSheet.create({

});
