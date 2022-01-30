import Matter, {Engine} from 'matter-js';
import {GameEngine} from 'react-native-game-engine';

import {Entities} from './types';
import Road from './renderers/Road';
import {floor, roadBody} from './objects';
import {BOX_SIZE, DEVICE_HEIGHT, DEVICE_WIDTH, ROAD_SIZE} from './Constants';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Box from './renderers/Box';

export function World() {
  const [gameSetupStatus, setGameSetupStatus] = useState(true);
  const [gamePauseStatus, setGamePauseStatus] = useState(false);
  const [score, setScore] = useState(0);
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(DEVICE_HEIGHT - 200);

  // with useRef, if the engine changes, we won't rerender
  // anything that uses the engine.
  const engine = Engine.create();
  const world = engine.world;
  const entities = getEntities(engine, world, roadBody);

  const physics = (gameEntities: Entities, {time}: any) => {
    let gameEngine = gameEntities.physics.engine;

    gameEngine.world.gravity.y = 0.5;
    Matter.Engine.update(gameEngine, time.delta);
    return gameEntities;
  };

  const roadTranslation = () => {
    if (!gamePauseStatus) {
      Matter.Body.setPosition(roadBody, {
        x: roadBody.position.x,
        y: roadBody.position.y + 1,
      });

      if (roadBody.position.y >= DEVICE_HEIGHT / 5) {
        Matter.Body.setPosition(roadBody, {
          x: roadBody.position.x,
          y: 0,
        });
      }
    }
    return entities;
  };

  if (gameSetupStatus) {
    return (
      <GameEngine
        style={styles.container}
        systems={[physics, roadTranslation]}
        entities={entities}>
        <View style={styles.infoWrapper}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Score: {score}</Text>
          </View>
        </View>
      </GameEngine>
    );
  }
  return (
    <View style={styles.centered}>
      <Text style={styles.text}>Something isn't right..</Text>
    </View>
  );
}

const getEntities = (engine: any, world: any, road: Matter.Body) => {
  const gameEntities = {
    physics: {
      engine,
      world,
    },

    theRoad: {
      body: road,
      size: ROAD_SIZE,
      renderer: Road,
    },

    gameFloor: {
      body: floor,
      size: [DEVICE_WIDTH, 10],
      color: '#414448',
      renderer: Box,
    },
  };

  return gameEntities;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  centered: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },

  infoWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreContainer: {
    position: 'absolute',
    top: 50,
    right: 50,
  },
  scoreText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
});
