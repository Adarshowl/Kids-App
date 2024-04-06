import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/Colors';

const KidsAppCommonToolBar = props => {
  return (
    <View
      style={[
        styles.wrapper,
        {
          ...props?.style,
        },
      ]}>
      <Text
        style={[
          {
            color: 'gold',
            fontFamily: 'OpenSans-Bold',
            fontSize: 22,
            ...props?.textStyle,
          },
        ]}>
        {props.title || ''}
      </Text>
    </View>
  );
};

export default KidsAppCommonToolBar;

const styles = StyleSheet.create({
  wrapper: {
    height: 56,
    backgroundColor: COLORS.colorPrimary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
