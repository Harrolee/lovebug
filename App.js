import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
// import {GameEngine} from 'react-native-game-engine';
// import {MoveFinger} from './src/systems';
// import {Finger} from './src/renderers';
import {World} from './src/World';

const App = () => {
  return <World />;
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
// });

export default App;

// <GameEngine
//   style={styles.container}
//   systems={[MoveFinger]}
//   entities={{1: {position: {x: 40, y: 200}, renderer: <Finger />}}}>
//   <StatusBar hidden={true} />
// </GameEngine>
