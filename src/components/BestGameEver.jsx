import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {GameLoop} from 'react-native-game-engine';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
const RADIUS = 25;
const startLocation = {x: 0, y: 0};

export default function BestGameEver() {
  const [location, setLocation] = useState(startLocation);
  useEffect(() => {
    setLocation({x: WIDTH / 2 - RADIUS, y: HEIGHT / 2 - RADIUS});
  }, []);
  console.log(location);

  const updateHandler = ({touches, screen, layout, time}) => {
    let move = touches.find(x => x.type === 'move');
    if (move) {
      setLocation({
        x: location.x + move.delta.pageX,
        y: location.y + move.delta.pageY,
      });
    }
  };

  return (
    <GameLoop style={styles.container} onUpdate={updateHandler}>
      <View style={[styles.player, {left: location.x, top: location.y}]} />
    </GameLoop>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  player: {
    position: 'absolute',
    backgroundColor: 'pink',
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2,
  },
});
