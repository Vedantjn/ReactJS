import {useState} from 'react';

function Profile(){

    const [loggedIn, setLoggedIn] = useState(1);

    // 1, 2, 3
    return(
        <div>
            {/* {loggedIn ? <h1>Welcome Vedant</h1> : <h1>Welcome Guest</h1>} */}
            {loggedIn==1 ? <h1>Welcome user 1</h1> : loggedIn == 2 ? <h1>Welcome user 2</h1> : <h1>Welcome user 3</h1>}

        </div>
    ) 
        
}

export default Profile;