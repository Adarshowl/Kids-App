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
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons'
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
import ToolBarIcon from '../../utils/ToolBarIcon';
import PreprationContent from '../../global/PreprationContent';
import { DetailsPageSkeleton } from '../../utils/Skeleton';
import Header from '../../global/Header';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import { ShowToastMessage } from '../../utils/Utility';
import CustomButtomModal from '../../global/CustomButtomModal';
import KidsAppEditTextComment from '../../utils/EditText/KidsAppEditTextComment';


const RecipeDetails = ({ navigation }) => {


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

    const [fav, setFva] = useState(false)
    const [selectedItem, setSelectedItem] = useState('Canteen');


    const [item, setItem] = useState([
        {
            selected: true,
            name: "Racking was torn when arrived",
            id: 1,
            tittle: 'Ask me before transferring Round Ups to General Saving',
            images: icons?.shopping,
            price: '55.00'

        },
        {
            selected: false,
            name: "No cutlery present",
            tittle: 'Always move Round Ups to General Savings',
            images: icons?.shopping,
            price: '15.00',
            id: 2

        },
        {
            selected: false,
            name: "Food item($) were missing",
            tittle: 'Never ask for Round Ups to be moved to General Savings',
            images: icons?.other,
            price: '10.00',
            id: 3

        },
        {
            selected: false,
            name: "Other....",
            tittle: 'Never ask for Round Ups to be moved to General Savings',
            images: icons?.other,
            price: '10.00',
            id: 4

        }

    ]);
    const [star, setStar] = useState([
        {
            images: icons?.star1,
        },
        {
            images: icons?.star1,
        },
        {
            images: icons?.star1,
        },
        {
            images: icons?.star,
        },
        {
            images: icons?.star,
        }

    ]);

    const handlePress = (itemId) => {
        const updatedData = item.map(item => {
            if (item.id === itemId) {
                return { ...item, selected: true };
            } else {
                return { ...item, selected: false };
            }
        });
        setItem(updatedData);
    };
    const renderItem1 = ({ item, index }) => {
        return (
            <View
                style={[

                ]}
            >
                <TouchableOpacity
                    onPress={() => handlePress(item.id)}

                    style={[
                        GlobalStyle?.mainContainer,
                        GlobalStyle?.paddingVertical10,
                        // GlobalStyle?.marginVertical10,

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

                    {item?.selected ? (
                        <Image
                            source={icons.checkBox}
                            style={{
                                width: 20,
                                height: 20,
                                resizeMode: 'contain',
                                // marginTop: 5
                            }} />
                    ) : (
                        <MaterialIcons
                            name='check-box-outline-blank'
                            size={20}
                            color={COLORS.gray}
                            style={{
                                // marginTop: 2
                            }}
                        />
                    )}
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
                                    // GlobalStyle?.marginTop5,

                                    {
                                        fontFamily: FONTS?.regular
                                    }
                                ]}>{item?.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        );
    };


    const renderStar = ({ item, index }) => {
        return (
            <View
                style={[
                    GlobalStyle?.marginHorizontal5
                    , {
                        // flex: 1
                    }]}
            >
                <Image
                    source={item?.images}
                    style={{
                        width: 40,
                        height: 40
                    }}
                />
            </View>
        );
    };

    const [data, setData] = useState([
        {
            selected: true,
            image: '',
            name: "Fish",
            id: 1,
            weight: '67.2 kg'
        },
        {
            image: icons?.home,
            selected: false,
            name: "Egg dish",
            id: 5,
            weight: '90.2 kg'
        },
        {
            image: icons?.home,
            selected: false,
            name: "Berries",
            id: 5,
            weight: '90.2 kg'
        },
    ]);

    const [ingredient, setIngredients] = useState([
        {
            selected: true,
            image: '',
            name: "Harm",
            id: 1,
            weight: '67.2 kg'
        },
        {
            selected: false,
            name: "Broccoli",
            id: 5,
            weight: '90.2 kg'
        },
        {
            selected: false,
            name: "Onion",
            id: 5,
            weight: '90.2 kg'
        },
        {
            selected: false,
            name: "Garlic",
            id: 5,
            weight: '90.2 kg'
        }, {
            selected: false,
            name: "Oil",
            id: 5,
            weight: '90.2 kg'
        }, {
            selected: false,
            name: "Salt",
            id: 5,
            weight: '90.2 kg'
        }, {
            selected: false,
            name: "Egg",
            id: 5,
            weight: '90.2 kg'
        },
    ]);
    const renderIngredient = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('RecipeDetails')
                }}
                style={[
                    // GlobalStyle?.mainContainer,
                    GlobalStyle?.paddingHorizontal5,
                    GlobalStyle?.paddingVertical10,
                    GlobalStyle?.marginVertical10,
                    GlobalStyle?.flexAlignJustifyCenter,

                    , {
                        flex: 1,
                        maxWidth: 80,
                        borderRadius: 20,
                        marginHorizontal: 5,
                        backgroundColor: item?.selected ? COLORS?.colorBtn : COLORS?.light_green
                    }]}
            >
                <View>
                    <Text
                        style={[
                            GlobalStyle?.fontSize13, {
                                fontFamily: FONTS?.semi_bold,
                                color: item?.selected ? COLORS?.white : COLORS?.black // Change text color based on selection

                            }

                        ]}
                    >{item?.name}</Text>

                </View>
            </TouchableOpacity>
        )
    }
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('RecipeDetails')
                }}
                style={[
                    // GlobalStyle?.mainContainer,
                    // GlobalStyle?.paddingHorizontal5,
                    GlobalStyle?.paddingVertical10,
                    GlobalStyle?.marginVertical10,
                    GlobalStyle?.flexAlignJustifyCenter,

                    , {
                        flex: 1,
                        width: 80,
                        // height: 170,
                        borderRadius: 10,
                        // borderWidth: 0.2,
                        marginHorizontal: 5,
                        // paddingHorizontal: 20,
                        // borderColor: COLORS?.gray,
                        backgroundColor: COLORS?.colorBtn

                    }]}
            >
                <View>
                    <Text
                        style={[
                            GlobalStyle?.fontSize14,
                            {
                                color: COLORS?.white,
                                fontFamily: FONTS?.semi_bold
                            }

                        ]}
                    >Kcal</Text>
                    <Text
                        style={[
                            GlobalStyle?.fontSize22,
                            GlobalStyle?.marginTop5, {
                                color: COLORS?.colorPrimary,
                                fontFamily: FONTS?.semi_bold
                            }
                        ]}
                    >52 g</Text>
                </View>



            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer
            ]}
        >
            <Header
                title="Today Meal"
            // onPressLeft={() => navigation.goBack(null)}
            />


            <ScrollView
            >
                {isLoading ? (
                    <DetailsPageSkeleton
                    // style={{ width: 100, height: 20 }}
                    // shimmerStyle={{ backgroundColor: COLORS.light_gray }}
                    />
                ) : (
                    <>
                        <View
                            style={[
                                GlobalStyle?.marginHorizontal5,
                                // GlobalStyle?.marginTop15
                            ]}
                        >

                            <View style={[
                                GlobalStyle?.marginHorizontal15,
                                GlobalStyle?.marginTop15
                            ]}>
                                <Image
                                    source={{
                                        uri: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/3/21/0/fnd_pasta-istock.jpg.rend.hgtvcom.1280.720.suffix/1490188710731.jpeg"

                                    }}
                                    style={{
                                        width: '100%',
                                        height: 200,
                                        borderRadius: 13,
                                        resizeMode: 'contain'
                                    }}
                                />

                                <View
                                    style={[
                                        // GlobalStyle?.flexRowJustifyBtwn,
                                        GlobalStyle?.marginTop15
                                    ]}
                                >
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize25, {
                                                fontFamily: FONTS?.medium
                                            }
                                        ]}
                                    >Veg-salad</Text>

                                </View>

                                <View
                                    style={[
                                        // GlobalStyle?.flexRowAlignCenter,
                                        GlobalStyle?.marginTop15
                                    ]}
                                >
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize14, {
                                                fontFamily: FONTS?.light
                                            }
                                        ]}
                                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

                                </View>

                                <View
                                    style={[
                                        GlobalStyle?.flexRowAlignCenter,
                                        GlobalStyle?.marginVertical15,

                                        {
                                        }
                                    ]}
                                >
                                    <KidsAppBorderWidthBtn
                                        height={28}
                                        width={70}
                                        borderRadius={18}
                                        marginTop={15}
                                        textSize={13}
                                        borderColor={COLORS?.gray}

                                        textColor={COLORS?.colorBtn}
                                        text={('Protein')}
                                        backgroundColor={COLORS?.light_green}
                                        onPress={() => {
                                            navigation.navigate('NewPlan');
                                            // languageRestart();
                                        }}
                                        textStyle={{
                                            fontFamily: FONTS?.semi_bold,
                                        }}
                                        style={{
                                            marginLeft: 30
                                        }}
                                    />
                                    <View
                                        style={[
                                            GlobalStyle?.marginLeft20
                                        ]}
                                    >
                                        <KidsAppBorderWidthBtn
                                            height={28}
                                            width={70}
                                            borderRadius={18}
                                            marginTop={15}
                                            textSize={13}
                                            borderColor={COLORS?.gray}

                                            textColor={COLORS?.colorBtn}
                                            text={('vegan')}
                                            backgroundColor={COLORS?.light_green}
                                            onPress={() => {
                                                navigation.navigate('NewPlan');
                                                // languageRestart();
                                            }}
                                            textStyle={{
                                                fontFamily: FONTS?.semi_bold,
                                                color: COLORS.colorPrimary,
                                            }}
                                        />
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
                                            GlobalStyle?.fontSize18, {
                                                fontFamily: FONTS?.semi_bold
                                            }
                                        ]}
                                    >Basic</Text>

                                </View>
                                <FlatList
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{
                                        // flex: 1,
                                        // paddingLeft: 10,
                                        paddingRight: 10,
                                        // paddingBottom: 10,
                                        paddingTop: 15,
                                        marginLeft: -5

                                    }}
                                    data={

                                        data
                                    }
                                    renderItem={renderItem}
                                />
                                <View
                                    style={[
                                        GlobalStyle?.flexRowJustifyBtwn,
                                        GlobalStyle?.marginTop15
                                    ]}
                                >
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize18, {
                                                fontFamily: FONTS?.semi_bold
                                            }
                                        ]}
                                    >Ingredient</Text>

                                </View>
                                <FlatList
                                    numColumns={4}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{
                                        // flex: 1,
                                        // paddingLeft: -15,
                                        paddingRight: 10,
                                        // paddingBottom: 10,
                                        paddingTop: 15,
                                        marginLeft: -5
                                    }}
                                    data={

                                        ingredient
                                    }
                                    renderItem={renderIngredient}

                                />
                                <View
                                    style={[
                                        GlobalStyle?.flexRowJustifyBtwn,
                                        GlobalStyle?.marginTop15,
                                        GlobalStyle?.paddingHorizontal5                                    ]}
                                >
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize18, {
                                                fontFamily: FONTS?.semi_bold
                                            }
                                        ]}
                                    >Preparation</Text>

                                </View>

                                <PreprationContent />

                            </View>

                            <View

                                style={[
                                    GlobalStyle?.marginHorizontal10,
                                    GlobalStyle?.marginTop15,
                                    GlobalStyle?.paddingHorizontal5
                                ]}>
                                <KidsAppCommBtn
                                    height={55}
                                    width={'100%'}
                                    borderRadius={15}
                                    marginTop={30}
                                    textSize={17}
                                    borderWidth={2}

                                    borderColor={COLORS?.customColor}

                                    textColor={COLORS?.white}
                                    text={('Give Review')}
                                    backgroundColor={COLORS?.white}
                                    onPress={() => {
                                        toggleModal();
                                    }}
                                    textStyle={{
                                        fontFamily: FONTS?.semi_bold,
                                        color: COLORS.colorPrimary,
                                    }}
                                />
                            </View>

                        </View>
                    </>
                )}

                <CustomButtomModal
                    visible={modalVisible}
                    toggleModal={toggleModal}
                    // buttonText="Save"
                    customView={

                        <View
                            activeOpacity={0.8}
                            // onPress={handlePress}
                            style={[
                                , {
                                    // padding: 10,
                                    paddingHorizontal: 20
                                }
                            ]}
                        >

                            <Text
                                style={[
                                    GlobalStyle?.fontSize22,
                                    {
                                        fontFamily: FONTS?.medium,
                                        marginTop: 20,
                                        textAlign: 'center'
                                    }
                                ]}
                            >
                                Give Review
                            </Text>
                            <Text

                                style={[
                                    GlobalStyle?.fontSize14,
                                    {
                                        fontFamily: FONTS?.light,
                                        marginTop: 10,
                                        marginBottom: 25,
                                        textAlign: 'center',
                                        paddingHorizontal: 10
                                    }
                                ]}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                            </Text>
                            <View
                                style={{
                                    borderWidth: 1.5,
                                    borderColor: COLORS?.black,
                                    width: '50%',
                                    alignSelf: 'center'
                                }}
                            />
                            <View
                                style={[
                                    GlobalStyle?.marginTop15
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize16,
                                        // GlobalStyle?.marginTop,
                                        {
                                            fontFamily: FONTS?.medium
                                        }

                                    ]}
                                >Rate our Canteen</Text>
                            </View>

                            <View
                                style={[
                                    // GlobalStyle?.alignJustifyCenter,
                                    GlobalStyle?.marginVertical10,
                                    {
                                        alignItems: 'center'
                                    }
                                ]}
                            >
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    style={{
                                        // flex: 1,
                                        // marginHorizontal: 8,
                                        marginTop: 15
                                    }}
                                    showsVerticalScrollIndicator={false}
                                    data={star}
                                    extraData={star}
                                    renderItem={renderStar}
                                />
                            </View>

                            <FlatList
                                style={{
                                    // flex: 1,
                                    // marginHorizontal: 8,
                                    marginTop: 15
                                }}
                                showsVerticalScrollIndicator={false}
                                data={item}
                                extraData={item}
                                renderItem={renderItem1}
                            />

                            <View
                                style={[
                                    GlobalStyle?.marginTop30
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize16,
                                        // GlobalStyle?.marginTop,
                                        {
                                            fontFamily: FONTS?.medium
                                        }

                                    ]}
                                >Comments & suggestion, if any</Text>

                                <KidsAppEditTextComment
                                    placeholder="Type here"
                                    // label={STRING.email}
                                    // value={email}
                                    height={100}
                                    multiline={true}
                                    maxLength={100}
                                    style={{
                                        borderRadius: 5,
                                        ImageBackground: COLORS?.gray
                                    }}
                                // keyBoardType={'email-address'}
                                // onChangeText={v => setEmail(v)}
                                />
                            </View>
                            <KidsAppBorderWidthBtn
                                height={55}
                                width={'100%'}
                                borderRadius={15}
                                marginTop={20}
                                textSize={18}
                                borderColor={COLORS?.colorBtn}
                                borderWidth={1}
                                textColor={COLORS?.white}
                                text={('Submit')}
                                backgroundColor={COLORS?.colorBtn}
                                onPress={() => {
                                    toggleModal();
                                }}
                                textStyle={{
                                    fontFamily: FONTS?.medium,
                                }}
                            />
                            <View
                                style={{
                                    marginBottom: 15,
                                    flex: 1
                                }}
                            />
                        </View>

                    }

                />


                <View
                    style={[
                        GlobalStyle?.marginVertical10
                    ]}
                />

            </ScrollView>
        </SafeAreaView>
    );
};

export default RecipeDetails;
const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: '100%',
        height: 600,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(80, 190, 180, 0)',
    },
    name: {
        fontSize: 20,
        color: COLORS.white,
        marginTop: 15,
        fontFamily: 'Montserrat-Medium',
    },
    email: {
        fontSize: 14,
        color: COLORS.white,
        fontFamily: 'Montserrat-Medium',
    },
});
