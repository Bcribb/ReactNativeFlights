import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import SearchBar from './SearchBar'
import ResultsTable from './ResultsTable'

export default Search = ({things}) => {

    const [ isReturn, setIsReturn ] = useState(false);
    const [ src, setSrc ] = useState('PNQ');
    const [ dest, setDest ] = useState('DEL');
    const [ depDate, setDepDate ] = useState('10-Mar-2020');
    const [ retDate, setRetDate ] = useState('12-Mar-2020');

    const parameters = {
        isReturn,
        src,
        dest,
        depDate,
        retDate
    }

    const setters = {
        setIsReturn,
        setSrc,
        setDest,
        setDepDate,
        setRetDate
    }

    return(
        <SafeAreaView>
            <ScrollView style={styles.scrollView}>
                <SearchBar parameters={parameters} setters={setters}/>
                <ResultsTable isReturn={isReturn} parameters={parameters}/>
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
