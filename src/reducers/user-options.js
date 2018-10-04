import {
    SET_LOCAL_USER_OPTION,
    REMOVE_LOCAL_USER_OPTION,
    DESTROY_LOCAL_USER_OPTIONS
  } from '../actions/user-options';
  
  const userOptions = function (state = {}, action) {
    switch (action.type) {
      case SET_LOCAL_USER_OPTION:
          state[action.name] = action.value;
          sessionStorage.setItem('user_options', JSON.stringify(state));
          return state;
      case REMOVE_LOCAL_USER_OPTION:
          if(typeof state[action.name] !== 'undefined') {
              delete state[action.name];
          }
          sessionStorage.setItem('user_options', JSON.stringify(state));
          return state;
      case DESTROY_LOCAL_USER_OPTIONS:
          if(sessionStorage.getItem('user_options')) {
              sessionStorage.removeItem('user_options')
          }
          return {};
      default:
          return state;
    }
  }
  
  export default userOptions;
  