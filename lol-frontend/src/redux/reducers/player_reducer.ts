import { PlayerState } from '../models/player_model';

import {
    PlayerActionTypes,
    MOVE_PLAYER,
    SET_PLAYER_DATA,
    SET_PLAYER_TOKEN
} from '../actions/types/player-types';

const initialState: PlayerState = {
    token: {
        key: ''
    },
    details: {
        name: 'Link',
        hp: 5,
        str: 10,
        def: 10,
        stamina: 10
    },
    geo: {
        position: [0, 0],
        spriteLocation: '0px -32px',
        direction: 'EAST',
        walkIndex: 0,
        level: 0
    }
}

export function playerReducer(
    state = initialState,
    action: PlayerActionTypes
): PlayerState {
    switch(action.type) {

        case SET_PLAYER_DATA:
            return {
                ...state,
                details: {
                    ...state.details,
                    name: action.payload.name,
                }
            }

        case MOVE_PLAYER:
            return {
                ...state,
                geo: action.payload
            }

        case SET_PLAYER_TOKEN:
            console.log('token: ', action.payload)
            return {
                ...state,
                token: action.payload
            }

        default:
            return state
    }
}