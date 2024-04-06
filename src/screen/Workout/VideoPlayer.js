// VideoPlayer.js

import React from 'react';
import Video from 'react-native-video';
import { StyleSheet } from 'react-native';

const VideoPlayer = ({ source }) => {
  return (
    <Video
      source={source}
      style={styles.videoPlayer}
      resizeMode='cover'
      controls={false}
      paused={false}
    />
  );
};

const styles = StyleSheet.create({
  videoPlayer: {
    flex: 1,
  },
});

export default VideoPlayer;
