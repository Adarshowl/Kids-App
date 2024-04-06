import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../../constants';
import images from '../../../constants/images';
import icons from '../../../constants/icons';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import GlobalStyle from '../../../styles/GlobalStyle';


const Onboarding = ({ navigation }) => {
    const [currentScreen, setCurrentScreen] = useState(1);

    // const navigateToNextScreen = () => {
    //     setCurrentScreen((currentScreen) => (currentScreen < 3 ?
    //         // currentScreen + 1 : 1
    //         navigation.navigate('Welcome')

    //         ));
    // };
    const navigateToNextScreen = () => {
        if (currentScreen < 3) {
            setCurrentScreen(currentScreen + 1);
        } else {
            navigation.navigate('Welcome');
        }
    };
    const getImageSource = () => {
        switch (currentScreen) {
            case 1:
                return icons.arrow1;
            case 2:
                return icons.arrow2;
            case 3:
                return icons.arrow3;
            default:
                return null;
        }
    };
    return (
        <SafeAreaView
            style={[
                GlobalStyle.mainContainer,
                {
                },
            ]}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Welcome');
                }}
            >
                <Text
                    style={[
                        {
                            marginTop: 15,
                            color: COLORS?.black,
                            marginBottom: 15,
                            textAlign: 'right',
                            fontFamily: FONTS?.semi_bold,
                            fontSize: 18,
                            marginEnd: 10,

                        },
                    ]}>
                    Skip
                    {/* {!show ? t('skip') : ' '} */}
                </Text>
            </TouchableOpacity>
            <ScrollView>
                {currentScreen === 1 &&
                    <Screen1 />
                }
                {currentScreen === 2 &&
                    <Screen2 />
                }
                {currentScreen === 3 &&
                    <Screen3 />
                }
            </ScrollView>

            <TouchableOpacity onPress={navigateToNextScreen} style={styles.circle}>
                <Image
                    source={getImageSource()}
                    style={{
                        // width: 50,
                        // height: 50
                    }}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    circle: {
        width: 80,
        height: 80,
        borderRadius: 25,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        // elevation:
    },
});

export default Onboarding;
