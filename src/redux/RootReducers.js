// import authToken from "../features/auth/Redux/loginSlice";
// import profile from "../features/auth/Redux/profileSlice";

// import modalSlice from "./modalFeatureSlice";

// import supportChatsList from "../features/Support/redux/supportChatSlice";

import loginSlice from "../features/auth/redux/login.slice";
import profileSlice from "../features/auth/redux/profileSlice";

import modalSlice from "./modalFeatureSlice";

const RootReducer = {
  loginSlice,
  profileSlice,
  modalSlice,
};
export default RootReducer;
