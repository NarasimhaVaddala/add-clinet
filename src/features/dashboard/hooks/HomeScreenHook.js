import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCloseModalFunc } from "../../../redux/modalFeatureSlice";

export const useHomeScreenHook = () => {
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state) => state.profileSlice);
  const { isDisplayModal } = useSelector((state) => state.modalSlice);

  useEffect(() => {
    if (!userProfile?.paymentStatus && !isDisplayModal) {
      dispatch(openCloseModalFunc());
    }
  }, [userProfile, isDisplayModal, dispatch]);

  return {
    userProfile,
    isDisplayModal
  };
};
