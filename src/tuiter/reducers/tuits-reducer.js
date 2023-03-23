import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
    "userName": "Norrec",
    "handle": "tyrannorrec",
    "image": "profile-picture.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "",
    "time": "just now",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;