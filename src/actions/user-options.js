export const SET_LOCAL_USER_OPTION = 'SET_LOCAL_USER_OPTION';
export const REMOVE_LOCAL_USER_OPTION = 'REMOVE_LOCAL_USER_OPTION';
export const DESTROY_LOCAL_USER_OPTIONS = 'DESTROY_LOCAL_USER_OPTIONS';


export const setUserOption = function (name, value) {
    return {
        type: SET_LOCAL_USER_OPTION,
        name,
        value
    };
}

export const removeUserOption = function (name) {
    return {
        type: REMOVE_LOCAL_USER_OPTION,
        name
    };
}

export const destroyUserOptions = function () {
    return {
        type: DESTROY_LOCAL_USER_OPTIONS
    };
}
