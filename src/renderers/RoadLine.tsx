import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  width: number;
  height: number;
  top?: number;
}

const RoadLine = (props: Props) => {
  const top = props.top ?? 100;
  const styles = StyleSheet.create({
    RoadLine: {
      marginTop: top,
      width: props.width,
      height: props.height,
      backgroundColor: '#fff',
    },
  });

  return <View style={styles.RoadLine} />;
};

export default RoadLine;
