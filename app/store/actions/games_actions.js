import { GET_GAMES } from '../../store/reducers/types';

import axios from 'axios';
import { FIREBASEURL } from '../../utils/misc';

export function getGames(){

    return {
        type:GET_GAMES,
        payload: {
            games: 'Hello'
        }
    }

}
