import React from 'react';
import { StyleSheet, ActionSheetIOS, View, Button } from 'react-native';

export default SearchBar = ({parameters, setters}) => {

    const optionsLoc = ['Cancel', 'DEL', 'PNQ'];
    const optionsDate = ['Cancel', '10-Mar-2020', '12-Mar-2020'];

    const showAction = (optionsIn, setFunc) => 
    ActionSheetIOS.showActionSheetWithOptions(
        {
            options: optionsIn,
            cancelButtonIndex: 0
        },
        buttonIndex => {
            switch(buttonIndex) {
                case 0:
                    // cancel action
                    break;
                default:
                    setFunc(optionsIn[buttonIndex])
            }
        }
    );

    const oneWay = () => {
        setters.setIsReturn(false);
    }

    const returnBut = () => {
        setters.setIsReturn(true);
    }

    const onPressSrc = () => showAction(optionsLoc, setters.setSrc);
    const onPressDest = () => showAction(optionsLoc, setters.setDest);
    const onPressDep = () => showAction(optionsDate, setters.setDepDate);
    const onPressRet = () => showAction(optionsDate, setters.setRetDate);
    const onPressPass = () => showAction(['Cancel', '1', '2', '3', '4', '5'], () => {return});

    return(
        <View style={styles.searchView}>
            <View style={styles.buttonTabs}>
                <View style={styles.button}>
                    <Button
                        title={'One-Way'}
                        onPress={oneWay.bind(this)}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title={'Return'}
                        onPress={returnBut.bind(this)}
                    />
                </View>
            </View>
            <Button onPress={onPressSrc} title="Source"/>
            <Button onPress={onPressDest} title="Destination"/>
            <Button onPress={onPressDep} title="Departure Date"/>
            {parameters.isReturn && <Button onPress={onPressRet} title="Return Date"/>}
            <Button onPress={onPressPass} title="Passengers"/>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonTabs: {
        flexDirection: 'row'
    },
    button: {
        width : '100%',
        flex : 1
    },
    searchView: {
        flex: 1,
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 4,
        backgroundColor: "#303090",
    }
})