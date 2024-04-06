import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { COLORS, SIZES, } from '../../../constants';
import { FONTS } from '../../../constants/Fonts';
import images from '../../../constants/images';
import icons from '../../../constants/icons';
import GlobalStyle from '../../../styles/GlobalStyle';

const Screen3 = () => {
    return (
        <View style={{ flex: 1, }}>
            <Image
                style={{
                    height: 400,
                    width: '100%',
                    alignSelf: 'center',
                    borderRadius: 10,
                    resizeMode: 'contain',
                    marginHorizontal: 20
                }}
                source={images.group3}
            />
            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <Text style={GlobalStyle?.workOutText1}>
                    Unleash Your Potential
                </Text>
                <Text style={GlobalStyle?.workOutText1}>
                    Track Your Progress
                </Text>
                <Text style={GlobalStyle?.workOutText2}>
                    Keep up with your body recompositino
                </Text>
                <Text style={GlobalStyle?.workOutText2}>
                    journey and monitor evert sweet gain
                </Text>

            </View>
        </View>
    );
};

export default Screen3;
