import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber,setSelectedNumber] = useState('');
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false)
  };
  const confirmInputHandler = () =>{
      const chosenNumber = parseInt(enteredValue)
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
          Alert.alert('Invalid number!','Number has to be a number between 1 and 99.',[{text:'Okay',style:'destructive',onPress:resetInputHandler}])
          return
      }
      setConfirmed(true)
      setSelectedNumber(parseInt(enteredValue))
      setEnteredValue('');
  }
  let confirmedOutput;
  if (confirmed){
      confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.accent}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    height: 40,
    width: 50,
    textAlign: 'center',
  },
});
export default StartGameScreen;