import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/SpotifyAuthContext';
import { Button, Form } from 'react-bootstrap';
import sampleData from './item';
import cheerio from 'cheerio';
import axios from 'axios';
import { resolvePath } from 'react-router-dom';

const LoggedInPage = () => {
    const { test, tokenURL } = useAuth();
    const linkRef = useRef();
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userID, setUserID] = useState();
    const [userPlaylists, setUserPlaylists] = useState();
    const [buttonState, setButtonState] = useState(false);
    const [fetchedData, setFetchedData] = useState();
    const songIDList = [];
    const uriArray = [];
    let holdData;
    
    
    const getServerData = async (urlData) => {
        const songsData = urlData;
        await axios.get(`/musicdata/${urlData}`)
        .then((response) => {
            holdData = response.data;
            setFetchedData(response.data);
            console.log('response.data', response.data);
            const foundIt = response.data;
            const helpMe = createSongURIs(foundIt)  //PROBLEM IS HERE
            .then((response) => {
                console.log('planning', response);
            })
            .catch((err) => {
                console.log('issues came', err);
            })
        })
        .catch((err) => {
            console.log('finale fiale', err);
        })
        console.log('holdData', holdData);
        console.log('fetchedData', fetchedData);
        // searchAllSongs(holdData);
        // const currURIs = await createSongURIs(holdData)
        // .then((response) => {
        //     console.log('planning', response);
        //     // addSongsToPlaylist(response);
        // });
        // console.log('phoneplan ', currURIs);
    }


    const getToken = () => {
        // console.log(tokenURL);
        const newLoc = window.location.hash;
        // console.log(newLoc);
        let access_token = new URLSearchParams(newLoc).get('#access_token');
        // console.log('access_token: ', access_token);
        return access_token;
        
    }

    const getUserData = async () => {
        const testURL = 'https://api.spotify.com/v1/me';
        const token = getToken();
        console.log('token: ', token);

        await axios
            .get(testURL, {
                headers: { Authorization: "Bearer " + token }
            })
            .then((response) => {
                console.log(response.data)
                setUserName(response.data.display_name);
                setUserEmail(response.data.email);
                setUserID(response.data.id);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const getCurrentUserPlaylists = async () => {
        const testURL = `https://api.spotify.com/v1/me/playlists`;
        const token = getToken();
        console.log('userid ', userID );

        await axios
            .get(testURL, {
                headers: { Authorization: "Bearer " + token }
            })
            .then((response) => {
                const playlistNames = response.data.items;
                console.log('playlists: ', playlistNames);
                setUserPlaylists(playlistNames);
            })
            .catch((error) => {
                console.log(error);
            })
        
        // console.log(userPlaylists);
        // userPlaylists.forEach((playlist) => {
        //     console.log('Playlist Name: ', playlist.name);
        // })
    }

    const createPlaylist = async () => {
        const testURL = `https://api.spotify.com/v1/users/${userID}/playlists`;
        const token = getToken();
        
        return await axios({
            method: "post",
            url: testURL,
            data: {
                name: "I Want",
                description: "You've Got Mail!",
                public: true
            },
            headers: { Authorization: "Bearer " + token }
        })
        .then((response) => {
            console.log('posted new playlist');
            console.log(response.data);
            console.log('Playlist ID: ' + response.data.id);
            return response.data.id
        })
        .catch((error) => {
            console.log('couldnt post new playlist ', error);
        })
    }

    const searchAllSongs = (list) => {
        list.forEach((data, index) => {
            const tempURL = `https://api.spotify.com/v1/search?q=artist:${data.artist}%20track:${data.title}%20album:${data.album}&type=track&limit=1`;
            const tempURL2 = `https://api.spotify.com/v1/search?q=artist:${data.artist}%20track:${data.title}&type=track&limit=1`;
            const tempURL3 = `https://api.spotify.com/v1/search?q=track:${data.title}&type=track&limit=1`;
            const token = getToken();
    
            axios
                .get(tempURL2, {
                    headers: { Authorization: "Bearer " + token }
                })
                .then((response) => {
                    console.log('response: ', response.data);
                    console.log('Found: ', response.data.tracks.items[0])
                    if(response.data.tracks.items[0] === undefined){
                        console.log('oops for: ', data.title);
                    }
                    else{
                        console.log('SongName: ', response.data.tracks.items[0].name)
                        songIDList.push(response.data.tracks.items[0].id)
                    }
                    console.log('Artist: ', response.data.tracks.items[0].album.artists[0].name)
                    console.log('SongID: ', response.data.tracks.items[0].id)
                })
                .catch((error) => {
                    console.log('failure ', error);
                })
            })
            console.log('Done with Search');
            console.log('SongID List: ', songIDList);
            return songIDList;
    }   
    //FIX CREATEURIS
    const createSongURIs = (data) => {
        console.log('planning into create URIS: ', data); //raw data song objects
        console.log('planning OUT OF create URIS: ', sampleData);
        // const uriResults = await searchAllSongs(data);
        // console.log('results', uriResults);
        const uriRay = [];
        let URIString = '';
        const uriResults = searchAllSongs(data); //uriResults is returning a promise
        console.log('lettyresults123', uriResults); //array
        console.log('lettyresults212343', songIDList); //array but cant index
        for(let i = 0; i < 97; i++){
            console.log('lettyloop', songIDList[i]);
        }
        // uriResults.forEach((id, index) => {
        //     console.log('lettydex');
        // })
        // .then((response) => {
        //     console.log('lettypoops', response);
        //     console.log('lettypoops2', response[2]);
        //     for (let index = 0; index < 97; index ++){
        //         console.log('looping');
        //         index === uriResults.length - 1 ? URIString += `spotify:track:${response[index]}` : URIString += `spotify:track:${response[index]}`;
        //         console.log('CURRENT URISTRING IS: ', URIString);
        //         uriRay.push(URIString);
        //         URIString = '';
        //         console.log('urindex', index);
        //     }
        //     console.log('lettyfinalesssss', uriRay);

        // })

        // uriResults.forEach((song_id, index) => {
        //     index === uriResults.length - 1 ? URIString += `spotify:track:${song_id}` : URIString += `spotify:track:${song_id}`;
        //     console.log('CURRENT URISTRING IS: ', URIString);
        //     uriRay.push(URIString);
        //     URIString = '';
        //     console.log('urindex', index);
        // })
        console.log('lettfinale2', uriRay);
        return uriRay;
    }

    const addSongsToPlaylist = async (id) => {
        const play_id = id;
        const testURL = `https://api.spotify.com/v1/playlists/${play_id}/tracks`;
        const token = getToken();
        const URIString = createSongURIs()
        .then((response) => {
            console.log('withinplay', response);
            axios({
                method: "post",
                url: testURL,
                headers: { Authorization: "Bearer " + token },
                data: {
                   uris: response
                },
                position: 0
            })
            .then((response) => {
                console.log('added song to playlist');
                console.log(response.data);
                console.log('Playlist ID: ' + response.data.id);
            })
            .catch((error) => {
                console.log('couldnt post songs to new playlist ', error);
                return addSongsToPlaylist(play_id);
            })
        })
        .catch((err) => {
            console.log('theres been a problem', err);
        })
        console.log("INPUT URISTRING IS: ", URIString);
        console.log('uriburyaray', uriArray);
    }

    const printUserPlaylists = () => {
        userPlaylists.forEach((playlist) => {
            console.log('Playlist Name: ', playlist.name);
        })
    }

    const doItAll = async (link) => {
        const currID = await createSongURIs();
        addSongsToPlaylist(currID);
        setButtonState(true);
        
        console.log(currID);
    }



    const scrape = (urly) => {
        console.log('urly  ;', urly);
        console.log(userName);
        axios.get(urly)
        .then((response) => {
            if(response.status === 200){
                const html = response.data;
                const $ = cheerio.load(html);

                //initialize arrays
                const songArray = [];
                const artistArray = [];
                const albumArray = [];
                const collection = [];

                //initialize elements
                const songList = $('.songs-list-row__song-name');
                const artistList = $('.songs-list__col--artist');
                const albumList = $('.songs-list__col--album');

                //song List
                songList.each((i, element) => {
                    const song = $(element).text();
                    songArray.push(song);
                    console.log(song);
                })
                //artist List
                artistList.each((i, element) => {
                    const artist = $(element).find('a').text();
                    if(artist !== ''){
                        artistArray.push(artist)
                    }
                    // artist === '' ? null : artistArray.push(artist);
                    console.log(artist);
                })
                //album List
                albumList.each((i, element) => {
                    const album = $(element).find('a').text();
                    if(album !== ''){
                        albumArray.push(album)
                    }
                    // album === '' ? null : albumArray.push(album);
                    console.log(album);
                })
                //add songs to collection
                for(let i = 0; i < songArray.length; i++){
                    const newSong = {
                        title: songArray[i],
                        artist: artistArray[i],
                        album: albumArray[i],
                        songNo: i + 1
                    }
                    collection.push(newSong);
                }
                
                console.log(collection);
            }
        })
        .catch((err) => {
            console.log('error bro fix it', err);
        })
    }

    useEffect(() => {
        // console.log('result', getUserData())
        // setUser(getUserData());
        getUserData();
        getCurrentUserPlaylists();
    }, [])
    return ( 
        <>
            Logged In?
            <div>Welcome: {userName}</div>
            <div>Email: {userEmail}</div>
            <div>User ID: {userID}</div>
            <Button variant="warning" onClick={getUserData} style={{margin: '5px'}}>Sample</Button>
            <Button variant="success" onClick={printUserPlaylists} style={{margin: '5px'}}>Get Playlists</Button>
            <Button variant="danger" onClick={createPlaylist} style={{margin: '5px'}}>Create Playlist</Button>
            <Button variant="info" onClick={() => searchAllSongs(sampleData)} style={{margin: '5px'}}>Search All Songs</Button>
            <Form>
                <Form.Label>Enter Playlist URL</Form.Label>
                <Form.Control type="text" placeholder="URL HERE" ref={linkRef}/>
            </Form>
            <Button variant="danger" onClick={() => getServerData(linkRef.current.value)}>Submit</Button>
            <Button variant="warning" onClick={doItAll} disabled={buttonState} style={{margin: '5px'}}>DO IT!!</Button>
            <Button variant="dark" onClick={() => createSongURIs(sampleData)} style={{margin: '5px'}}>Create URIs</Button>
            <Button variant="primary" onClick={() => addSongsToPlaylist()} style={{margin: '5px'}}>Add Songs to Playlist</Button>
            <Button variant="light" onClick={getServerData} style={{margin: '5px'}}>Scrape</Button>
        </>
     );
}
 
export default LoggedInPage;