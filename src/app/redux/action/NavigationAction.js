import {NavigationActions} from "react-navigation";

export const navigateToPage = (pageName, data) => {
    return NavigationActions.navigate({
        routeName: pageName,
        params: data
    })
};

export const resetToPage = (pageName) => {
    return NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: pageName}),
        ]
    })
};

export const navigateBack = () => {
    return NavigationActions.back({})
};

