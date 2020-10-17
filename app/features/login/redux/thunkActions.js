import * as actions from './actions';

export function loginThunk(username, password) {
  return async function(dispatch, getState) {
    if (username === 'test' && password === '1234') {
      await dispatch(actions.enableLoader);
      await dispatch(actions.setUserCredentials(1));
      await dispatch(actions.disableLoader());
    }
  };
}
