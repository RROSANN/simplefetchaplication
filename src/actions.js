import {
	REQUEST_CHARACTER_PENDING,
	REQUEST_CHARACTER_SUCCESS,
	REQUEST_CHARACTER_FAILED
} from './constants.js'


export const requestCharacter = () => (dispatch) => {
	dispatch({ type: REQUEST_CHARACTER_PENDING });
	fetch('http://swapi.dev/api/people/1/')
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_CHARACTER_SUCCESS, payload: data }))
		.catch(error => dispatch({ type: REQUEST_CHARACTER_FAILED, payload: error }))
}