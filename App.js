import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [isAddMode, setIsAddMode] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  console.log('courseGoals: ', courseGoals);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle) {
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle },
      ]);
    }

    setIsAddMode(false);
    // setCourseGoals((currentGoals) => {
    //   return;
    //   [...currentGoals, { id: Math.random().toString(), value: goalTitle }];
    // });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
      // return currentGoals.filter((goal) => {
      //   if (goal.id !== goalId) { return true};
      // });
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.addNewButton}>
        <Button title='Add a New Goal' onPress={() => setIsAddMode(true)} />
      </View>
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      ></FlatList>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: '#fff',
    flex: 1,
  },
  addNewButton: {
    paddingTop: 50,
    marginBottom: 20,
  },
});
