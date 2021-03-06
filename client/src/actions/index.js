import streamsapi from '../apis/streams';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    DELETE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    UPDATE_STREAM
} from "./types";
import history from "../history";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};


export const createStream = formValues => async (dispatch,getState) => {
    const {userId} = getState().auth;
    const response = await streamsapi.post('/streams',{...formValues,userId});

    dispatch({ type: CREATE_STREAM, payload: response.data});
    history.push('/');
};

export const fetchStreams = () => async dispatch => {
    const response = await streamsapi.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data});
};

export const fetchStream = id => async dispatch => {
    const response = await streamsapi.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data});
};

export const updateStream = (id,formValues) => async dispatch => {
    const response = await streamsapi.patch(`/streams/${id}`,formValues);

    dispatch({ type: UPDATE_STREAM, payload: response.data});
    history.push('/');
};

export const deleteStream = id => async dispatch => {
    await streamsapi.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id});
    history.push('/');
};
