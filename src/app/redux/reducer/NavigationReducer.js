import AppNavigator, {
    CALENDAR_PAGE,
    CREATE_PAGE,
    GROUP_PAGE, HOME_PAGE, LIST_PAGE, LOGIN_PAGE, NAVIGATION_PAGE, OVERVIEW_PAGE, PROFILE_PAGE, SETTING_PAGE,
    SIGN_UP_PAGE,
    SPLASH, TIMELINE_PAGE
} from "../../router/AppNavigator";
import {NavigationActions} from "react-navigation";

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams(GROUP_PAGE));

export const navigationReducer = (state = initialState, action) => {
    const nextState = preventMultiClick(action, state) ? null : AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

const preventMultiClick = (action, state) => {
    const {type, routeName} = action;
    return !!(
        state &&
        type === NavigationActions.NAVIGATE &&
        routeName === state.routes[state.routes.length - 1].routeName
    )
};
