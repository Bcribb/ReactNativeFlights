import React from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import Flight from './Flight'

export default Result = (isReturn) => {
    return(
        <View style={containerStyles.result}>
            <View style={containerStyles.leftContainer}>
                <Text style={contentStyles.price}>
                    $1000
                </Text>
                <View style={containerStyles.flightsContainer}>
                    <Flight/>
                    {isReturn && <Flight/>}
                </View>
            </View>
            <View style={containerStyles.rightContainer}>
                <Image
                    style={contentStyles.image}
                    source={
                        require('./plane.jpg')
                    }
                />
                <Button
                    title={'Book'}
                />
            </View>
        </View>
    )
}

const containerStyles = StyleSheet.create({
    result: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginTop: 5,
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 4,
        backgroundColor: "#61dafb",
    },
    leftContainer: {
        margin: 5,
        flex: 1,
        flexDirection: 'column'
    },
    flightsContainer: {
        margin: 5,
        flex: 1,
        flexDirection: 'row'
    },
    rightContainer: {
        margin: 5,
        alignItems: 'flex-end',
        flex: 1,
    }
})

const contentStyles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        backgroundColor: "#000"
    },
    price: {
        fontSize: 20
    }
})