import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { COLORS, FONTS } from '../constants';

const PreprationContent = () => {
  // Define your content
  const content = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ];

  return (
    <ScrollView>
      {content.map((item, index) => (
        <View key={index} style={[
          GlobalStyle?.marginTop15,
          GlobalStyle?.paddingHorizontal5,
          {
            flexDirection: 'row',
            marginBottom: 15
          }

        ]}>
          <Text style={[
            GlobalStyle?.fontSize18,

          ]}>{index + 1}.</Text>
          <Text style={[
            GlobalStyle?.marginLeft15, {
              fontSize: 13,
              fontFamily: FONTS?.regular,
              color: COLORS?.grey
            }
          ]}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});

export default PreprationContent;
