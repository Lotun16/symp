import React from 'react';
import { useState, useEffect} from 'react';
import { useAuth } from '../contexts/SpotifyAuthContext';
import { Button } from 'react-bootstrap';

const Page = () => {
    // const spotifyImplicitLogin = () => {
    //     console.log('test1');
    // }
    const { spotifyImplicitLogin } = useAuth();
    return ( 
        <>
            Page Component
            <Button variant="success" onClick={spotifyImplicitLogin}>Login 2 Spotify</Button>
        </>
     );
}
 
export default Page;