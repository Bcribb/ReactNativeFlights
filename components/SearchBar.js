import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default SearchBar = () => {
    return(
        <View style={styles.searchView}>
            <Text>
                This muh search bar
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    searchView: {
        flex: 1,
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 4,
        backgroundColor: "#303090",
    }
})