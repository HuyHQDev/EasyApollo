

import Api from "../../api/Api";
import {saveAccessToken} from "../../util/LocalStorage";
import {fetchSubjects} from "./GroupAction";
import {navigateToPage} from "./NavigationAction";
import {GROUP_PAGE} from "../../router/AppNavigator";

export const signIn = (email, password) => {
    return async (dispatch, getState) => {
        try {
            const response = await Api.signIn(email, password);
            const accessToken = response && response.signIn;
            saveAccessToken(accessToken);
            dispatch(navigateToPage(GROUP_PAGE));
        }
        catch (error) {
            alert(JSON.stringify(error));
        }
    }
};