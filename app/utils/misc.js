// import { AsyncStorage } from 'react-native';

export const FIREBASEURL = 'https://rn-nba-app-2d2fa.firebaseio.com';
export const APIKEY = 'AIzaSyBJ1iK6IqjUhPwc-9bsToRyqIGN67pZXA4';
export const SIGNUP = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}';
export const SIGNIN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}';
export const REFRESH = '';


// export const getTokens = (cb) => {

//     AsyncStorage.multiGet([
//         ['@newNbaApp@token'],
//         ['@newNbaApp@refreshToken'],
//         ['@newNbaApp@expireToken'],
//         ['@newNbaApp@uid']
//     ]).then( value => {
//         cb();
//     });


// }

// export const setTokens = (values, cb) => {
//     const dateNow = new Date();
//     const expiration = dateNow.getTime() + (3600 * 1000);

//     AsyncStorage.multiSet([
//         ['@newNbaApp@token', values.token],
//         ['@newNbaApp@refreshToken', values.refToken],
//         ['@newNbaApp@expireToken', expiration.toString()],
//         ['@newNbaApp@uid', values.uid]
//     ]).then( response => {
//         cb();
//     });
// }