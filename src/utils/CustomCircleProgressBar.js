import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Circle, Svg} from 'react-native-svg';
import {COLORS} from '../constants';

const CustomCircleProgressBar = ({
  progress,
  radius,
  strokeWidth,
  backgroundColor,
  progressColor,
}) => {
  const circumference = 2 * Math.PI * radius;
  const progressStrokeDashoffset = circumference * (1 - progress);

  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressStrokeDashoffset}
          fill="transparent"
        />
      </Svg>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 30,
    transform: [{rotate: '-90deg'}],
  },
});
export default CustomCircleProgressBar;
