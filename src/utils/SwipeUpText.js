import React, {useEffect, useState} from 'react';
import {Animated, Modal, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import LottieView from 'lottie-react-native';

const SwipeUpText = ({textArray, isVisible, onClose}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateY = new Animated.Value(0);
  const animationDuration = 2000;

  useEffect(() => {
    const animateText = () => {
      Animated.timing(translateY, {
        toValue: -35, // Distance to swipe up
        duration: animationDuration,
        useNativeDriver: false,
      }).start(() => {
        translateY.setValue(0);

        // Move to the next message
        setCurrentIndex(prevIndex => prevIndex + 1);
      });
    };

    if (currentIndex < textArray.length) {
      const animationTimeout = setTimeout(animateText, animationDuration);
      return () => clearTimeout(animationTimeout);
    }
  }, [currentIndex]);

  const currentText = textArray[currentIndex] || '';

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={isVisible}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <LottieView
            style={{
              height: 65,
              width: 65,
              // backgroundColor: 'red',
            }}
            source={require('../../src/constants/loading_star.json')}
            autoPlay
            loop
          />
          <Animated.View
            style={{
              flex: 1,
              transform: [{translateY}],
            }}>
            <Text
              style={{
                color: COLORS.primary,
                fontFamily: FONTS.medium,
                fontSize: 16,
                marginHorizontal: 5,
              }}>
              {currentText}
            </Text>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
};

export default SwipeUpText;
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000080',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    width: SIZES.width - 60,
    paddingHorizontal: 5,
    height: 95,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 75,
  },
});
