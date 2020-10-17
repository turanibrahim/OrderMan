import * as types from './types';

export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

export function setUserCredentials(response) {
  return {
    type: types.SET_USER_CREDENTIALS,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
