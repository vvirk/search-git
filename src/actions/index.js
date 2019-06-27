import * as type from './actionTypes';

export const addResult = result => ({
    type: type.ADD_RESULT,
    result,
  });

export const apiUrl = 'https://api.github.com/';
export const getOrgs = (orgsname) => async (dispatch) => {
  try {
    const url =`${apiUrl}search/users?q=${orgsname}+type:org`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addResult(responseBody));
  } catch {
    console.log('ERROR!');
  }
};