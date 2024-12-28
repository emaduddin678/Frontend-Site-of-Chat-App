import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { useQuery } from "@tanstack/react-query";
import useCheckAuth from "../hooks/useCheckAuth";

const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  setAuthUser: (user) => {
    set({ authUser: user });
  }, // Method to update authUser
  setIsSigningUp: (status) => set({ isSigningUp: status }), // Method to update isSigningUp
  setIsLoggingIn: (status) => set({ isLoggingIn: status }), // Method to update isLoggingIn
  setIsUpdatingProfile: (status) => set({ isUpdatingProfile: status }), // Method to update isUpdatingProfile
  setIsCheckingAuth: (status) => set({ isCheckingAuth: status }), // Method to update isCheckingAuth

  // try {
  //   const res = await axiosInstance.get("/auth/check");
  //   console.log(res)
  //   set({ authUser: res.data });
  // } catch (error) {
  //     console.log("Error in checkAuth", error)
  //   set({ authUser: null });
  // } finally {
  //   set({ isCheckingAuth: false });
  // }
  //   checkAuth: () => {
  //     useQuery({
  //       queryKey: ["authUser"],
  //       queryFn: () =>
  //         axiosInstance.get("/auth/check").then((res) => console.log(res)),
  //     });
  //   },
}));

export default useAuthStore;
