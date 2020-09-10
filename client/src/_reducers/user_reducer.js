/*import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_action/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      //...state :원래 state을 그대로 가져옴.
      return { ...state, loginSuccess: action.payload };
      break;
    case REGISTER_USER:
      return { ...state, register: action.payload };
      break;
    case AUTH_USER:
      //action.payload에 user에 관한 모든 데이터가 들어가 있음.
      //server/ index.js 참고
      return { ...state, userData: action.payload };
      break;
    default:
      return state;
  }
}*/
