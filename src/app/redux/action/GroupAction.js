import GroupRepository from "../../database/GroupRepository";
import {handleError} from "./MainAction";
import {navigateBack} from "./NavigationAction";
export const FETCH_GROUP_SUCCESS = 'FETCH_GROUP_SUCCESS';

export const fetchGroups = () => {
    return async (dispatch, getState) => {
        try {
            const groupRepository = new GroupRepository();
            const groups = groupRepository.getAll();
            dispatch(fetchGroupsSuccess(groups))
        }
        catch (error) {
            handleError(error);
        }
    }
};

export const addGroup = (group) => {
    return async (dispatch, getState) => {
        try {
            const groupRepository = new GroupRepository();
            groupRepository.create(group);
            dispatch(fetchGroups());
            dispatch(navigateBack());
        }
        catch (error) {
            handleError(error);
        }
    }
};

export const updateGroup = (group) => {
    return async (dispatch, getState) => {
        try {
            const groupRepository = new GroupRepository();
            groupRepository.update(group);
            dispatch(fetchGroups());
        }
        catch (error) {
            handleError(error);
        }
    }
};

export const deleteGroup = (group) => {
    return async (dispatch, getState) => {
        try {
            const groupRepository = new GroupRepository();
            groupRepository.remove(group);
            dispatch(fetchGroups())
        }
        catch (error) {
            handleError(error);
        }
    }
};

export const fetchGroupsSuccess = (groups) => {
    return {
        type: FETCH_GROUP_SUCCESS,
        payload: {
            groups
        }
    }
};