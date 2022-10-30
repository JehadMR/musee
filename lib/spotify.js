import axios from 'axios';
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const PLAYLISTS_ENDPOINT = '/me/playlists';
const TRACKS_ENDPOINT = '/me/top/tracks';
const PLAYER_ENDPOINT = '/me/player';
axios.defaults.baseURL = 'https://api.spotify.com/v1';
const url = require('url');

const token_Headers = {
  headers: {
     Authorization: `Basic ${basic}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  }
};




const getAccessToken = async (refresh_token) => {
  const params = new url.URLSearchParams({ grant_type: 'refresh_token', refresh_token });
  const response = await axios.post(TOKEN_ENDPOINT,params.toString() ,token_Headers
  ).then(res => res.data) 
       return response;
};


{/*const getAccessToken = async (refresh_token) => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });
  
    return response.json();
  }; */}

  export const getUsersPlaylists = async (refresh_token) => {
    const {access_token} = await getAccessToken(refresh_token);
    return axios.get(PLAYLISTS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };


  export const getUsersTracks = async (refresh_token) => {
    const {access_token} = await getAccessToken(refresh_token);
    return axios.get(TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        ContentType: 'application/json',
      },
    });
  };

  export const getPlayer = async (refresh_token) => {
    const {access_token} = await getAccessToken(refresh_token);
    return axios.get(PLAYER_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        ContentType: 'application/json',
      },
    });
  };
