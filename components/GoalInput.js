import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Text } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide' transparent={true}>
      <View style={styles.modal}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder=' Enter your course Goal'
            style={styles.input}
            onChangeText={goalInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Add' onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button title='Cancel' color='#e63946' onPress={props.onCancel} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  input: {
    borderColor: '#2196F3',
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    width: '80%',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    // marginHorizontal: 30,
    // marginVertical: 250,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
