import * as authReducer from '../features/auth/redux/reducers';
import * as mainReducer from '../features/main/redux/reducers';
import * as userReducer from '../features/user/redux/reducers';
import * as cartReducer from '../features/cart/redux/reducers';
export default Object.assign(
  {},
  authReducer,
  mainReducer,
  userReducer,
  cartReducer,
);
