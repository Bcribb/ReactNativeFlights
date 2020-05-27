import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Result from './Result'

export default ResultsTable = () => {
    return(
        <View style={styles.resultsTable}>
            <Result/>
            <Result/>
            <Result/>
        </View>
    )
}

const styles = StyleSheet.create({
    resultsTable: {
        alignSelf: 'stretch',
    }
})