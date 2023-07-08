import axios from 'axios';

import {
  COMPETITOR_LIST_REQUEST,
  COMPETITOR_LIST_SUCCESS,
  COMPETITOR_LIST_FAIL,
} from '../constants/competitorConstants.js';

export const listCompetitors = () => async (dispatch) => {
  try {
    dispatch({ type: COMPETITOR_LIST_REQUEST });
    const { data } = await axios.get('/api/competitors');
    dispatch({
      type: COMPETITOR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMPETITOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
