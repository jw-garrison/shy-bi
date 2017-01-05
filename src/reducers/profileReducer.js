import { GET_USER } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USER:
      // console.log(`    REDUCER/PROFILE | Received Action type: ${action.type}`, action);
      console.log(`    REDUCER/PROFILE | Received Action type: ${action.type}`);
      console.log('      REDUCER/PROFILE | Creating a new PROFILE State');
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
