const userInformations = function (state = {}, action) {
  switch (action.type) {
    case 'SET_LOCAL_USER_INFORMATION':
        if(sessionStorage.getItem('user_informations')) {
            if(JSON.stringify(action.userObject) !== sessionStorage.getItem('user_informations'))
            {
              sessionStorage.setItem('user_informations', JSON.stringify(action.userObject))
            }

            return JSON.parse(sessionStorage.getItem('user_informations'));
        }
        sessionStorage.setItem('user_informations', JSON.stringify(action.userObject));
        return action.userObject;
      break;
    case 'DESTROY_LOCAL_USER_INFORMATION':
        if(sessionStorage.getItem('user_informations')) {
            sessionStorage.removeItem('user_informations')
        }
        return {};
      break;
    default:
      return state;
  }
}

export default userInformations;
