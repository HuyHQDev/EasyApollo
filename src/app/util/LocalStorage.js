import {
    AsyncStorage
} from 'react-native';

const KEY_ACCESS_TOKEN = 'access_token';

export const saveAccessToken = (token) => AsyncStorage.setItem(KEY_ACCESS_TOKEN, token);

export const getAccessToken = () => {
    return AsyncStorage.getItem(KEY_ACCESS_TOKEN);
};

export const removeAccessToken = () => AsyncStorage.removeItem(KEY_ACCESS_TOKEN);

