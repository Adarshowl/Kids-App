import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet

} from 'react-native';
import CustomHeader from '../../global/CustomHeader';
import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'

import GlobalStyle from '../../styles/GlobalStyle';
import CommHeader from '../../global/CommHeader';
import images from '../../constants/images';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';


const NewPlan = ({ navigation }) => {


    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer
            ]}
        >
            <CommHeader
                title="Ready!"
                headerTitle="Your New Program is"
                onPressLeft={() => navigation.goBack(null)}

            />


            <ScrollView
            >
                <View
                    style={[
                        GlobalStyle?.marginHorizontal15,
                        GlobalStyle?.marginTop15
                    ]}
                >
                    <ImageBackground
                        source={images?.RectaShap}
                        style={{
                            // flex: 1,
                            width: '100%',
                            height: 600,
                            borderRadius: 16,
                        }}
                        resizeMode='contain'
                    >
                        <ImageBackground
                            source={images?.NewPlan}
                            style={{
                                flex: 1,
                                width: '100%',
                                height: 600,
                                // position: 'absolute',
                                // right: 0,
                                borderRadius: 16,

                            }}
                            resizeMode='contain'
                        >
                            <View style={styles.overlay}></View>
                            <ImageBackground
                                source={images?.RectaShap}
                                style={{
                                    flex: 1,
                                    width: '100%',
                                    // height: 600
                                }}
                            >
                                <ImageBackground
                                    source={images?.Chart}
                                    style={{
                                        flex: 1,
                                        width: '90%',
                                        height: 540,
                                        marginTop: 20
                                    }}
                                    resizeMode='contain'
                                ></ImageBackground>

                            </ImageBackground>
                        </ImageBackground>



                    </ImageBackground>
                </View>

                <View style={[
                    GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.marginTop15
                ]}>
                    <KidsAppCommBtn
                        height={55}
                        width={'100%'}
                        borderRadius={30}
                        marginTop={30}
                        textSize={17}
                        borderColor={COLORS?.gray}

                        textColor={COLORS?.white}
                        text={('Get My Plan')}
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
                <View
                    style={[
                        GlobalStyle?.marginVertical10
                    ]}
                />

            </ScrollView>


        </SafeAreaView>
    );
};

export default NewPlan;
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
