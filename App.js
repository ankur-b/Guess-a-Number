import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';
const App = (props) => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds,setGuessRounds] = useState(0);
  configureNewGameHandler = () =>{
    setGuessRounds(0);
    setUserNumber(null);
  }
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };
  const gameOverHandler = (numOfRounds) =>{
    setGuessRounds(numOfRounds);
  }
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  }else if (guessRounds > 0){
    content = <GameOverScreen  newGameHandler={configureNewGameHandler} rounds={guessRounds} userNumber={userNumber}/>
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
