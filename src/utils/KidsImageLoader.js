import { Animated, View } from 'react-native';
import React, { useState } from 'react';
import { images } from '../constants';

const ProducerImageLoader = ({
  defaultImg,
  source,
  styles,
  viewStyle,
  blurRadius,
}) => {
  const [defImageAnimated, setDefImageAnimated] = useState(
    new Animated.Value(0),
  );
  const [imageAnimated, setImageAnimated] = useState(new Animated.Value(0));

  const handleDef = () => {
    Animated.timing(defImageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleImage = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={[
        {
          // backgroundColor: '#ffff',
          // backgroundColor: COLORS.editTextTitle,

          borderRadius: 10,
        },
        viewStyle,
      ]}>
      <Animated.Image
        source={images.def_logo}
        style={[
          {
            opacity: defImageAnimated,
            // resizeMode: 'stretch',
            // tintColor: COLORS.grey,
            // backgroundColor: COLORS.editTextTitle,
          },

          styles,
        ]}
        onLoad={handleDef}
        blurRadius={blurRadius || 0}
      />

      {source != '' || null ? (
        <Animated.Image
          source={{ uri: source }}
          style={[
            styles,
            {
              opacity: imageAnimated,
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          ]}
          onLoad={handleImage}
          blurRadius={blurRadius || 0}
        />
      ) : null}
    </View>
  );
};

export default ProducerImageLoader;
