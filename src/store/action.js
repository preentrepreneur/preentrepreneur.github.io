import CONSTANTS from './constants'

export const setUserType = (payload) => {
    return {
        type: CONSTANTS.SET_USER_TYPE,
        payload
    }
}

export const setUser = (payload) => {
    return {
        type: CONSTANTS.SET_USER,
        payload
    }
}