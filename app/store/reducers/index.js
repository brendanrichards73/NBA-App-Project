import { combineReducers } from "redux";
import User from '../reducers/user_reducer';
import News from './news_reducer';
import Games from './games._reducer';

const rootReducer = combineReducers({
    User,
    News,
    Games
});

export default rootReducer;