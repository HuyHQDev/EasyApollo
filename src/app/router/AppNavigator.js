import {StackNavigator} from "react-navigation";
import LoginScreen from "../component/login/LoginScreen";
import GroupScreen from "../component/group/GroupScreen";
import SplashScreen from "../component/splash/SplashScreen";
import CalendarScreen from "../component/calendar/CalendarScreen";
import HomeScreen from "../component/home/HomeScreen";
import ListScreen from "../component/list/ListScreen";
import NavigationScreen from "../component/navigation/NavigationScreen";
import OverviewScreen from "../component/overview/OverviewScreen";
import ProfileScreen from "../component/profile/ProfileScreen";
import SettingScreen from "../component/setting/SettingScreen";
import SignUpScreen from "../component/signUp/SignUpScreen";
import TimelineScreen from "../component/timeline/TimelineScreen";
import WalkthroughScreen from "../component/walkthrough/WalkthroughScreen";
import CreateScreen from "../component/create/CreateScreen";
import CreateGroupScreen from "../component/group/CreateGroupScreen";

export const LOGIN_PAGE = 'Login';
export const GROUP_PAGE = 'Group';
export const SPLASH = 'Splash';
export const CALENDAR_PAGE = 'Calendar';
export const HOME_PAGE = 'Home';
export const LIST_PAGE = 'List';
export const NAVIGATION_PAGE = 'Navigation';
export const OVERVIEW_PAGE = 'Overview';
export const PROFILE_PAGE = 'Profile';
export const SETTING_PAGE = 'Setting';
export const SIGN_UP_PAGE = 'SignUp';
export const TIMELINE_PAGE = 'Timeline';
export const WALKTHROUGH_PAGE = 'Walkthrough';
export const CREATE_PAGE = 'Create';
export const CREATE_GROUP_PAGE = 'CreateGroup';

export default StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        },
    },
    Group: {
        screen: GroupScreen,
        navigationOptions: {
            header: null
        },
    },
    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            header: null
        },
    },
    Calendar: {
        screen: CalendarScreen,
        navigationOptions: {
            header: null
        },
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        },
    },
    List: {
        screen: ListScreen,
        navigationOptions: {
            header: null
        },
    },
    Navigation: {
        screen: NavigationScreen,
        navigationOptions: {
            header: null
        },
    },
    Overview: {
        screen: OverviewScreen,
        navigationOptions: {
            header: null
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            header: null
        },
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            header: null
        },
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            header: null
        },
    },
    Timeline: {
        screen: TimelineScreen,
        navigationOptions: {
            header: null
        },
    },
    Walkthrough: {
        screen: WalkthroughScreen,
        navigationOptions: {
            header: null
        },
    },
    Create: {
        screen: CreateScreen,
        navigationOptions: {
            header: null
        },
    },
    CreateGroup: {
        screen: CreateGroupScreen,
        navigationOptions: {
            header: null
        },
    }
});