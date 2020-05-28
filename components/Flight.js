import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Flight = ({flight}) => {
    const { flightNumber, src, dest, departure, arrival } = flight;

    return(
        <View style={styles.container}>
            <Text style={styles.flightNumber}>{flightNumber}</Text>
            <Text style={styles.path}>{src} > {dest}</Text>
            <Text style={styles.timings}>Dep: {departure}</Text>
            <Text style={styles.timings}>Arr: {arrival}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '70%'
    },
    flightNumber: {
        fontSize: 10
    },
    path: {
        fontSize: 12
    },
    timings: {
        fontSize: 14
    }
})