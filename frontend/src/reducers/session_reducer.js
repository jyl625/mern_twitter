import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_CURRENT_USER: //added
      return {
        isAuthenticated: true,
        user: action.currentUser
      }
    case RECEIVE_USER_SIGN_IN: //added
      return {
        isAuthenticated: true,
        user: action.currentUser
      }
    default:
      return state;
  }
}
// const sessionReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case RECEIVE_USER_LOGOUT:
//       return {
//         isAuthenticated: false,
//         user: undefined
//       };
//     default:
//       return state;
//   }
// }

// export default sessionReducer;