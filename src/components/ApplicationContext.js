import React from 'react';
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';


function getLoggedInUser() {
  const cookie = Cookies.get('jwt')
  console.log(`getting cookies: ${cookie}`)
return cookie;

}
const ApplicationContext = React.createContext({
  fetch: () => {
    throw new Error('Fetch method not initialized.');
  },
  JWT: '',
});

export default ApplicationContext;
