import {
    LOCATION_UPDATE
} from '../reducer.js'

const initialState = {}

export default function (state = initialState, action) {

    switch (action.type) {

        case LOCATION_UPDATE:
            return action.location

    }

    return state;

}