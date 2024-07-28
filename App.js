import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Task from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';

export default function App() {
  const [taskArr, setTaskArr] = useState([]); 

  const handleAddTask = (task) => {
    if(task) {
        setTaskArr([...taskArr, task]);
    }
  }

  const handleTaskComplete = (index) => {
    let newTaskArr = [...taskArr];
    newTaskArr.splice(index,1);
    setTaskArr(newTaskArr);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Task</Text>
      <ScrollView style={styles.task}>
        {
          taskArr &&
          taskArr.map((task,index) => (
            <TouchableOpacity  key={index} onPress={() => handleTaskComplete(index)} >
              <Task text={task} />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <AddTask handleAddTask={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  task: {
    marginTop: 20,
  }
});
