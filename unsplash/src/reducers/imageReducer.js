import { NEW_IMAGES } from '../actions/types';

const initialState = {
    images: []
}

export default function (state = initialState, action) {
    // console.log('fetch action');
    switch (action.type) {
        case NEW_IMAGES:
            return {
                ...state,
                images: action.payload
            }
        default:
            return state
    }
}