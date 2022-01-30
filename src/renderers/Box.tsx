import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Size} from '../types';

interface Props {
  body: Matter.Body;
  size: Size;
  color: string;
}

const Box = (props: Props) => {
  const width = props.size.width;
  const height = props.size.height;

  const x = props.body.position.x;
  const y = props.body.position.y;

  const styles = StyleSheet.create({
    box: {
      position: 'absolute',
      left: x,
      top: y,
      width: width,
      height: height,
      backgroundColor: props.color,
    },
  });

  return <View style={styles.box} />;
};

export default Box;
