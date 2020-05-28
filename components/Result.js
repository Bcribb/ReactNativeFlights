import React from 'react';
import { StyleSheet, Image, Text, View, Button, Alert } from 'react-native';
import Flight from './Flight'

export default Result = ({isReturn, outFlight, inFlight}) => {

    const createAlert = () => {
        Alert.alert(
            "Book Flight",
            "Booked " + (isReturn ? "return" : "one-way") + " flight from " + outFlight.src + " to " + outFlight.dest,
            [
                { text: "OK" }
            ],
            { cancelable: false }
        );
    }

    return(
        <View style={containerStyles.result}>
            <View style={containerStyles.leftContainer}>
                <Text style={contentStyles.price}>
                    ${outFlight.price + (isReturn && inFlight.price)}
                </Text>
                <View style={containerStyles.flightsContainer}>
                    <Flight flight={outFlight}/>
                    {isReturn && <Flight flight={inFlight}/>}
                </View>
            </View>
            <View style={containerStyles.rightContainer}>
                <Image
                    style={contentStyles.image}
                    source={
                        require('../assets/plane.jpg')
                    }
                />
                <Button
                    onPress={createAlert}
                    title={'Book here'}
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
        flexDirection: 'row',
        flex: 1,
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
        backgroundColor: "#000",
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 2,
        backgroundColor: "#61dafb"
    },
    price: {
        fontSize: 20
    }
})