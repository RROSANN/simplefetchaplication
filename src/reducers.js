import {
	REQUEST_CHARACTER_PENDING,
	REQUEST_CHARACTER_SUCCESS,
	REQUEST_CHARACTER_FAILED
} from './constants.js'

const initialStateCharacter = {
	isPending: false,
	Character: [],
	error: '' 
}

export const requestCharacter = (state = initialStateCharacter, action = {}) => {
	switch(action.type) {
		case REQUEST_CHARACTER_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_CHARACTER_SUCCESS:
			return Object.assign({}, state, { Character: action.payload, isPending: false})
		case REQUEST_CHARACTER_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false})
		default:
			return state;
	}
}

