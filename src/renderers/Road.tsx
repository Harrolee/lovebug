import Matter from 'matter-js';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Size} from '../types';

import RoadLine from './RoadLine';

type Props = {
  body: Matter.Body;
  size: Size;
};

const Road = ({body, size}: Props) => {
  const width = size.width;
  const height = size.height;

  const x = body.position.x;
  const y = body.position.y;

  const styles = StyleSheet.create({
    roadLocation: {
      position: 'absolute',
      left: x,
      top: y,
    },
  });

  return (
    <View style={styles.roadLocation}>
      <RoadLine width={width} height={height} top={0} />

      <RoadLine width={width} height={height} />

      <RoadLine width={width} height={height} />

      <RoadLine width={width} height={height} />

      <RoadLine width={width} height={height} />
    </View>
  );
};

export default Road;
