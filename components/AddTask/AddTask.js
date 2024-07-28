import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity } from 'react-native';

const AddTask = ({handleAddTask}) => {
    const [task, setTask] = useState();

    const addTaskPress = () => {
        handleAddTask(task);
        setTask(null);
    }

    return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.addTaskWrapper}
            >
                <TextInput 
                    style={styles.input}
                    placeholder={"Write a Task"}
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <TouchableOpacity onPress={() => addTaskPress()}>
                    <View style={styles.addTaskBtn}>
                        <Text style={styles.BtnText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>        
    )
}

const styles = StyleSheet.create({
    addTaskWrapper: {
        position: 'relative',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingVertical: 20
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#c0c0c0',
        borderWidth: 1,
    },
    addTaskBtn: {
        width: 45,
        height: 45,
        borderRadius: 60,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    BtnText: {
        fontSize: 20
    },
});

export default AddTask;
