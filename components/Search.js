import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import SearchBar from './SearchBar'
import ResultsTable from './ResultsTable'

export default Search = () => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.scrollView}>
                <SearchBar/>
                <ResultsTable/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        alignSelf: 'stretch',
        marginVertical: 5,
        marginHorizontal: 5,
    }
});
