import { combineReducers } from 'redux';
import userInformations from './user-informations';
import userOptions from './user-options';

export default combineReducers({
    userInformations,
    userOptions
})
