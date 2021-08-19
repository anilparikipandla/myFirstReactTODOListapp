import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Image,
} from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableHighlight
      underlayColor='#2196F3'
      activeOpacity={0.6}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <View style={styles.textContent}>
          <Text>{props.title}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.CheckItemIcon}>
            <Text style={styles.closeText}>+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.removeItemIcon}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#e9f5fe',
    borderWidth: 1,
    borderColor: '#2196F3',
    marginVertical: 5,
    flex: 1,
    // borderRadius: 10,
    // elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  textContent: {
    width: '80%',
    flex: 8,
  },
  removeItemIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e63946',
    borderRadius: 100,
    flex: 1,
    marginHorizontal: 5,
    // width: '5',
    // height: '5',
  },
  CheckItemIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 100,
    flex: 1,
    marginHorizontal: 5,
    // width: '5',
    // height: '5',
  },
  closeText: {
    color: '#fff',
    paddingHorizontal: 5,
  },
});

export default GoalItem;
