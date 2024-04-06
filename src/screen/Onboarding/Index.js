import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from '../../constants';
import GlobalStyle from '../../styles/GlobalStyle';
import LinearGradient from 'react-native-linear-gradient';
import LoginHeader from '../../global/LoginHeader';
import Steps1Scrr from './Steps1Scrr';
import GlobalStyle1 from '../../styles/GlobalStyle1';
import Step2Scrr from './Step2Scrr';
import Step3Scrr from './Step3Scrr';
import Step4Scrr from './Step4Scrr';
import Step6Scrr from './Step6Scrr';
import Step5Scrr from './Step5Scr';

const Onboarding = () => {
    const navigation = useNavigation();

    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { number: 1, text: 'Camera Access' },
        { number: 2, text: 'Verify Identity' },
        { number: 3, text: 'Know You' },
        { number: 4, text: 'Record Video' },
        { number: 5, text: 'Verify Video' },
        { number: 6, text: 'Verify Video' }
    ];

    const goToNextStep = () => {
        if (currentStep < 6) {
            setCurrentStep(currentStep + 1);
        }
    };

    const goToPreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const renderItem = ({ item }) => {
        const isCompleted = item.number < currentStep; // Check if the step is completed
        const isCurrentStep = item.number === currentStep; // Check if the step is the current step

        return (
            <View
                style={{
                    flex: 1,
                    marginTop: 10,
                    // width: '100%'
                    // marginHorizontal: 5,

                }}
            >
                <View style={{
                    // flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    // margin: ,
                    // marginHorizontal: 5,
                    // alignSelf: 'center',
                    paddingVertical: 10,
                    paddingHorizontal: 7
                }}>
                    {isCurrentStep ? (

                        <View style={GlobalStyle1.stepHeader}>
                            <Text style={[GlobalStyle.fontSize16, {
                                fontFamily: FONTS?.medium
                            }]}>{item.number}</Text>
                        </View>
                    ) : (
                        <View style={[GlobalStyle1.stepHeader, {
                            backgroundColor: isCompleted ? COLORS.colorBtn : COLORS.white
                        }]}>
                            <Text style={[GlobalStyle.fontSize16, {
                                fontFamily: FONTS?.medium,
                                color: isCompleted ? COLORS.white : COLORS.black
                            }]}>{item.number}</Text>
                        </View>

                    )}

                    {currentStep === item.number && (
                        <View
                            style={{
                                flex: 1,
                                width: 100
                            }}
                        >
                            <Text
                                numberOfLines={1}
                                style={[
                                    GlobalStyle.fontSize14,
                                    GlobalStyle.marginLeft,
                                    {
                                        color: COLORS?.colorBtn,
                                        fontFamily: FONTS?.semi_bold
                                    }]}>{item?.text}</Text>

                        </View>
                    )}

                </View>
                {isCurrentStep ? (
                    <View style={{
                        width: '100%',
                        height: 5,
                        // borderTopLeftRadius: 5,
                        backgroundColor: COLORS.colorBtn,
                        marginTop: 10,
                        flex: 1

                    }} />
                ) : (
                    <View style={{
                        // flex:1,
                        width: '100%',
                        height: 5,
                        // borderRadius: 5,
                        marginTop: 10,
                        backgroundColor: isCompleted ? COLORS.colorBtn : COLORS.gray
                    }} />
                )}
            </View>
        )
    };

    const renderScreen = () => {

        return (
            <View style={[GlobalStyle.mainContainer, { backgroundColor: COLORS.background }]}>
                <LoginHeader />
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <FlatList
                        data={steps}
                        style={{
                            paddingEnd: 10,
                            // paddingTop:10,
                            paddingBottom: 10,
                            paddingLeft: 10,
                            marginTop: 10,
                        }}
                        renderItem={renderItem}
                        horizontal
                        keyExtractor={item => item.number.toString()}
                        extraData={currentStep} // Assuming currentStep will affect rendering
                    />
                </View>
                <ScrollView>
                    {currentStep === 1 && (
                        <Steps1Scrr
                            goToNextStep={goToNextStep}
                            goToPreviousStep={goToPreviousStep}
                        />
                    )}
                    {currentStep === 2 && (
                        <Step2Scrr
                            goToNextStep={goToNextStep}
                            goToPreviousStep={goToPreviousStep}
                        />
                    )}
                    {currentStep === 3 && (
                        <Step3Scrr
                            goToNextStep={goToNextStep}
                            goToPreviousStep={goToPreviousStep}
                        />
                    )}
                    {currentStep === 4 && (
                        <Step4Scrr
                            goToNextStep={goToNextStep}
                            goToPreviousStep={goToPreviousStep}
                        />
                    )}
                    {currentStep === 5 && (
                        <Step5Scrr
                            goToNextStep={goToNextStep}
                            goToPreviousStep={goToPreviousStep}
                        />
                    )}
                    {currentStep === 6 && (
                        <Step6Scrr
                            goToPreviousStep={goToPreviousStep}
                        />
                    )}
                </ScrollView>

            </View>
        );
    };

    return renderScreen();
};

export default Onboarding;
