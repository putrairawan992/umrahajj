import { createStore } from 'redux';
import rootReducer from './reducers';

const userInformation = (function () {
    try {
        const userInformation = sessionStorage.getItem('user_informations');

        if(!userInformation) {
          return undefined;
        }

        return JSON.parse(sessionStorage.getItem('user_informations'));
    } catch (error) {
        return undefined;
    }
})();

const userOption = (function () {
    try {
        const userOption = sessionStorage.getItem('user_options');

        if(!userOption) {
          return undefined;
        }

        return JSON.parse(sessionStorage.getItem('user_options'));
    } catch (error) {
        return undefined;
    }
})();

export default createStore(rootReducer, { userInformations: userInformation, userOptions: userOption });
