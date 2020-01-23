import * as type from '../actions/actionTypes';

export const initialState = {
  orgs: [],
  currentOrg: '',
  currentOrgInfo: {},
  currentOrgMembers: [],
  currentOrgRepos: [],
  currentUser: '',
  currentUserInfo: {},
  currentUserFollowers: [],
  currentUserFollowing: [],
  currentUserRepos: [],
  isFetching: false,
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_RESULT:
      return { ...state, orgs: action.result.items };
    case type.GET_CURRENT_ORG:
      return { ...state, currentOrg: action.currentOrg };
    case type.ADD_ORG_INFO:
      return { ...state, currentOrgInfo: action.info };
    case type.ADD_ORG_MEMBERS:
      return { ...state, currentOrgMembers: action.orgMembers };
    case type.ADD_ORG_REPOS:
      return { ...state, currentOrgRepos: action.orgRepos };  
    case type.GET_CURRENT_USER:
      return { ...state, currentUser: action.currentUser };  
    case type.ADD_USER_INFO:
      return { ...state, currentUserInfo: action.currentUserInfo };
    case type.ADD_USER_FOLLOWERS:
      return { ...state, currentUserFollowers: action.userFollowers };
    case type.ADD_USER_FOLLOWING:
      return { ...state, currentUserFollowing: action.userFollowing };
    case type.ADD_USER_REPOS:
      return { ...state, currentUserRepos: action.userRepos };
    case type.TOGGLE_IS_FETSHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};