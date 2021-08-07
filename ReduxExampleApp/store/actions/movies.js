// Define action types
export const GET_MOVIES = 'FETCH_MOVIES';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';

// Construct a BASE URL for API endpoint
const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'b814c9de5ae2d1beb467c4ab8d41f97f';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
    try {

        return async dispatch => {
            const res = await fetch(BASE_URL);
            const json = await res.json();
            if (json) {
                dispatch({
                    type: GET_MOVIES,
                    payload: json.results,
                });
            } else {
                console.log('Unable to fetch');
            }
        };
    } catch (error) {

    }
}