import axios from 'axios';

async function login(){
    const token = await axios.post('https://api.petfinder.com/v2/oauth2/token',
      {
        grant_type: 'client_credentials',
        client_id: 'pgegwfGZTKAXKaJG5YnLXC3tNZn07pUTahjdSmmcrXpnIehY5V',
        client_secret: 'uigRdskxgzBMkUK3LiE8etJMxEfkWshssc1e872X'

      });
      return token.data.access_token;
  }

async function getDogs(token) {
    const resp = await axios({
      url: 'https://api.petfinder.com/v2/animals?type=dog&page=2',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // console.log(resp.data);
    return resp.data;
}

export {
    getDogs, login
}


  