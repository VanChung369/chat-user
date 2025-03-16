import { RootState } from "@/redux/configStore";
import { shallowEqual, TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = (state) =>
  useSelector(state, shallowEqual);
