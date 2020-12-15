import * as authReducer from 'app/features/auth/redux/reducers';
import * as mainReducer from 'app/features/main/redux/reducers';
import * as userReducer from 'app/features/user/redux/reducers';
export default Object.assign({}, authReducer, mainReducer, userReducer);
