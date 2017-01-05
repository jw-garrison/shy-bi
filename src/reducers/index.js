import { combineReducers } from 'redux';

import { reducer as FormReducer } from 'redux-form';
import UsersReducer from './usersReducer';
import ProfileReducer from './profileReducer';
import AuthReducer from './authReducer';
import FilterReducer from './filterReducer';
import VisibleUsersReducer from './visibleUsersReducer';
import ActionsReducer from './actionsReducer';

console.log('REDUCERS/ROOT | Exporting ROOT Reducer...');
console.log('REDUCERS/ROOT | Importing FormReducer');
console.log('REDUCERS/ROOT | Importing ProfileReducer');
console.log('REDUCERS/ROOT | Importing AuthReducer');

console.log('REDUCERS/ROOT | Cominbing all reducers');
console.log('REDUCERS/ROOT | Creating a new Application State');

const RootReducer = combineReducers({
  form: FormReducer,
  users: UsersReducer,
  profile: ProfileReducer,
  auth: AuthReducer,
  filter: FilterReducer,
  visibleUsers: VisibleUsersReducer,
  actions: ActionsReducer,
});

export default RootReducer;
console.log('REDUCERS/ROOT | Exported ROOT Reducer');
console.log(' ');
