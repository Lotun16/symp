import React from 'react';
import { useState, useEffect, useContext} from 'react';

const SpotifyAuthContext = React.createContext();

export function useAuth() {
    return useContext(SpotifyAuthContext);
}

export function SpotifyAuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [tokenURL, setTokenURL] = useState('testURL');
    const [loading, setLoading] = useState(true);

    //generateRandomString
    let generateRandomString = function (length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
    };

    //credentials
    const client_id = 'e4045c92f0604721b7cebb8a90d0629a'; // Your client id
    const redirect_uri = 'http://localhost:3000/loggedin'; // Your redirect uri
    const state = generateRandomString(16);
    const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private user-library-modify';

    //spotifylogin
    const spotifyImplicitLogin = async () => {
        let url = 'https://accounts.spotify.com/authorize';
        url+= '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        url += '&state=' + encodeURIComponent(state);
        setTokenURL(url);
        window.location.replace(url);

        // let access_token = new URLSearchParams(url.search).get('access_token');
        // console.log('access_token: ', access_token);
        // console.log('url: ', url);
    }

    // useEffect(() => {
    //     setTokenURL(url)
    //     setLoading(false)
    // }, [])

    const value = {
        currentUser,
        tokenURL,
        spotifyImplicitLogin,
        
    }

    return(
        <SpotifyAuthContext.Provider value={value}>
            {children}
        </SpotifyAuthContext.Provider>
    )
}