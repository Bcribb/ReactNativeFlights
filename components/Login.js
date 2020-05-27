import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';

export default Login = ({loggedIn, setLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    onLogin = () => {
        // TODO: Change to SQL check
        if(username === 'Blain' && password === 'Nuk') {
            setLoggedIn(true);
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.labels}>Username</Text>
            <TextInput
                value={username}
                onChangeText={(username) => setUsername(username)}
                label='Username'
                style={styles.input}
            />
            <Text style={styles.labels}>Password</Text>
            <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                label='Password'
                secureTextEntry={true}
                style={styles.input}
            />
            <Button
                title={'Login'}
                style={styles.input}
                onPress={this.onLogin.bind(this)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    labels: {
        textAlign: 'center', 
        alignSelf: 'stretch',
        lineHeight: 30,
        color: 'grey',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});
