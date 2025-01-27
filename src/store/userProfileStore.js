import {create} from "zustand";

const useUserProfileStore = create ((set) => (
  {
    userProfile: null,
    setUserProfile:(userProfile) => set({userProfile}),
      // add Post
  }
))

export default useUserProfileStore;

