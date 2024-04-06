import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Rect} from 'react-native-svg';

const CustomProgressBar = ({progress, width, height, color}) => {
  const barWidth = width * progress;

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        <Rect width={width} height={height} fill="#E5E5E5" />
        <Rect width={barWidth} height={height} fill={color} />
      </Svg>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 5,
  },
});
export default CustomProgressBar;
