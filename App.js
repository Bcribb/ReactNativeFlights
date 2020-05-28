import React, {useState} from 'react';
import Login from './components/Login';
import Search from './components/Search'

export default App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            {!loggedIn && <Login 
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
            />}
            {loggedIn && <Search/>}
        </>
    );
}