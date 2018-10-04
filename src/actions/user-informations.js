export const setUserInformationObject = function (userObject) {
    return {
        type: 'SET_LOCAL_USER_INFORMATION',
        userObject
    };
}

export const destroyUserInformationObject = function () {
    return {
        type: 'DESTROY_LOCAL_USER_INFORMATION'
    };
}
