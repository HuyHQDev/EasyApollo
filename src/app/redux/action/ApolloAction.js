export const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS';
import * as api from '../../api/Api';

export const fetchAuthors = () => {
    return async (dispatch, getState) => {
        try {
            const authors = await api.fetchAuthors();
            dispatch(fetchAuthorsSuccess(authors));
        }
        catch (error) {
            alert(JSON.stringify(error));
        }
    }
};

export const fetchAuthorsSuccess = (authors) => {
    return {
        type: FETCH_AUTHORS_SUCCESS,
        payload: {
            authors
        }
    }
};
