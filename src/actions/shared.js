import {getInitialData} from "../utils/api";
import {receiveQuestions} from "./questions";
import {receiveUsers} from "./users";
import {setAuthedUser} from "./authedUser";
import {
    showLoading,
    hideLoading
} from 'react-redux-loading';

const AUTHED_USER_ID = "tylermcginnis";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(setAuthedUser(AUTHED_USER_ID));
                dispatch(hideLoading());
            })
    }
}