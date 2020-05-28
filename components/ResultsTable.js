import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Result from './Result'
import data from "../assets/flights.json"

export default ResultsTable = ({ isReturn, parameters }) => {
    const flights = [
        {
            price : 100,
            flightNumber : 'Al-202',
            src : 'PNQ',
            dest : 'DEL',
            departure : '10 AM',
            depDate : '10-Mar-2020',
            arrival : '12 PM'
        },
        {
            price : 200,
            flightNumber : 'Al-203',
            src : 'DEL',
            dest : 'PNQ',
            departure : '10 AM',
            depDate : '12-Mar-2020',
            arrival : '12 PM'
        }
    ]

    const checkFlight = (f1, f2) => {
        if(f1.src === f2.src && f1.dest === f2.dest && f1.depDate === f2.depDate) {
            return true;
        }
        return false;
    }

    const validFlight = (flight) => {
        var returnFlight = null;
        if(isReturn) {
            returnFlight = {
                src : parameters.dest,
                dest : parameters.src,
                depDate : parameters.retDate
            }

            if(checkFlight(flight, parameters)) {
                return(data.map((flight2, index) =>{
                    return(
                        <Fragment key={index}>
                            {checkFlight(flight2, returnFlight) ? <Result isReturn={true} outFlight={flight} inFlight={flight2}/> : <></>}
                        </Fragment>
                    )
                }))
            }
            return <></>
        } else {
            if(checkFlight(flight, parameters)) {
                return <Result isReturn={false} outFlight={flight}/>
            }
        }
    }

    return(
        <View style={styles.resultsTable}>
            {data.map((flight, index) =>{
                return(
                    <Fragment key={index}>
                        {validFlight(flight)}
                    </Fragment>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    resultsTable: {
        alignSelf: 'stretch',
    }
})