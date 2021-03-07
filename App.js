import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';

const App = (props) => {
  const [userNumber, setUserNumber] = useState();
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber) {
    content = <GameScreen userChoice={userNumber}/>;
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
