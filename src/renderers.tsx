import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Position} from './types';

const RADIUS = 20;

type Props = {
  position: Position;
};

export function Finger(props: Props) {
  const x = props.position.x - RADIUS / 2;
  const y = props.position.y - RADIUS / 2;
  return <View style={[styles.finger, {left: x, top: y}]} />;
}

const styles = StyleSheet.create({
  finger: {
    borderColor: '#CCC',
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: 'pink',
    position: 'absolute',
  },
});
