import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = ({text}) => {
    return (
        <View style={styles.taskWrapper}>
            <View style={styles.leftPart}>
                <View style={styles.square} ></View>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View style={styles.rightPart}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskWrapper: {
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#F7EFEE',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftPart: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    rightPart: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5
    },
    text: {
        fontSize: 18,
        width: '80%',
        marginLeft: 10,
    },
    square: {
        backgroundColor: '#28CFEA',
        width: 24,
        height: 24,
        borderRadius: 6,
        opacity: 0.7,
    }
  });

export default Task;
