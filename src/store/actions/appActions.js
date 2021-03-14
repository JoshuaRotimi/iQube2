import axios from 'axios';

export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_FAIL = 'FETCH_DETAILS_FAIL';
export const FETCH_DETAILS_START = 'FETCH_DETAILS_START';
export const FETCH_DETAILS_END = 'FETCH_DETAILS_END';

const BASE_URL = 'https://covidnigeria.herokuapp.com/api';
export const fetchResult = () => async (dispatch) => {
  dispatch({ type: FETCH_DETAILS_START });

  try {
    const res = await (await axios.get(BASE_URL)).data.data;

    dispatch({ type: FETCH_DETAILS_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: FETCH_DETAILS_FAIL, payload: error });
    console.log(error);
  }
  dispatch({ type: FETCH_DETAILS_END });
};
