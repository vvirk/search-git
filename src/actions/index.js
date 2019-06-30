import * as type from './actionTypes';

export const addResult = result => ({
    type: type.ADD_RESULT,
    result,
});

export const addOrgInfo = info => ({
  type: type.ADD_ORG_INFO,
  info,
});

export const getCurrentOrg = currentOrg => ({
  type: type.GET_CURRENT_ORG,
  currentOrg,
});

export const addOrgMembers = orgMembers => ({
  type: type.ADD_ORG_MEMBERS,
  orgMembers,
});

export const addOrgRepos = orgRepos => ({
  type: type.ADD_ORG_REPOS,
  orgRepos,
});

export const getCurrentUser = currentUser => ({
  type: type.GET_CURRENT_USER,
  currentUser,
});

export const addUser = currentUserInfo => ({
  type: type.ADD_USER_INFO,
  currentUserInfo,
});

export const addUserFollowers = userFollowers => ({
  type: type.ADD_USER_FOLLOWERS,
  userFollowers,
});

export const addUserFollowing = userFollowing => ({
  type: type.ADD_USER_FOLLOWING,
  userFollowing,
});

export const addUserRepos = userRepos => ({
  type: type.ADD_USER_REPOS,
  userRepos,
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

export const getOrg = (currentOrg) => async (dispatch) => {
  try {
    const url =`${apiUrl}orgs/${currentOrg}`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addOrgInfo(responseBody));
  } catch {
    console.log('ERROR!');
  }
};

export const getOrgMembers = (currentOrg) => async (dispatch) => {
  try {
    const url =`${apiUrl}orgs/${currentOrg}/members`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addOrgMembers(responseBody));
  } catch {
    console.log('ERROR!');
  }
};

export const getOrgRepos = (currentOrg) => async (dispatch) => {
  try {
    const url =`${apiUrl}orgs/${currentOrg}/repos`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addOrgRepos(responseBody));
  } catch {
    console.log('ERROR!');
  }
};

export const getUser = (currentUser) => async (dispatch) => {
  try {
    const url =`${apiUrl}users/${currentUser}`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addUser(responseBody));
  } catch {
    console.log('ERROR!');
  }
};

export const getUserFollowers = (currentUser) => async (dispatch) => {
  try {
    const url =`${apiUrl}users/${currentUser}/followers`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addUserFollowers(responseBody));
  } catch {
    console.log('ERROR!');
  }
};

export const getUserFollowing = (currentUser) => async (dispatch) => {
  try {
    const url =`${apiUrl}users/${currentUser}/following`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addUserFollowing(responseBody));
  } catch {
    console.log('ERROR!');
  }
};

export const getUserRepos = (currentUser) => async (dispatch) => {
  try {
    const url =`${apiUrl}users/${currentUser}/repos`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addUserRepos(responseBody));
  } catch {
    console.log('ERROR!');
  }
};